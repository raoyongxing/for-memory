<script setup>
    const route = useRoute()
    let defaultIndex = parseInt(route.params.id || '0') || 0

    // 获取文章列表
    const articles = ref([])
    const { data: jsonData } = await useFetch('/html/atricles.json', {
        baseURL: useRequestURL().origin
    })
    articles.value = jsonData.value || []

    let curIndex = ref(defaultIndex)
    function count(delta) {
        curIndex.value = Math.max(0, Math.min(articles.value.length - 1, curIndex.value + delta))
    }


    // iframe的高度自适应
    const iframeRef = ref(null)
    function setIframeHeight() {
        try {
            const height = iframeRef.value.contentWindow.document.documentElement.scrollHeight;
            iframeRef.value.style.height = height + 'px';
        } catch (e) {
            console.warn('无法访问 iframe 内容', e);
        }
    }
    function onListenIframe () {
        setIframeHeight()
        // 监听 iframe 内部文档根元素的大小变化
        const resizeObserver = new ResizeObserver(() => {
            setIframeHeight();
        });
        resizeObserver.observe(iframeRef.value.contentWindow.document.documentElement);
    }

    // TODO: 支持web视图，a4视图查看文章
    onMounted(() => {
        setIframeHeight()
    })

    // 监听路由变化
    watch(() => route.params.id, (newId) => {
        curIndex.value = parseInt(newId || '0') || 0
    })

    const localePath = useLocalePath()
</script>

<template>
    <main class="min-h-screen bg-white text-black">
        <!-- 导航栏 -->
        <nav class="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
            <div class="container mx-auto px-4 md:px-6 py-4">
                <div class="flex items-center justify-between">
                    <!-- 返回按钮 -->
                    <NuxtLink 
                        :to="localePath('/articles/all')" 
                        class="flex items-center text-tertiary hover:text-primary transition-colors"
                    >
                        <Icon name="fa7-solid:arrow-left" class="mr-2" />
                        {{ $t('articles.back_to') }}
                    </NuxtLink>
                    
                    <!-- 文章标题 -->
                    <h1 class="text-lg md:text-xl font-medium text-primary text-center">
                        {{ articles[curIndex]?.title }}
                    </h1>
                    
                    <!-- 文章导航 -->
                    <div class="flex items-center space-x-2">
                        <button 
                            @click="count(-1)"
                            :disabled="curIndex === 0"
                            class="p-1 md:p-2 rounded-md border border-gray-700 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            :title="$t('articles.prev_article')"
                        >
                            <Icon name="fa7-solid:chevron-left" />
                        </button>
                        <button 
                            @click="count(1)"
                            :disabled="curIndex === articles.length - 1"
                            class="p-1 md:p-2 rounded-md border border-gray-700 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            :title="$t('articles.next_article')"
                        >
                            <Icon name="fa7-solid:chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 文章内容区域 -->
        <div class="pt-8 pb-10">
            <div class="container mx-auto px-4 md:px-6">
                <!-- 文章头部信息 -->
                <div class="mb-8 text-center">
                    <h1 class="text-3xl md:text-4xl font-medium text-primary mb-4">
                        {{ articles[curIndex]?.title }}
                    </h1>
                    <div class="flex items-center justify-center space-x-4 text-tertiary text-sm">
                        <span>{{ articles[curIndex]?.date }}</span>
                        <span>•</span>
                        <span>{{ articles[curIndex]?.description }}</span>
                    </div>
                </div>

                <!-- 文章内容 -->
                <div>
                    <iframe 
                        :src="articles[curIndex]?.src"
                        class="w-full h-auto"
                        @load="onListenIframe"
                        ref="iframeRef"
                        frameborder="0"
                        loading="lazy"
                    ></iframe>
                </div>

                <!-- 文章底部导航 -->
                <div class="mt-8 flex justify-between items-center">
                    <button 
                        @click="count(-1)"
                        :disabled="curIndex === 0"
                        class="flex items-center px-2 py-1 text-center rounded-md border border-gray-700 
                        md:px-4 md:py-2
                        hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Icon name="fa7-solid:chevron-left" class="mr-1 md:mr-2" />
                        {{ $t('articles.prev_article') }}
                    </button>
                    
                    <NuxtLink 
                        :to="localePath('/articles/all')" 
                        class="px-2 py-1 md:px-4 md:py-2 text-center rounded-md border border-gray-700 hover:border-primary transition-colors"
                    >
                       {{ $t('articles.back_to') }}
                    </NuxtLink>
                    
                    <button 
                        @click="count(1)"
                        :disabled="curIndex === articles.length - 1"
                        class="flex items-center px-2 py-1 text-center rounded-md border border-gray-700
                          md:px-4 md:py-2
                         hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {{ $t('articles.next_article') }}
                        <Icon name="fa7-solid:chevron-right" class="ml-1 md:ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>