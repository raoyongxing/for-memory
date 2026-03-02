<script setup>
    const { locales, setLocale, locale }  = useI18n()
</script>
<template>
    <select class="locale-select border-none rounded-lg text-base cursor-pointer focus-visible:outline-none " name="language-switch" @change="setLocale($event.target.value)">
        <option v-for="item in locales" :key="item.code" :selected="item.code === locale" :value="item.code">{{ item.name }}</option>
    </select>
</template>