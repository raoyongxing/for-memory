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
    let curIndex = ref(defaultIndex)
    function count(delta) {
        curIndex.value = Math.max(0, Math.min(articles.value.length - 1, curIndex.value + delta))
    }
</script>
<template>
    <div class="header-nav">
        <a  class="swicth-btn" @click.prevent="count(-1)">⬅️上一</a>
        <NuxtLink class="all-link" to="/articles/all">所有文章</NuxtLink>
        <a  class="swicth-btn" @click.prevent="count(1)">下一➡️</a>
    </div>
    <iframe class="article-iframe" :src="articles[curIndex].src" frameborder="0"></iframe>
</template>
<style>
    :root {
        --neon-blue: #00f7ff;
        --neon-pink: #ff00ff;
    }

    .article-iframe {
        position: absolute;
        width: 100%;
        height: calc(100vh - 50px);
        margin-top: 50px;
        border: none;
        overflow-y: auto;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 800px) {
        .article-iframe {
            width: 100%;
        }
        .header-nav {
            width: 100%;
        }
    }

    .header-nav {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .swicth-btn {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    .swicth-btn:hover {
        background: linear-gradient(45deg, var(--neon-blue), var(--neon-pink));
    }
    .all-link {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        padding: 1.5rem;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        position: relative;
        overflow: hidden;
    }
</style>
