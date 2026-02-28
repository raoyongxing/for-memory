<script setup>
    const route = useRoute()
    let defaultIndex = parseInt(route.params.id || '0') || 0
    const articles = ref([
        {
            index: 0,
            title: '序·我的记忆',
            src: '/html/000_why.html',
        },
        {
            index: 1,
            title: '孤鸿入月影',
            src: '/html/001_lxl.html',
        },
    ])

</script>
<template>
    <ul class="article-list">
        <li v-for="article in articles" :key="article.index">
            <NuxtLink :to="`/articles/${article.index}`">{{ article.title }}</NuxtLink>
        </li>
    </ul>
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
