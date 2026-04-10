<script setup>
    const route = useRoute()
    const { data: articles, error } = await useFetch('/html/atricles.json', {
        baseURL: useRequestURL().origin
    })
    if (error.value) {
        console.error('获取文章列表失败:', error.value)
    }
</script>
<template>
    <div class="container mx-auto px-4 md:px-6 py-10 min-h-[75vh]">
        <!-- 摘要 -->
        <div class="text-xs mb-4 text-gray-500">
            我忘了曾经的，胡乱的写着些什么，我知道，这不是我的记忆，它是我的臆想，我的神离，是我短暂生命抽取的血肉和相聚别离。
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink 
                v-for="article in articles"
                class="block h-52 border border-gray-100 p-4  shadow-sm transition-colors hover:border-gray-200"
                :key="article.index" 
                :to="`/articles/${article.index}`">
                <div>
                    {{ article.title }}
                </div>
                <div class="text-xs text-gray-500">
                    {{ article.description }}
                </div>
            </NuxtLink>
        </div>
        <!-- pager -->
        <div class="mt-8">
            <div class="flex justify-center items-center gap-2">
                <button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    上一页
                </button>
                <span class="text-sm font-medium text-gray-700">
                    1 / 3
                </span>
                <button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    下一页
                </button>
            </div>
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
