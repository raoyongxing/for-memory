<script setup>
let songInfo = ref({})
let currentTime = ref(0)
let currentIndex = ref(-1)
const audioRef = ref(null)
let isPlaying = ref(false)
let timeline = reactive({
    max: 0,
    cur: 0,
    rawTime: '00:00.00',
    rawMaxTime: '00:00.00',
})
let musicList = ref([])
let currentMusicIndex = ref(0)
let currentMusic = ref(null)
const { data: jsonData , pending, error } = await useFetch("/audio/audio.json", {
    baseURL: useRequestURL().origin
})
musicList.value = jsonData.value || []
currentMusic.value = musicList.value[currentMusicIndex.value]


if (error.value) {
    console.error('获取音频列表失败:', error.value)
}

onMounted(async () => {
    loadLyrics()
})

async function loadLyrics() {
    let response = await fetch(currentMusic.value.lrc)
    if (!response.ok) {
        console.error('Failed to load lyrics!')
        return
    }
    let lrcContent = await response.text()
    let lyrics = parseLrc(lrcContent)
    songInfo.value = lyrics

    // 在本地缓存已经存在场景下，loadmetadata不会触发，手动调用下获取的方法
    timeline.max = audioRef.value.duration
    timeline.rawMaxTime = formatTime(audioRef.value.duration)
}

function prevSong() {
    if (currentMusicIndex.value === 0) {
        currentMusicIndex.value = musicList.value.length - 1
    } else {
        currentMusicIndex.value--
    }
    currentMusic.value = musicList.value[currentMusicIndex.value]
    loadLyrics()
    loadAudio()
}
function nextSong() {
    if (currentMusicIndex.value === musicList.value.length - 1) {
        currentMusicIndex.value = 0
    } else {
        currentMusicIndex.value++
    }
    currentMusic.value = musicList.value[currentMusicIndex.value]
    loadLyrics()
    loadAudio()
}

function loadAudio() {
    audioRef.value.src = currentMusic.value.audio
    audioRef.value.load()
    audioRef.value.play()
}

function updateCurrentTime(e) {
    currentTime.value = e.target.currentTime
    timeline.cur = currentTime.value
    timeline.rawTime = formatTime(currentTime.value)
    switchToCurrentLyric()
}

function switchToCurrentLyric() {
    let _index = songInfo.value.lyrics.findLastIndex(item => item.time <= currentTime.value)
    if (_index !== -1) {
        console.log('currentLyric:', _index)
    }
    if (_index !== currentIndex.value) {
        currentIndex.value = _index
        nextTick(()=> {
            // 滚动到当前行
            let currentLyricElement = document.querySelector(`[data-index="${currentIndex.value}"]`)
            if (currentLyricElement) {
                currentLyricElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            }
        })
    }
}

function playPauseSong() {
    if (audioRef.value.paused) {
        audioRef.value.play()
    } else {
        audioRef.value.pause()
    }
    isPlaying.value = !audioRef.value.paused
}
function setTotalTime(e) {
    let totalTime = e.target.duration
    timeline.max = totalTime
    timeline.rawMaxTime = formatTime(totalTime)
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
</script>
<template>
    <main class="song-root">
        <div class="ripple-container">
            <div class="ripple ripple1"></div>
            <div class="ripple ripple2"></div>
            <div class="ripple ripple3"></div>
        </div>

        <div class="song-item">
            <p class="song-item__row" :class="{ 'song-item__row--active': index === currentIndex }" :data-index="index"
                v-for="(item, index) in songInfo.lyrics" :key="item.time">{{ item.content }}</p>
        </div>
        <div class="audio-control">
            <audio ref="audioRef" @timeupdate="updateCurrentTime" @loadedmetadata="setTotalTime"
                class="song-item__audio">
                <source v-if="currentMusic" :src="currentMusic.audio" type="audio/mpeg">
            </audio>
            <div class="operations-container">
                <button class="icon-button pre" @click="prevSong" :title="$t('voice.audio_previous')">
                    <svg t="1767769160997" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4713" width="24" height="24">
                        <path
                            d="M862.208 824.448a63.872 63.872 0 0 1-65.664-3.2l-384-256a64 64 0 0 1-0.064-106.496l384-256A64.021333 64.021333 0 0 1 896 256v512a64.106667 64.106667 0 0 1-33.792 56.448zM320 832H192c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z"
                            fill="" p-id="4714"></path>
                    </svg>
                </button>
                <button class="icon-button play" @click="playPauseSong" :title="$t('voice.audio_play_pause')">
                    <svg v-if="isPlaying" t="1767768728800" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="9603" width="24" height="24">
                        <path
                            d="M768 832h-128c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z m-384 0h-128c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z"
                            fill="" p-id="9604"></path>
                    </svg>
                    <svg v-else t="1767768860843" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4563" width="24" height="24">
                        <path
                            d="M256 832c-11.712 0-23.36-3.2-33.664-9.536A64.170667 64.170667 0 0 1 192 768V256c0-22.208 11.52-42.816 30.336-54.464a64.298667 64.298667 0 0 1 62.272-2.816l512 256a64.064 64.064 0 0 1 0 114.56l-512 256c-8.96 4.48-18.88 6.72-28.608 6.72z"
                            fill="" p-id="4564"></path>
                    </svg>
                </button>
                <button class="icon-button next" @click="nextSong" :title="$t('voice.audio_next')">
                    <svg t="1767769160997" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4713" width="24" height="24">
                        <path
                            d="M862.208 824.448a63.872 63.872 0 0 1-65.664-3.2l-384-256a64 64 0 0 1-0.064-106.496l384-256A64.021333 64.021333 0 0 1 896 256v512a64.106667 64.106667 0 0 1-33.792 56.448zM320 832H192c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z"
                            fill="" p-id="4714" transform="scale(-1,1) translate(-1024,0)"></path>
                    </svg>
                </button>
            </div>
            <div class="timeline-container">
                <MusicProgress :timeline="timeline" style="flex: 1;" />
                <span class="timeline-time ml-2 mt-2 text-sm">{{ timeline.rawTime }} / {{ timeline.rawMaxTime }}</span>
            </div>
        </div>
    </main>
</template>
<style scoped>
.song-root {
    color: rgba(15, 15, 15, 0.676);
    position: relative;
    height: calc(100vh - 64px);
    overflow-y: auto;
    padding-bottom: 110px;
}


.song-item {
    text-align: center;
    height: 100%;
    overflow-y: auto;
}

.song-item::-webkit-scrollbar {
    display: none;
}

.song-item__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.song-item__author {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.song-item__content {
    font-size: 1.5rem;
    line-height: 2;
}

.song-item__row {
    font-size: 1.5rem;
    line-height: 2;
    transition: all 0.3s ease-in-out;
}

.song-item__row--active {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f4b60bb5;
}

.audio-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* border: 1px solid #ffffff92;
        box-shadow: 0 0 10px #ffffff92; */

    background-color: #f6f2f2;
}

.timeline-container {
    display: flex;
    align-items: center;
    width: 80%;
}

.timeline {
    /* width: 800px; */
    flex: 1;
    height: 8px;
    margin-right: 1rem;

    /*为了能让::-webkit-progress-value起作用，需要添加 CSS -webkit-appearance 至 <progress> 元素。 */
    /*https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Selectors/::-webkit-progress-bar  */
    -webkit-appearance: none;
}

.timeline::-webkit-progress-bar {
    background-color: #020202;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
}

.timeline::-webkit-progress-value {
    background-color: #ffff;
    /* 进度条颜色 */
}

.operations-container {
    margin: 0.5rem 0;
}

.icon-button {
    border: none;
    background: transparent;
    cursor: pointer;
}

.icon-button svg path {
    fill: #353333;
}

.icon-button:hover svg path {
    fill: #f4b60b;
}

.icon-button.play svg path {
    fill: #000;
}

.icon-button.play {
    margin: 0 2rem;
    border-radius: 40%;
    background-color: #f4b60b;
}

@media screen and (max-width: 768px) {
    .timeline-container {
        width: 100%;
    }

    .timeline-time {
        font-size: 0.75rem;
    }
}



.ripple-container {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 45%;
    background: radial-gradient(circle at center,
            rgba(255, 0, 80, 0.8) 0%,
            rgba(0, 242, 254, 0.6) 30%,
            transparent 70%);
    animation: rippleMove 4s infinite linear;
    filter: blur(20px);
    opacity: 0.7;
}

.ripple1 {
    width: 400px;
    height: 400px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.ripple2 {
    width: 300px;
    height: 300px;
    top: 60%;
    left: 70%;
    animation-delay: -1s;
    animation-duration: 5s;
}

.ripple3 {
    width: 500px;
    height: 500px;
    top: 40%;
    left: 40%;
    animation-delay: -2s;
    animation-duration: 6s;
}

@keyframes rippleMove {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
        opacity: 0.7;
    }

    33% {
        transform: translate(100px, -50px) rotate(120deg) scale(1.2);
        opacity: 0.4;
    }

    66% {
        transform: translate(-80px, 60px) rotate(240deg) scale(0.9);
        opacity: 0.6;
    }

    100% {
        transform: translate(0, 0) rotate(360deg) scale(1);
        opacity: 0.7;
    }
}
</style>
