<script setup>
const shareList = ref([
    {
        title: "技术",
        items: [
            {
                title: "菜鸟教程",
                desc: "最简洁的编程百科",
                url: "https://www.runoob.com/"
            },
            {
                title: "MDN 文档",
                desc: "web开发者文档",
                url: "https://developer.mozilla.org/zh-CN/"
            }
        ]
    },
    {
        title: "个人网站",
        items: [
            {
                title: "Bruce.Au",
                desc: "有趣的灵魂万里挑一",
                url: "https://bruceau.plus/"
            },
            {
                title: "Anthony Fu",
                desc: "个人风格影响者",
                url: "https://antfu.me/"
            }
        ]
    },
    {
        title: "资源",
        items: [
            {
                title: "iconify",
                desc: "All popular icon sets, one framework. Over 200,000 open source vector icons.",
                url: "https://iconify.design/"
            },
            {
                title: "爱听音乐网",
                desc: "免费音乐文件及歌词lrc文件下载",
                url: "https://www.2t58.com/"
            }
        ]
    },
    {
        title: "工具",
        items: [
            {
                title: "TinyPNG",
                desc: "图片压缩工具",
                url: "https://tinypng.com/"
            },
            {
                title: "Base64 编码解码",
                desc: "Base64 编码解码工具",
                url: "https://www.toolhelper.cn/EncodeDecode/Base64"
            },
            {
                title: "Less 转 CSS",
                desc: "Less 转 CSS 工具",
                url: "https://33tool.com/less_to_css/"
            },
            {
                title: "CSS 转 Tailwind CSS",
                desc: "CSS 转 Tailwind CSS 工具",
                url: "https://www.upma.cn/tools/css-to-tailwind"
            }
        ]
    }
])
</script>
<template>
    <div class="container mx-auto p-8 relative">
        <div v-for="group in shareList" :key="group.title" class="mb-8 p-4 rounded-md shadow-sm">
            <div class="text-2xl font-bold">{{ group.title }}</div>
            <hr class="my-4 border-t border-gray-300">
            <div class="grid grid-cols-3 gap-4">
                <a v-for="item in group.items" :key="item.title" :href="item.url" target="_blank"
                    class="bg-gray-100 block p-4 rounded-md">
                    <div class="font-bold">{{ item.title }}</div>
                    <div class="text-sm text-gray-500 mt-2">{{ item.desc }}</div>
                </a>
            </div>
        </div>
    </div>
</template>