<script setup>
    const route = useRoute()
    const { data: articles, error } = await useFetch('/html/articles.json', {
        baseURL: useRequestURL().origin
    })
    if (error.value) {
        console.error('获取文章列表失败:', error.value)
    }

    const localePath = useLocalePath()
</script>
<template>
    <div class="container mx-auto px-4 md:px-6 py-10 min-h-[75vh]">
        <!-- 摘要 -->
        <div class="text-xs mb-4 text-gray-500">
            {{ $t('articles.abstract') }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink 
                v-for="article in articles"
                class="block h-52 border border-gray-100 p-4  shadow-sm transition-colors hover:border-gray-200 relative"
                :key="article.index" 
                :to="localePath(`/articles/${article.index}`)">
                <div>
                    {{ article.title }}
                </div>
                <div class="text-xs text-gray-500 overflow-hidden mt-2 text-ellipsis">
                    {{ article.description }}
                </div>
                <div class="text-xs text-gray-500 text-right absolute bottom-2 right-2" >
                    {{ article.date }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<style>
    .article-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .article-list li {
        padding: 10px;
        margin-bottom: 5px;
        background-color: #f0f0f0;
        border-radius: 5px;
    }
    .article-list li:hover {
        background-color: #e0e0e0;
    }
</style>
