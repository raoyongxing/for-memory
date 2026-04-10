<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    }
})
</script>
<template>
    <div class="gallery">
        <ul class="cards">
            <li v-for="(item, index) in props.data" :key="index">
                <img :src="item.url" alt="">
            </li>
        </ul>
    </div>
</template>
