<template>
    <header class="fixed top-0 left-0 right-0 h-16 bg-white z-50">
        <div class="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
            <div class="font-bold text-4xl text-primary">{{ $t('common.title') }}</div>
            <nav class="hidden md:flex space-x-8">
                <NuxtLinkLocale to="/" class="nav-link text-secondary hover:text-primary transition-color active">{{ $t('common.home') }}</NuxtLinkLocale>
            </nav>
            <button id="mobile-menu-button" class="md:hidden text-secondary focus:outline-none">
                <i class="fa fa-bars text-xl"></i>
            </button>
        </div>
    </header>
    <main>
        <section id="home" class="page active">
            <!-- 首屏宣言 -->
            <div class="container mx-auto px-4 md:px-6 py-20 text-center">
                <h1 class="text-3xl md:text-4xl font-medium text-primary mb-5 leading-relaxed">{{ $t('common.slogan.short') }}</h1>
                <p class="text-tertiary max-w-2xl mx-auto mb-10">{{ $t('common.slogan.long') }}</p>
                <a href="#ideas-section" class="inline-block text-tertiary hover:text-primary transition-color">
                    <Icon name="icons8:angle-down" style="color: black" />
                </a>
            </div>
            
            <!-- 想法展示区 -->
            <div id="ideas-section" class="container mx-auto px-4 md:px-6 py-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="idea-card p-5 rounded-md cursor-pointer" data-id="1">
                        <h3 class="text-xl font-medium text-primary mb-3">设计思考</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">探索用户体验与界面设计的关系，思考如何通过简约设计传递复杂信息，创造直观易用的产品体验。</p>
                        <p class="text-lightgray text-xs">2024-01-15</p>
                    </div>
                    <div class="idea-card p-5 rounded-md cursor-pointer" data-id="2">
                        <h3 class="text-xl font-medium text-primary mb-3">生活灵感</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">记录日常生活中的创意瞬间，分享如何从平凡事物中获取灵感，以及如何将这些灵感转化为实际项目。</p>
                        <p class="text-lightgray text-xs">2024-01-10</p>
                    </div>
                    <div class="idea-card p-5 rounded-md cursor-pointer" data-id="3">
                        <h3 class="text-xl font-medium text-primary mb-3">技术实践</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">分享前端开发的最佳实践，探讨现代Web技术的应用，以及如何通过代码实现创意想法。</p>
                        <p class="text-lightgray text-xs">2024-01-05</p>
                    </div>
                    <div class="idea-card p-5 rounded-md cursor-pointer" data-id="4">
                        <h3 class="text-xl font-medium text-primary mb-3">极简主义</h3>
                        <p class="text-tertiary text-sm mb-4 line-clamp-3">探讨极简主义在设计和生活中的应用，思考如何通过减法原则创造更有价值的作品和体验。</p>
                        <p class="text-lightgray text-xs">2024-01-01</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <PortalFooter />
</template>
<style>
@import 'tailwindcss/utilities';
    @layer utilities {
        .content-auto {
            content-visibility: auto;
        }
        .text-balance {
            text-wrap: balance;
        }
        .transition-color {
            transition: color 0.3s ease;
        }
        .transition-border {
            transition: border-color 0.3s ease;
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    }
    
    /* 全局样式 */
    body {
        font-family: 'Inter', system-ui, sans-serif;
        color: #333333;
        background-color: #FFFFFF;
        line-height: 1.6;
    }
    
    /* 导航栏样式 */
    .nav-link {
        position: relative;
    }
    
    .nav-link.active {
        font-weight: 600;
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
    
    /* 页面过渡动画 */
    .page {
        display: none;
        animation: fadeIn 0.5s ease-in-out;
    }
    
    .page.active {
        display: block;
    }
</style>