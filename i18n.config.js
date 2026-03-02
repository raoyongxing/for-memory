export default defineI18nConfig(() => ({
    datetimeFormats: {
        'en': { // 为英语环境定义格式
            short: { year: 'numeric', month: 'short', day: 'numeric' }, // 输出示例: Dec 25, 2023
            long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' } // 示例: Monday, December 25, 2023
        },
        'zh-CN': { // 为中文环境定义格式
            short: { year: 'numeric', month: 'numeric', day: 'numeric' }, // 输出示例: 2023/12/25
            long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' } // 示例: 2023年12月25日星期一
        }
    }
}))