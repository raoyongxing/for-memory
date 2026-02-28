<script setup>
const props = defineProps({
    timeline: {
        type: Object,
        default: () => ({
            max: 0,
            cur: 0,
            rawTime: '00:00',
            rawMaxTime: '00:00'
        })
    }
})

watch(() => props.timeline, (newVal, oldVal) => {
    console.log('timeline', newVal)
    // if (newVal.max !== oldVal.max || newVal.cur !== oldVal.cur) {
        updatePlay()
        // updateDot()
    // }
}, { deep: true })

function updatePlay() {
    const { max, cur } = props.timeline
    const playWidth = (cur / max) * 100
    console.log('playWidth', playWidth)
    let el = document.querySelector('.player-progress__play')
    if (el) {
        el.style.width = `${playWidth}%`
        console.log('playWidth', playWidth)
    }
}

function updateDot () {
    const { max, cur } = props.timeline
    const playWidth = (cur / max) * 100
    const dotLeft = playWidth - 4
    let el = document.querySelector('.player-progress__dot')
    if (el) {
        el.style.left = `${dotLeft}%`
        console.log('dotLeft', dotLeft)
    }
}

</script>
<template>
    <div class="player-progress">
        <div class="player-progress__inner">
            <!-- <div class="player-progress__load"></div> -->
            <div class="player-progress__play">
                <!-- <span class="player-progress__dot"></span> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
    .player-progress {
        padding-top: 6px;
        height: 8px;
        cursor: pointer;
        width: 100%;
    }
    .player-progress__inner {
        position: relative;
        height: 2px;
        filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#19FFFFFF",endColorstr="#19FFFFFF");
        background: hsla(0,0%,100%,.1)
    }

    .player-progress__load {
        height: 2px;
        filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#33FFFFFF",endColorstr="#33FFFFFF");
        background: hsla(0,0%,100%,.2)
    }

    .player-progress__play {
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#B2FFFFFF",endColorstr="#B2FFFFFF");
        background: hsla(0,0%,100%,.7)
    }

    .player-progress__dot {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        background-position: 0 -170px;
        opacity: 1;
        filter: none
    }
</style>
