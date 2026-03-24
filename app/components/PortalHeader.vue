<script setup>
    let toggle = ref(false)
</script>
<template>
    <header class="sticky top-0 left-0 right-0 h-16 bg-white z-50 border-b border-border">
        <div class="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
            <div class="font-bold text-4xl text-primary">
                <NuxtLinkLocale to="/">
                    <span class="hidden md:inline">{{  $t('common.title')}}</span>
                    <img src="~/assets/img/icon.svg" alt="数字痕迹" class="h-16 inline-block"></NuxtLinkLocale>
            </div>
            <nav class="hidden md:flex space-x-8">
                <NuxtLinkLocale to="/" class="nav-link text-secondary hover:text-primary transition-color active">{{ $t('common.home') }}</NuxtLinkLocale>
                <LanguageSwitch />
            </nav>
            <button id="mobile-menu-button" class="md:hidden text-secondary focus:outline-none" @click="toggle = !toggle">
                <Icon name="fa7-solid:bars" class="text-xl" />
            </button>
        </div>
    </header>
    <div id="mobile-menu" v-show="toggle" class="md:hidden bg-white border-t border-border">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NuxtLinkLocale to="/" class="nav-link text-secondary hover:text-primary transition-color active">{{ $t('common.home') }}</NuxtLinkLocale>
            <LanguageSwitch />
        </div>
    </div>
</template>
