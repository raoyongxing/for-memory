<template>
    <PortalHeader />
    <main>
        <section id="home">
            <!-- 首屏宣言 -->
            <div class="container mx-auto px-4 md:px-6 py-20 text-center">
                <h1 class="text-3xl md:text-4xl font-medium text-primary mb-5 leading-relaxed">{{ $t('common.slogan.short') }}</h1>
                <p class="text-tertiary max-w-2xl mx-auto mb-10">{{ $t('common.slogan.long') }}</p>
                <a class="inline-block text-tertiary hover:text-primary transition-color">
                    <Icon name="fa7-solid:angle-down" class="animate-bounce" />
                </a>
            </div>
            
            <!-- 想法展示区 -->
            <div id="ideas-section" class="container mx-auto px-4 md:px-6 py-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="idea-card relative p-5 rounded-md cursor-pointer group overflow-hidden" data-id="1">
                        <h3 class="text-xl font-medium text-primary mb-3">{{ $t('index.nav.articales') }}</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">{{ $t('index.nav.articalesDesc') }}</p>
                        <p class="text-lightgray text-xs">2025-01-15</p>
                        <NuxtLinkLocale to="/articles/all" target="_blank" class="hidden group-hover:flex items-center justify-center w-1/3 h-full bg-gray-50 absolute right-0 top-0">进入</NuxtLinkLocale>
                    </div>
                    <div class="idea-card relative p-5 rounded-md cursor-pointer group overflow-hidden" data-id="2">
                        <h3 class="text-xl font-medium text-primary mb-3">{{ $t('index.nav.diary') }}</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">{{ $t('index.nav.diaryDesc') }}</p>
                        <p class="text-lightgray text-xs">2025-01-15</p>
                        <NuxtLinkLocale to="/diary" class="hidden group-hover:flex items-center justify-center w-1/3 h-full leaidng- bg-gray-50 absolute right-0 top-0">进入</NuxtLinkLocale>
                    </div>
                    <div class="idea-card relative p-5 rounded-md cursor-pointer group overflow-hidden" data-id="3">
                        <h3 class="text-xl font-medium text-primary mb-3">{{ $t('index.nav.voice') }}</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">{{ $t('index.nav.voiceDesc') }}</p>
                        <p class="text-lightgray text-xs">2025-01-15</p>
                        <NuxtLinkLocale to="/voice" class="hidden group-hover:flex items-center justify-center w-1/3 h-full leaidng- bg-gray-50 absolute right-0 top-0">进入</NuxtLinkLocale>
                    </div>
                    <div class="idea-card relative p-5 rounded-md cursor-pointer group overflow-hidden" data-id="4">
                        <h3 class="text-xl font-medium text-primary mb-3">{{ $t('index.nav.share') }}</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">{{ $t('index.nav.shareDesc') }}</p>
                        <p class="text-lightgray text-xs">2025-01-15</p>
                        <NuxtLinkLocale to="/share" class="hidden group-hover:flex items-center justify-center w-1/3 h-full leaidng- bg-gray-50 absolute right-0 top-0">进入</NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <PortalFooter />
</template>
<script setup>


</script>
<style scoped>
    /* 全局样式 */
    body {
        font-family: 'Inter', system-ui, sans-serif;
        color: #333333;
        background-color: #FFFFFF;
        line-height: 1.6;
    }
    /* 卡片样式 */
    .idea-card {
        border: 0.5px solid #EEEEEE;
        transition: border-color 0.3s ease;
    }
    .idea-card:hover {
        border-color: #CCCCCC;
    }
    /* 平滑滚动 */
    html {
        scroll-behavior: smooth;
    }
    @keyframes bounce{
        0%, 100%{
            transform: translateY(-25%);
            animation-timing-function:cubic-bezier(0.8,0,1,1);
        }
        50%{
            transform: none;
            animation-timing-function:cubic-bezier(0,0,0.2,1);
        }
    }
    .animate-bounce{
        animation: bounce 1s infinite;
    }
</style>