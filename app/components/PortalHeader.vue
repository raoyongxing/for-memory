<script setup>
    const { locales, setLocale, locale }  = useI18n()

</script>
<template>
    <header class="glitch-header">
        <h1 class="site-title">{{ $t('common.title') }}</h1>
    </header>
    <select class="locale-select" @change="setLocale($event.target.value)">
        <option v-for="item in locales" :key="item.code" :selected="item.code === locale" :value="item.code">{{ item.name }}</option>
    </select>
</template>

<style scoped>
    .locale-select {
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #000;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }
</style>