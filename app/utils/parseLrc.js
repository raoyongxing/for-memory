/**
 * 将秒数格式化为 mm:ss.xx 格式
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);

    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
}


export default function parseLrc(content) {
    const lyrics = []
    const lines = content.split('\n')

    // 匹配时间标签的正则表达式
    const timeTagRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;
    const idTagRegex = /^\[(ar|ti|al|au|by|offset|length|re|ve):(.+)\]$/;


    lines.forEach(line => {
        line = line.trim();
        if (!line) return;

        // 匹配ID标签
        const idMatch = line.match(idTagRegex);
        if (idMatch) {
            const idType = idMatch[1];
            const idValue = idMatch[2];
            lyrics.push({ idType, idValue });
            return;
        }

        // 匹配时间标签
        // 提取所有时间标签
        const timeTags = [];
        let match;
        while ((match = timeTagRegex.exec(line)) !== null) {
            const minutes = parseInt(match[1], 10);
            const seconds = parseInt(match[2], 10);
            const milliseconds = match[3] ?
                parseInt(match[3], 10) * (match[3].length === 2 ? 10 : 1) : 0; // 处理两位或三位毫秒

            const totalTime = minutes * 60 + seconds + milliseconds / 1000;
            timeTags.push(totalTime);
        }

        if (timeTags.length > 0) {
            // 提取歌词内容（移除所有时间标签后的部分）
            const content = line.replace(timeTagRegex, '').trim();

            // 为每个时间标签创建条目
            timeTags.forEach(time => {
                lyrics.push({
                    time: time, // 秒为单位
                    rawTime: formatTime(time), // 格式化的时间字符串
                    content: content
                });
            });
        }


    });
    // 按时间排序
    lyrics.sort((a, b) => a.time - b.time);
    return {
        tags: lyrics.filter(item => item.idType),
        lyrics: lyrics.filter(item => !item.idType),
    }
}