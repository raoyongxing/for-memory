<script setup>
    const sectionRef = ref(null)
    sectionRef.value = [
        {
            alt: "盛放的桃花",
            url: 'https://i0.hdslb.com/bfs/new_dyn/b87d684f070cb0d7b5533e79c93fc296382382112.jpg@1920w_1080h_1e_1c.webp',
        },

        {
            alt: "盛放的桃花",
            url: 'https://i0.hdslb.com/bfs/new_dyn/aa463f495b565290e259c4b3fe6ea270382382112.jpg@1920w_1080h_1e_1c.webp',
        },
        {
            alt: "盛放的桃花",
            url: 'https://i0.hdslb.com/bfs/new_dyn/ced18873b7a98e12198037de10d2873c382382112.jpg@1920w_1080h_1e_1c.webp',
        },
        {
            alt: "盛放的桃花",
            url: 'https://i0.hdslb.com/bfs/new_dyn/9551224478effb24897606e86afd4e52382382112.jpg@1920w_1080h_1e_1c.webp',
        },
        {
            alt: "盛放的桃花",
            url: 'https://i0.hdslb.com/bfs/new_dyn/310e0a9301fa7458b29956534609885e382382112.jpg@1920w_1080h_1e_1c.webp',
        },
        {
            alt: "盛放的桃花",
            url: 'https://i1.hdslb.com/bfs/new_dyn/b4d2393812b645bcc3efa327fb40334f382382112.jpg@1920w_1080h_1e_1c.webp',
        },

    ] 
</script>
<template>
    <div class="container mx-auto">
        <section ref="horizontalSectionRef" class="relative h-[600vh]">
            <div class="top-[63px] overflow-hidden">
                <div ref="horizontalContentRef" class="horizontal-content flex">
                    <div>
                         <div class="w-1/2">
                            <p class="py-2">听一场故事，去遇见一次春天，去遇见一次春天，拥抱满怀晚霞和星海，</p>
                            <p class="py-2">世界不总是逗乐你，我们让自己有趣</p>
                         </div>
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[0].url">
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[1].url">
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[2].url">
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[3].url">
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[4].url">
                        <img class="w-1/2 m-h-[540px]" loading="lazy" :src="sectionRef[5].url">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
</style>