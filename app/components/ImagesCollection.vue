<script setup>
    const props = defineProps({
        images: {
            type: Array,
            default: () => []
        }
    })
    const imagesTransformList = ref([])
    const activeIndex = ref(3)
    
    function onSwitch(index) {
        activeIndex.value = index
        calculateTransformList()
    }

    const CARD_SCALE = 0.7
    const CARD_WIDTH = 600

    function calculateTransformList() {
        let _ac = activeIndex.value  
        let _vd = 2  // visible distance
        let _vdtx = [20, 83.3333]   // visible distance transformX
        let _vdry = [20, 20]   // visible distance transformY

        let defaultTransformList = props.images.map((item, index)=> {
            return index * CARD_WIDTH
        })

        defaultTransformList = defaultTransformList.map((item, index)=> {
            let dis = index - _ac
            if (dis === 0) {
                return {
                    cardTransform: '',
                    imgTransform: '',
                }
            } else if (Math.abs(dis) <= _vd) {
                let offset = -1 * Math.sign(dis) * _vdtx[Math.abs(dis) - 1]
                return {
                    cardTransform: '',
                    imgTransform: `translateX(${offset}%) scale(${CARD_SCALE}) rotateY(${_vdry[Math.abs(dis) - 1]}deg)`
                }
            } else {
                
            }
        })
    }
    calculateTransformList()
</script>

<!-- 考虑一般场景的三种 -->
<!-- 1张的，直接居中展示 -->
<!-- 2张的，主次，主70%，次30% -->
<!-- 3张及以上的，主次，次25%，主50%，次25% -->
<template>
    <!-- 图片容器 -->
    <div class="carousel-content">
        <ul class="carousel-list">
            <li
            v-for="(item, index) in props.images"
            :key="item.url"
            @click="onSwitch(index)"
            class="carousel-item"
            :class="{ 'is-in-stage': Math.round(Math.abs(index - activeIndex)) <= 1, 'is-active': index === activeIndex }"
            :style="{   }">
                <img 
                loading="lazy" 
                style="object-fit: cover;"
                class="coverflow-item"
                :fetchpriority="Math.round(Math.abs(index - activeIndex)) <= 1 ? 'high' : 'low'"
                :src="item.url"
                :alt="item.alt">
            </li>
        </ul>
    </div>
</template>

<style scoped>
.carousel-content {
    position: relative;
    height: 378px;
    width: 600px;
    overflow: hidden;
}

.carousel-content .carousel-list {
    display: flex;
    position: relative;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0px;
    opacity: 1;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    will-change: transform;
}

.carousel-item {
    visibility: hidden;
    position: absolute;
    will-change: transform;
    transition: transform 0.5s ease-in-out, filter 0.3s ease-in-out, z-index 0.1s ease-in-out;
}

.carousel-item.is-in-stage {
    z-index: 1;
    visibility: visible;
}
.carousel-item.is-active {
    z-index: 2;
    visibility: visible;
    filter: none;
}

.coverflow-item {
    /* height: 350px;
    width: 350px; */
}
</style>
