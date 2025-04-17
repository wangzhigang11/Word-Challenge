// 用于记录已经使用过的汉字
const usedCharacters = new Set();

const gameData = [
    // 基础汉字（自然）
    { character: "日", pinyin: "rì", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMCIgZmlsbD0iI2ZmZDcwMCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjI1IiBmaWxsPSIjZmY4ODAwIi8+PC9zdmc+" },
    { character: "月", pinyin: "yuè", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgNTBDMjAgODAgODAgODAgODAgNTBDODAgMjAgMjAgMjAgMjAgNTBaIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" },
    { character: "山", pinyin: "shān", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgODBMODAgODBMMjAgMjBaIiBmaWxsPSIjODI1OTFmIi8+PC9zdmc+" },
    { character: "川", pinyin: "chuān", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjIwIiB5Mj0iODAiIHN0cm9rZT0iIzAwODhmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGxpbmUgeDE9IjUwIiB5MT0iMjAiIHgyPSI1MCIgeTI9IjgwIiBzdHJva2U9IiMwMDg4ZmYiIHN0cm9rZS13aWR0aD0iNSIvPjxsaW5lIHgxPSI4MCIgeTE9IjIwIiB4Mj0iODAiIHkyPSI4MCIgc3Ryb2tlPSIjMDA4OGZmIiBzdHJva2Utd2lkdGg9IjUiLz48L3N2Zz4=" },
    { character: "天", pinyin: "tiān", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjODg4ODg4IiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjAiIHkxPSI1MCIgeDI9IjgwIiB5Mj0iNTAiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+" },
    { character: "云", pinyin: "yún", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgNTAiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTgwIDUwIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjIwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" },
    { character: "星", pinyin: "xīng", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMCIgZmlsbD0iI2ZmZDcwMCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjE1IiBmaWxsPSIjZmY4ODAwIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIzMCIgcj0iNSIgZmlsbD0iI2ZmODgwMCIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMzAiIHI9IjUiIGZpbGw9IiNmZjg4MDAiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjcwIiByPSI1IiBmaWxsPSIjZmY4ODAwIi8+PGNpcmNsZSBjeD0iODAiIGN5PSI3MCIgcj0iNSIgZmlsbD0iI2ZmODgwMCIvPjwvc3ZnPg==" },
    { character: "田", pinyin: "tián", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjODg4ODg4IiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjAiIHkxPSI1MCIgeDI9IjgwIiB5Mj0iNTAiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjAiIHgyPSI1MCIgeTI9IjgwIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" },
    { character: "花", pinyin: "huā", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjQwIiByPSIyMCIgZmlsbD0iI2ZmNjY5OSIvPjxwYXRoIGQ9Ik0yMCA0MEMyMCA0MCA0MCAyMCA2MCA0MEM4MCA2MCA2MCA4MCA0MCA4MEMyMCA4MCAyMCA0MCAyMCA0MFoiIGZpbGw9IiNmZjY2OTkiLz48bGluZSB4MT0iNTAiIHkxPSI2MCIgeDI9IjUwIiB5Mj0iODAiIHN0cm9rZT0iIzgyNTkxZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PC9zdmc+" },
    { character: "草", pinyin: "cǎo", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgODBMODAgODBMMjAgMjBaIiBmaWxsPSIjODI1OTFmIi8+PGxpbmUgeDE9IjIwIiB5MT0iNDAiIHgyPSI4MCIgeTI9IjQwIiBzdHJva2U9IiM4MjU5MWYiIHN0cm9rZS13aWR0aD0iNSIvPjxsaW5lIHgxPSIyMCIgeTE9IjYwIiB4Mj0iODAiIHkyPSI2MCIgc3Ryb2tlPSIjODI1OTFmIiBzdHJva2Utd2lkdGg9IjUiLz48L3N2Zz4=" },
    { character: "水", pinyin: "shuǐ", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgNTBDMjAgODAgODAgODAgODAgNTBDODAgMjAgMjAgMjAgMjAgNTBaIiBmaWxsPSIjMDA4OGZmIi8+PC9zdmc+" },
    { character: "火", pinyin: "huǒ", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNNTAgMjBDMjAgNTAgMjAgODAgNTAgODBDODAgODAgODAgNTAgNTAgMjBaIiBmaWxsPSIjZmY0NDAwIi8+PC9zdmc+" },
    { character: "木", pinyin: "mù", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB4PSI0MCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzgyNTkxZiIvPjxsaW5lIHgxPSIyMCIgeTE9IjQwIiB4Mj0iODAiIHkyPSI0MCIgc3Ryb2tlPSIjODI1OTFmIiBzdHJva2Utd2lkdGg9IjUiLz48L3N2Zz4=" },
    { character: "土", pinyin: "tǔ", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB4PSIyMCIgeT0iNjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2E1NjczZiIvPjwvc3ZnPg==" },
    { character: "石", pinyin: "shí", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cG9seWdvbiBwb2ludHM9IjIwLDMwIDgwLDMwIDkwLDcwIDEwLDcwIiBmaWxsPSIjODA4MDgwIi8+PC9zdmc+" },
    { character: "风", pinyin: "fēng", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMjAgNDBDNDAgNDAgNjAgNjAgODAgNjBNMjAgNjBDNDAgNjAgNjAgNjAgNDAgODBDNjAgODAiIHN0cm9rZT0iIzgwODA4MCIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIi8+PC9zdmc+" },
    { character: "雨", pinyin: "yǔ", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIyMCIgZmlsbD0iIzgwODA4MCIvPjxsaW5lIHgxPSIzMCIgeTE9IjYwIiB4Mj0iMzAiIHkyPSI4MCIgc3Ryb2tlPSIjMDA4OGZmIiBzdHJva2Utd2lkdGg9IjUiLz48bGluZSB4MT0iNTAiIHkxPSI2MCIgeDI9IjUwIiB5Mj0iODAiIHN0cm9rZT0iIzAwODhmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGxpbmUgeDE9IjcwIiB5MT0iNjAiIHgyPSI3MCIgeTI9IjgwIiBzdHJva2U9IiMwMDg4ZmYiIHN0cm9rZS13aWR0aD0iNSIvPjwvc3ZnPg==" },

    // 基础数字
    { character: "一", pinyin: "yī", image: "" },
    { character: "二", pinyin: "èr", image: "" },
    { character: "三", pinyin: "sān", image: "" },
    { character: "四", pinyin: "sì", image: "" },
    { character: "五", pinyin: "wǔ", image: "" },

    // 人物类
    { character: "人", pinyin: "rén", image: "" },
    { character: "我", pinyin: "wǒ", image: "" },
    { character: "你", pinyin: "nǐ", image: "" },
    { character: "他", pinyin: "tā", image: "" },
    { character: "她", pinyin: "tā", image: "" },
    { character: "子", pinyin: "zǐ", image: "" },
    { character: "女", pinyin: "nǚ", image: "" },
    { character: "父", pinyin: "fù", image: "" },
    { character: "母", pinyin: "mǔ", image: "" },

    // 动物类
    { character: "猫", pinyin: "māo", image: "" },
    { character: "狗", pinyin: "gǒu", image: "" },
    { character: "鸟", pinyin: "niǎo", image: "" },
    { character: "鱼", pinyin: "yú", image: "" },
    { character: "虫", pinyin: "chóng", image: "" },
    { character: "龙", pinyin: "lóng", image: "" },

    // 物品类
    { character: "门", pinyin: "mén", image: "" },
    { character: "窗", pinyin: "chuāng", image: "" },
    { character: "桌", pinyin: "zhuō", image: "" },
    { character: "椅", pinyin: "yǐ", image: "" },
    { character: "书", pinyin: "shū", image: "" },
    { character: "笔", pinyin: "bǐ", image: "" },
    { character: "纸", pinyin: "zhǐ", image: "" },
    { character: "刀", pinyin: "dāo", image: "" },
    { character: "伞", pinyin: "sǎn", image: "" },
    { character: "钱", pinyin: "qián", image: "" },

    // 动作类
    { character: "走", pinyin: "zǒu", image: "" },
    { character: "跑", pinyin: "pǎo", image: "" },
    { character: "跳", pinyin: "tiào", image: "" },
    { character: "飞", pinyin: "fēi", image: "" },
    { character: "游", pinyin: "yóu", image: "" },

    // 形容词类
    { character: "大", pinyin: "dà", image: "" },
    { character: "小", pinyin: "xiǎo", image: "" },
    { character: "高", pinyin: "gāo", image: "" },
    { character: "低", pinyin: "dī", image: "" },
    { character: "长", pinyin: "cháng", image: "" },
    { character: "短", pinyin: "duǎn", image: "" },
    { character: "多", pinyin: "duō", image: "" },
    { character: "少", pinyin: "shǎo", image: "" },
    { character: "好", pinyin: "hǎo", image: "" },
    { character: "坏", pinyin: "huài", image: "" }
];

export default gameData; 