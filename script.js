// 游戏数据
const gameData = [
    // 基础汉字（自然）
    { character: "日", pinyin: "rì", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/b6243146bfeb4f6b874366a8a4c85f83~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=6q%2B9YRmOLPqCFL5RVfecSK3EC7o%3D&format=.webp" },
    { character: "月", pinyin: "yuè", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e9a4dabe39d7406e8d5e590d3fadafb3~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Dm0FIGl06IMlnJmuKLcKo6zgu68%3D&format=.webp" },
    { character: "山", pinyin: "shān", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/8d18dc27b254406ea952c5a5c458e4b6~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=IFXmcUd9onpJzjzCtNjfwjkv5I4%3D&format=.webp" },
    { character: "川", pinyin: "chuān", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/74536c36aec04930b17dc72016ce6474~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=iCKhM88CwaLD%2BIXhQYrGgq3cjeM%3D&format=.webp" },
    { character: "天", pinyin: "tiān", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e23e4449dfb344baaf2abbe8aa4cf22e~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=aRu4%2BgPlFrFrR8YN8ngSsntNJGA%3D&format=.webp" },
    { character: "云", pinyin: "yún", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/708e97a5cd0543d8bc3f535d1dff81ab~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=I5N%2FASmDGyEcei3LqaSNQwlWjG0%3D&format=.webp" },
    { character: "星", pinyin: "xīng", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/fd14e39488d549d0961792841e09a682~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=qn%2FgxP1FhEGMy%2FN5xj1pdRbra2U%3D&format=.webp" },
    { character: "田", pinyin: "tián", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/68cf51964eaf4c59bb5993bb09441e09~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=TLu9AGwQBBCddywyTgjYbNc7Od0%3D&format=.webp" },
    { character: "花", pinyin: "huā", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5f9ea41718ca4da9a086ca5f00f667e2~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=zFQK%2BWenlX3rlIGfMD5wbADcgjg%3D&format=.webp" },
    { character: "草", pinyin: "cǎo", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5d69ee740af64091aef03b9018ec9e97~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=tmwXIvlLNw5engpnXzhCltz3jOo%3D&format=.webp" },
    { character: "水", pinyin: "shuǐ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/9b16e6bd859a4f1ba27282e7d74b3755~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=REmUHGYKYqyYdcAzfLpkvLTDaCM%3D&format=.webp" },
    { character: "火", pinyin: "huǒ", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/66a1ea5e7c7140458215f6c07c579ffb~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=6XWqEe%2BHIS86Uo8uYKA8Oht4El4%3D&format=.webp" },
    { character: "木", pinyin: "mù", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/d953bc37f3cf4e92b03914de786dbe8d~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=opR4kmeDM13AgqTN7U7bko5HV58%3D&format=.webp" },
    { character: "土", pinyin: "tǔ", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/3c9d002ab51b4601be8979b05e10366a~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=igU6KIgrBwXWCfFPFTVBOAs8Yzs%3D&format=.webp" },
    { character: "石", pinyin: "shí", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/43fe601bcf6347a49299a871b77ee143~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Hojyt9Az%2Fs2kbGlotZ2FLuTg3%2Bw%3D&format=.webp" },
    { character: "风", pinyin: "fēng", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/06bb8dcda8e143b69753c9201a921309~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=cFSO55xj8Ya1b%2FmNM4yrXH5Se1E%3D&format=.webp" },
    { character: "雨", pinyin: "yǔ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/608227381b1d4d15a4b29e8bc2d776fd~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=5AODI1wTYvALAeG0SbCIA7cKsTA%3D&format=.webp" },

    // 基础数字
    { character: "一", pinyin: "yī", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/6a020fa17f37464aad8cbb240de01cad~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=PYT7TDr3meOb0AI1sL5ogEuMQ60%3D&format=.webp" },
    { character: "二", pinyin: "èr", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5ecc726ae7734bf5a6451fcb196f7523~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=AZU2jR6JD%2Fu9qM3Z2cW1l2i4r7c%3D&format=.webp" },
    { character: "三", pinyin: "sān", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e99431c9f549493b917046385dede196~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=wQoo83O0GZJ75xQKYNEnxbQ4G4w%3D&format=.webp" },
    { character: "四", pinyin: "sì", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/c3dd24560fba4c6c928e8397d9abb2d4~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=mMU1WrFCohLJcPl%2Bqukby3Jg3%2BQ%3D&format=.webp" },
    { character: "五", pinyin: "wǔ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/37a62973dbea4b3ba6ce7df01b8f0303~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=4l3%2BSqOOEHgW1Rp0YXceUDoHw6g%3D&format=.webp" },
    { character: "六", pinyin: "liù", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/8de395268a1a4bc8b5641eb79af76023~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=BEbWlhuiIjZlYFehs0YgIDXNzsw%3D&format=.webp" },
    { character: "七", pinyin: "qī", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/7e0693408e674b87bc390d42ad01cc11~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=L%2FqLRbtKDrNW66lV%2BdXSKWFguBc%3D&format=.webp" },
    { character: "八", pinyin: "bā", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/8d543adc98e44d36a2861adeae8aceab~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=P3nGooAdgOshixkU1YMSSpgsPLI%3D&format=.webp" },
    { character: "九", pinyin: "jiǔ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ecebd5c2c2e447a1b7d16479d32f9cf5~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=krQ0QbyGkWdX1gN5MWzD%2Fk0nTh8%3D&format=.webp" },
    { character: "十", pinyin: "shí", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/3fa0892ebc4c4682ad3010402e19b7d6~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Mo%2Bzh7S0Fu32t1XdlDAQ1KWUAqE%3D&format=.webp" },
    { character: "百", pinyin: "bǎi", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/a5837a13ba54428a89fd95bf8c586594~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Zfs6MNkbtPpk%2FvHX8h3Iald4zLM%3D&format=.webp" },
    { character: "千", pinyin: "qiān", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e3a1beadf51f4474b02bdfe155c7d10a~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=c9DvHfcMF4RJACPSQy9rsvRdVOQ%3D&format=.webp" },
    { character: "万", pinyin: "wàn", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/13e849647f624604a94d02b3f2f9d842~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=oFohVaq%2BFY9nfrzBT1ZbdycVG1c%3D&format=.webp" },

    // 动物类
    { character: "猫", pinyin: "māo", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/3ca39024c64e4e64ba5a06309e2b3656~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ELHQT5di4SQfFwwSj8K%2FjsmuhNM%3D&format=.webp" },
    { character: "狗", pinyin: "gǒu", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/79f8b2c825c14d5ca41c114f2edf73c8~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=amSt%2F2mz%2FY%2FvnOxIFQTlMljO9Yo%3D&format=.webp" },
    { character: "鸟", pinyin: "niǎo", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/f0e753901597403faccb0da95183e518~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=K63lr9zhfZEsIdR7cP88iKSHk%2FI%3D&format=.webp" },
    { character: "鱼", pinyin: "yú", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/8c76ba13fa3b4d69b4208888d3e98763~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=xAAFK6xbXnSa36Jaq52Z7Aj%2BWA0%3D&format=.webp" },
    { character: "虫", pinyin: "chóng", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/0435038dcd8b4ca8a9f927e5a9280354~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=TdSIJAQlxgR%2Bf0v%2FpAWNVreUhUg%3D&format=.webp" },
    { character: "龙", pinyin: "lóng", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/bdb4cfaf034c4713833505eca7db9655~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=4pWa55Y44CWmzVxOy7ZI5LC2DpY%3D&format=.webp" },
    { character: "牛", pinyin: "niú", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/880896d83aa04960ab08f1df04cc925e~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=arUJy9q7JbHBf9Iu5%2BoQpVMUKiY%3D&format=.webp" },
    { character: "羊", pinyin: "yáng", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/6f714443a411400a8448dd13eb769dbd~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=XXXyjif9nroTlmMOAU1QdP%2F7KOc%3D&format=.webp" },
    { character: "马", pinyin: "mǎ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e14e9ac90a5e464cb5bca817cfb6c1c7~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=PrRN%2FcGVO8nDJ4l90mS19NYIbCo%3D&format=.webp" },
    { character: "虎", pinyin: "hǔ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/02747d6a1ff748c79cfe4feec17aa19b~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=pGlJlBHn9%2BRk%2BBb0ygHFJ%2FL1coY%3D&format=.webp" },
    { character: "兔", pinyin: "tù", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ee9bd453ccfa483eae49e510a31323da~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=vLdoWpGyZ0CbQhDPQ2DOXTO9BU0%3D&format=.webp" },
    { character: "鸡", pinyin: "jī", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5f3f7c8e637746ed85fd06eb1b5a61dd~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ZQE8T%2BNsNum4PWPi15Wt4ZITNnE%3D&format=.webp" },
    { character: "鸭", pinyin: "yā", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ad0fc466cba443c2b3e4cdd40d384de0~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=mJjC2ElzNOH6KrFc74SgYd%2FVO6E%3D&format=.webp" },
    { character: "象", pinyin: "xiàng", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/85b7dcca44de47499a8f91dec4180e31~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=whb0Y3dh8s75CzGr0HkB3fyGFTg%3D&format=.webp" },

    // 物品类
    { character: "门", pinyin: "mén", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/c4931bddfa2d432eaf8477df752333be~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=rzSr88umqdipYG1xxU6pFUjLOH0%3D&format=.webp" },
    { character: "窗", pinyin: "chuāng", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/bd4554d7e3cd40bcbf7477a926bb88b6~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Tz6Mdq664pii0odgDXmSnVi%2FH6c%3D&format=.webp" },
    { character: "桌", pinyin: "zhuō", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/2f69b529d991460f98c70ef98704dc08~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ZxK7S6h%2BDWCGB2Pc5dK%2Bf7Q6JKc%3D&format=.webp" },
    { character: "椅", pinyin: "yǐ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/eb2dc59f328741e09b9b56d8e359e166~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=vFrA4zQCuemVsb%2BldV%2F8rSyDOP4%3D&format=.webp" },
    { character: "书", pinyin: "shū", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/1508ee57ecfc43ebb3a30489eef7b174~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=SCSYP8ibilHn4Mo4wzT4pFpgKl8%3D&format=.webp" },
    { character: "笔", pinyin: "bǐ", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/25491d2e198446739a2bff16ec3951a1~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=KGQ7%2Bon%2BVWkc3fUkedFEVOhSiuQ%3D&format=.webp" },
    { character: "纸", pinyin: "zhǐ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5faf9274bc3244ecb59c78db91468ffe~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=kY38GYKXGRSv7Nxqz0f0toY2oH4%3D&format=.webp" },
    { character: "刀", pinyin: "dāo", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ccd49169748843329ec7364176f6d8ab~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=wDrx1QT4tLnaGgcYxmwCK2XEf%2Bc%3D&format=.webp" },
    { character: "伞", pinyin: "sǎn", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/1e8cdb18e908473d8a0a345059e452f5~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=IJBD%2BCpLEruTdujGc%2Bit6j03DA0%3D&format=.webp" },
    { character: "钱", pinyin: "qián", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dc84160063004a3db1e6de3bca7db0fd~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=BJ2hmf3EzsVijE7hZUufKg%2BC%2Fq0%3D&format=.webp" },
    { character: "车", pinyin: "chē", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/3f352fe108a84a87bc6d821899bec176~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=4usm05HhlVJQEqkgmDsNPAC%2FE2A%3D&format=.webp" },
    { character: "灯", pinyin: "dēng", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/fefa9e2adf674beaa9931a44b9ded53e~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=eLelR7iCzf57DiaZdI5jfBnt7Zs%3D&format=.webp" },
    { character: "碗", pinyin: "wǎn", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5de2e904101c446da2dc5da84a0932b1~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=2Sjr9P6O4jOZ9TY%2F4Q8CkeTRoDY%3D&format=.webp" },
    { character: "杯", pinyin: "bēi", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/2d4b3e56bdea42f3bd60521aa2ecb4de~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=emTtNjdh6T5%2FG4osPOR5cwLtJbk%3D&format=.webp" },
    { character: "床", pinyin: "chuáng", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/7e87e56d8f224e03941f8e3386d2e1ed~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=J60wq4cbxiib12vSdUStuV7DIcA%3D&format=.webp" },
    { character: "鞋", pinyin: "xié", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/172dff459e6d458aaa95e6f8c4b6855e~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=0qY6dnXqMT%2Fr9SnfXNLjOyEyEOk%3D&format=.webp" },
    { character: "衣", pinyin: "yī", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/4d0eda92462f4d94b930c28f3ea0888b~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=XtA9f%2FRaivzjVoBPAeVCNk9Mylg%3D&format=.webp" },
    { character: "帽", pinyin: "mào", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/42b45bd6946d4dbea21e3c276db72bfa~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=bLxCwRMBOHVLorTOXSsILSNVwcg%3D&format=.webp" },
    { character: "包", pinyin: "bāo", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/c64a88ad66c248068e0a14af0d3ea6d4~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=riVE601kVGiiAQwE1zkiyByWv1M%3D&format=.webp" },
    { character: "果", pinyin: "guǒ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/646aeb42059d4ea19fc47c801306e786~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=cJvP4DWA2yE1CJ%2BXh2zDuRAQkdY%3D&format=.webp" },

    // 动作类
    { character: "走", pinyin: "zǒu", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/754ac885da804ff082d1e3ce8c31651f~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=OAynVEAuIuvZY0UWuLIOUtpfOyE%3D&format=.webp" },
    { character: "跑", pinyin: "pǎo", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ad4105b2ddc449c8ae1b6dffbda89d41~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=2IX%2FsRRBUICDP599169c9DvZAB8%3D&format=.webp" },
    { character: "跳", pinyin: "tiào", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ecbdd2d2390f48c9889c11fdb256ecfd~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=RprzVjf1f1sd0b10qFVCcO2vWD0%3D&format=.webp" },
    { character: "飞", pinyin: "fēi", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/66771ce016144830b2189d62a1dc1dfe~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=fuh3Qc9l40bDDGnVR1jiDaNlSCk%3D&format=.webp" },
    { character: "游", pinyin: "yóu", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/8c779530ab7849c4b66a578b35aaf42d~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=FD6lXLdDLoArsIYBpYvv1uyTE2s%3D&format=.webp" },
    { character: "吃", pinyin: "chī", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/02bfbb78dd3b44d28fa0000840b6fcbb~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=DPa5jzqmzTwDE5F%2BfV2bxhe9Dns%3D&format=.webp" },
    { character: "喝", pinyin: "hē", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd5904bc06424cf795bdef759a9068b2~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=eI2rt8Xxvw9xR0ZIEX9vSO0iH%2FY%3D&format=.webp" },
    { character: "看", pinyin: "kàn", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/b952680378ae41978143777bc744fd75~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=sdmgeN9rUI%2F%2Fv9Fl3rC9rn3pYmg%3D&format=.webp" },
    { character: "听", pinyin: "tīng", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/b36184d5ef58458e8b123ab2c1eea908~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=jd4aV5y%2FV4S8jeDPxYEhOlbORzs%3D&format=.webp" },
    { character: "说", pinyin: "shuō", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/540827c2e99e47378a3c1d23a63b7086~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=FSxLtzgUgCEXilFlYlXsXnIcTuY%3D&format=.webp" },
    { character: "读", pinyin: "dú", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/b685a0ed83e748e08e8fdde7e41d66c0~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ELhc7q809Kq7Bn6IaR18qMIR%2FuE%3D&format=.webp" },
    { character: "写", pinyin: "xiě", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e9fe9e5086fd49869443f6df9b93e410~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=LMnTyd0vATuKBOlhWjqUW8f7TYM%3D&format=.webp" },
    { character: "买", pinyin: "mǎi", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/4da04aa967e3406fb9cd86ec31bdd5ae~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=3CB3MsqQp0EcWky%2F0xU0Z4HYkuY%3D&format=.webp" },
    { character: "卖", pinyin: "mài", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/5b9b6a8a92944eeaa9df8420616d5044~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=NaznVC1S8K5q%2FCYRfHUdu0LgmqA%3D&format=.webp" },
    { character: "开", pinyin: "kāi", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/baf1fbd9612849cfaeafc9056734f224~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Rzu5WXDwEmuF5tMue2V0VCMCNJ0%3D&format=.webp" },
    { character: "关", pinyin: "guān", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/db069b549e32416e8195c80c19a7308f~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Edo0EtCIdK56T85j1LB3bDoSR8w%3D&format=.webp" },
    { character: "玩", pinyin: "wán", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/d263c53dc8324f88bc4c51007762def8~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=2pwGPK9VnbhvFeJfmss2HDwCUsc%3D&format=.webp" },
    { character: "笑", pinyin: "xiào", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/a004c9e92efa4d248b1e93f18fde782c~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=eAYbs3DMpKMG6AaRd67LIXKK9GA%3D&format=.webp" },
    { character: "哭", pinyin: "kū", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/df9881f76a84429e8c4b0a8fb32a7039~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=UC5y%2Bij3lHaesnI%2F6D3dPKk9yeo%3D&format=.webp" },
    { character: "睡", pinyin: "shuì", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/1857d622eed84c07a6add4e9dcf575cf~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=y%2FngW8gf0FsPvmfm6dVYPILCysg%3D&format=.webp" },
    { character: "醒", pinyin: "xǐng", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ad97e079c3bd4cf8974df32cffbf2d89~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ZvT0d3Hj4MDeSN5LNrVSOsONFoc%3D&format=.webp" },
    { character: "洗", pinyin: "xǐ", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/c0bed130490e4f339f19bb7ac8fe02a9~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=GzSea8OmrTffb6M3TfVxHKsrd2Q%3D&format=.webp" },
    { character: "穿", pinyin: "chuān", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/70e11f23798a445ea31fd543a8927354~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=c8fDxr1OAHx%2FvRdzZopWIbP%2BTqM%3D&format=.webp" },

    // 身体部位（新增）
    { character: "手", pinyin: "shǒu", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/2a4724ab544a4b76aae462f73e842368~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=ppJmnfyNV3gPprRGuR1s5tXFCXI%3D&format=.webp" },
    { character: "足", pinyin: "zú", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/7cc3114d03c845a2afcb66ef19715849~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=n7WMB4ox0%2BG9OySl5FiokVMhY8g%3D&format=.webp" },
    { character: "头", pinyin: "tóu", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/d2c30e90037a4dea9db64fce3e8e7bcb~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=sHS%2FTjRAWa%2BaszkRoVjNct8MSM0%3D&format=.webp" },
    { character: "目", pinyin: "mù", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/ab0ae7dfb9ce49a485fa79fc97d14be9~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=pR9NTDdRMnn4oducxo5JgUsUasA%3D&format=.webp" },
    { character: "口", pinyin: "kǒu", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/808601539d384bbdabf1a3a9754a193b~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=6Kys8rnlLzRg0BLgzHFjSqivtAM%3D&format=.webp" },
    { character: "耳", pinyin: "ěr", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/62a44acf9dfc4c7a920e6b900e073e9a~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=6wQFwuFB9pfRK5ly7F90WBkh5Pw%3D&format=.webp" },
    { character: "心", pinyin: "xīn", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/b8f688d99174430c850d2c04f0c740ff~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=JhqP8hushGf0K72YXDpSL546Q3s%3D&format=.webp" },
    { character: "牙", pinyin: "yá", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/9df95fc80fc149eb8f4b6b74952f2dc2~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=Dsyvjxsa0IoaEc6dxP6Tzf84OGg%3D&format=.webp" },

    // 食物类（新增）
    { character: "米", pinyin: "mǐ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/07060c20193f4effb114714a5862a1aa~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=IbSgJSYIJkMyj0v7FQEsmCbrBbo%3D&format=.webp" },
    { character: "面", pinyin: "miàn", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/52ea9820553042348e11943c1fd67d52~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=KkhJKe1vdFWZpFWK38BuFy4xmdo%3D&format=.webp" },
    { character: "肉", pinyin: "ròu", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/9e716a6e756a43fcae67b1f1cbd99b7c~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=IrKqRXFII4Xbfy5O6aNzGvu7kH0%3D&format=.webp" },
    { character: "茶", pinyin: "chá", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/7ec08d46291d4213936c248cbf979772~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=jLy6wfb5JW%2Fety1xkyy6jckMdXI%3D&format=.webp" },
    { character: "酒", pinyin: "jiǔ", image: "https://p9-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/d95eb5328d2049b0b91b4313e88269b8~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=68ILWd%2BX4XWnCwQCAKGxLoXzx84%3D&format=.webp" },
    { character: "饭", pinyin: "fàn", image: "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/251a624b03044bda907a9337ec6f379a~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=sbQJP85V%2FV5RpF70dCYPxJ4GgOg%3D&format=.webp" },
    { character: "菜", pinyin: "cài", image: "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/29a1d16ca94f4741af79eaf2841a9810~tplv-tb4s082cfz-aigc_resize_loss:360:360.webp?lk3s=43402efa&x-expires=1745712000&x-signature=9FXGT%2BX%2BS5e6a3r8Qa9nPWDJTn4%3D&format=.webp" },
    // { character: "蛋", pinyin: "dàn", image: "" },
  
    //   // 新增：季节天气
    //   { character: "春", pinyin: "chūn", image: "" },
    //   { character: "夏", pinyin: "xià", image: "" },
    //   { character: "秋", pinyin: "qiū", image: "" },
    //   { character: "冬", pinyin: "dōng", image: "" },
    //   { character: "晴", pinyin: "qíng", image: "" },
    //   { character: "阴", pinyin: "yīn", image: "" },
    //   { character: "雪", pinyin: "xuě", image: "" },
    //   { character: "雷", pinyin: "léi", image: "" },

        //   // 新增：颜色扩展
    //   { character: "黄", pinyin: "huáng", image: "" },
    //   { character: "蓝", pinyin: "lán", image: "" },
    //   { character: "白", pinyin: "bái", image: "" },
    //   { character: "黑", pinyin: "hēi", image: "" },
    //   { character: "紫", pinyin: "zǐ", image: "" },
    //   { character: "灰", pinyin: "huī", image: "" },


    // // 形容词类
    // { character: "大", pinyin: "dà", image: "" },
    // { character: "小", pinyin: "xiǎo", image: "" },
    // { character: "高", pinyin: "gāo", image: "" },
    // { character: "低", pinyin: "dī", image: "" },
    // { character: "长", pinyin: "cháng", image: "" },
    // { character: "短", pinyin: "duǎn", image: "" },
    // { character: "多", pinyin: "duō", image: "" },
    // { character: "少", pinyin: "shǎo", image: "" },
    // { character: "好", pinyin: "hǎo", image: "" },
    // { character: "坏", pinyin: "huài", image: "" },
    // { character: "新", pinyin: "xīn", image: "" },
    // { character: "旧", pinyin: "jiù", image: "" },
    // { character: "快", pinyin: "kuài", image: "" },
    // { character: "慢", pinyin: "màn", image: "" },
    // { character: "热", pinyin: "rè", image: "" },
    // { character: "冷", pinyin: "lěng", image: "" },
    // { character: "甜", pinyin: "tián", image: "" },
    // { character: "苦", pinyin: "kǔ", image: "" },
    // { character: "红", pinyin: "hóng", image: "" },
    // { character: "绿", pinyin: "lǜ", image: "" },

    // // 时间类（新增）
    // { character: "年", pinyin: "nián", image: "" },
    // { character: "月", pinyin: "yuè", image: "" },
    // { character: "日", pinyin: "rì", image: "" },
    // { character: "时", pinyin: "shí", image: "" },
    // { character: "分", pinyin: "fēn", image: "" },
    // { character: "秒", pinyin: "miǎo", image: "" },
    // { character: "早", pinyin: "zǎo", image: "" },
    // { character: "晚", pinyin: "wǎn", image: "" },

    // // 方位类（新增）
    // { character: "上", pinyin: "shàng", image: "" },
    // { character: "下", pinyin: "xià", image: "" },
    // { character: "左", pinyin: "zuǒ", image: "" },
    // { character: "右", pinyin: "yòu", image: "" },
    // { character: "前", pinyin: "qián", image: "" },
    // { character: "后", pinyin: "hòu", image: "" },
    // { character: "里", pinyin: "lǐ", image: "" },
    // { character: "外", pinyin: "wài", image: "" },

    //   // 新增：职业类
    //   { character: "医", pinyin: "yī", image: "" },
    //   { character: "护", pinyin: "hù", image: "" },
    //   { character: "警", pinyin: "jǐng", image: "" },
    //   { character: "司", pinyin: "sī", image: "" }, // 司机
    //   { character: "工", pinyin: "gōng", image: "" },
    //   { character: "农", pinyin: "nóng", image: "" },
    //   { character: "商", pinyin: "shāng", image: "" },
    //   { character: "学", pinyin: "xué", image: "" }, // 学生
  
    //   // 新增：公共场所
    //   { character: "学", pinyin: "xué", image: "" }, // 学校
    //   { character: "医", pinyin: "yī", image: "" }, // 医院
    //   { character: "公", pinyin: "gōng", image: "" }, // 公园
    //   { character: "超", pinyin: "chāo", image: "" }, // 超市
    //   { character: "银", pinyin: "yín", image: "" }, // 银行
    //   { character: "餐", pinyin: "cān", image: "" }, // 餐厅
    //   { character: "厕", pinyin: "cè", image: "" },
    //   { character: "店", pinyin: "diàn", image: "" },
  
    //   // 新增：交通工具
    //   { character: "飞", pinyin: "fēi", image: "" }, // 飞机
    //   { character: "船", pinyin: "chuán", image: "" },
    //   { character: "自", pinyin: "zì", image: "" }, // 自行车
    //   { character: "火", pinyin: "huǒ", image: "" }, // 火车
    //   { character: "地", pinyin: "dì", image: "" }, // 地铁
    //   { character: "汽", pinyin: "qì", image: "" }, // 汽车
    //   { character: "摩", pinyin: "mó", image: "" }, // 摩托车
    //   { character: "站", pinyin: "zhàn", image: "" }, // 车站

  
    //   // 新增：日常用品
    //   { character: "牙", pinyin: "yá", image: "" }, // 牙刷
    //   { character: "毛", pinyin: "máo", image: "" }, // 毛巾
    //   { character: "香", pinyin: "xiāng", image: "" }, // 香皂
    //   { character: "镜", pinyin: "jìng", image: "" }, // 镜子
    //   { character: "钟", pinyin: "zhōng", image: "" },
    //   { character: "电", pinyin: "diàn", image: "" }, // 电视/电话
    //   { character: "手", pinyin: "shǒu", image: "" }, // 手机
    //   { character: "冰", pinyin: "bīng", image: "" }, // 冰箱
  
    //   // 新增：反义词组
    //   { character: "开", pinyin: "kāi", image: "" }, // 开-关
    //   { character: "关", pinyin: "guān", image: "" },
    //   { character: "进", pinyin: "jìn", image: "" }, // 进-出
    //   { character: "出", pinyin: "chū", image: "" },
    //   { character: "来", pinyin: "lái", image: "" }, // 来-去
    //   { character: "去", pinyin: "qù", image: "" },
    //   { character: "有", pinyin: "yǒu", image: "" }, // 有-没
    //   { character: "没", pinyin: "méi", image: "" },

  
    //   // 新增：学校相关
    //   { character: "班", pinyin: "bān", image: "" },
    //   { character: "课", pinyin: "kè", image: "" },
    //   { character: "作", pinyin: "zuò", image: "" }, // 作业
    //   { character: "考", pinyin: "kǎo", image: "" },
    //   { character: "笔", pinyin: "bǐ", image: "" }, // 笔记本
    //   { character: "本", pinyin: "běn", image: "" },
    //   { character: "字", pinyin: "zì", image: "" },
    //   { character: "典", pinyin: "diǎn", image: "" }, // 字典

        // // 人物类
    // { character: "人", pinyin: "rén", image: "" },
    // { character: "我", pinyin: "wǒ", image: "" },
    // { character: "你", pinyin: "nǐ", image: "" },
    // { character: "他", pinyin: "tā", image: "" },
    // { character: "她", pinyin: "tā", image: "" },
    // { character: "子", pinyin: "zǐ", image: "" },
    // { character: "女", pinyin: "nǚ", image: "" },
    // { character: "父", pinyin: "fù", image: "" },
    // { character: "母", pinyin: "mǔ", image: "" },
    // { character: "儿", pinyin: "ér", image: "" },
    // { character: "友", pinyin: "yǒu", image: "" },
    // { character: "师", pinyin: "shī", image: "" },
    // { character: "生", pinyin: "shēng", image: "" },
    // { character: "老", pinyin: "lǎo", image: "" },
    // { character: "少", pinyin: "shào", image: "" },
    // { character: "男", pinyin: "nán", image: "" },
    // { character: "客", pinyin: "kè", image: "" },
    // { character: "爷", pinyin: "yé", image: "" },
    // { character: "奶", pinyin: "nǎi", image: "" },
    // { character: "伯", pinyin: "bó", image: "" },
    // { character: "叔", pinyin: "shū", image: "" },
    // { character: "姨", pinyin: "yí", image: "" },
    // { character: "姑", pinyin: "gū", image: "" },
    // { character: "哥", pinyin: "gē", image: "" },
    // { character: "姐", pinyin: "jiě", image: "" },
];


let currentGame = [];
let selectedCharacter = null;
let score = 0;
let gameActive = false;
let wrongMatches = 0;
let currentLevel = 1;
let usedCharactersInGame = new Set(); // 记录本局游戏中已使用的汉字

// DOM 元素
const startButton = document.getElementById('startButton');
const charactersContainer = document.querySelector('.characters');
const imagesContainer = document.querySelector('.images');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const levelElement = document.getElementById('level');

// 音乐控制
let isSoundOn = true;
const toggleSoundButton = document.getElementById('toggleSound');
const soundOnIcon = toggleSoundButton.querySelector('.sound-on');
const soundOffIcon = toggleSoundButton.querySelector('.sound-off');

toggleSoundButton.addEventListener('click', () => {
    isSoundOn = !isSoundOn;
    soundOnIcon.style.display = isSoundOn ? 'block' : 'none';
    soundOffIcon.style.display = isSoundOn ? 'none' : 'block';
    
    // 更新所有音效的状态
    Object.values(sounds).forEach(sound => {
        sound.muted = !isSoundOn;
    });
});

// 获取当前关卡需要的汉字数量
function getLevelCharacterCount(level) {
    return levelConfig[level - 1].characters;
}

// 更新进度条
function updateProgress() {
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    
    // 计算当前关卡的进度
    const currentLevelProgress = document.querySelectorAll('.character.matched').length / getLevelCharacterCount(currentLevel);
    
    // 计算总体进度
    const totalLevels = 4; // 总共4关
    const completedLevels = currentLevel - 1; // 已完成的关卡数
    const totalProgress = ((completedLevels + currentLevelProgress) / totalLevels) * 100;
    
    // 更新进度条
    progressBar.style.width = `${totalProgress}%`;
    progressText.textContent = `${completedLevels}/${totalLevels}关`;
}

// 添加音效系统
const sounds = {
    background: new Audio('sounds/background.mp3'),
    match: new Audio('sounds/success.wav'),
    wrong: new Audio('sounds/failure.wav'),
    levelComplete: new Audio('sounds/level-complete.wav'),
    gameComplete: new Audio('sounds/game-complete.wav'),
    gameOver: new Audio('sounds/game-over.wav')
};

// 播放音效函数
function playSound(soundName) {
    if (!isSoundOn) return;
    const sound = sounds[soundName];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

// 初始化背景音乐
function initBackgroundMusic() {
    sounds.background.loop = true;
    sounds.background.volume = 0.3;
}

// 添加移动端触摸事件支持
function addTouchSupport() {
    // 防止双击缩放
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // 防止页面滚动
    document.addEventListener('touchmove', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // 为所有可点击元素添加触摸事件
    document.querySelectorAll('.character, .image, button').forEach(element => {
        element.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    });
}

// 初始化游戏
function initGame() {
    const characterCount = getLevelCharacterCount(currentLevel);
    wrongMatches = 0; // 每关重置失败次数
    livesElement.textContent = '❤️'.repeat(3); // 每关都有3次机会
    
    // 从未使用的汉字中随机选择
    let availableData = gameData.filter(item => !usedCharactersInGame.has(item.character));
    if (availableData.length < characterCount) {
        // 如果剩余的汉字不够，重置已使用记录
        usedCharactersInGame.clear();
        availableData = gameData;
    }
    
    let selectedData = shuffleArray([...availableData])
        .slice(0, characterCount);
    
    // 记录本次使用的汉字
    selectedData.forEach(item => {
        usedCharactersInGame.add(item.character);
    });
    
    currentGame = selectedData;
    
    // 清空容器
    charactersContainer.innerHTML = '';
    imagesContainer.innerHTML = '';
    
    // 添加汉字
    currentGame.forEach(item => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        
        // 添加拼音
        const pinyinSpan = document.createElement('span');
        pinyinSpan.className = 'pinyin';
        pinyinSpan.textContent = item.pinyin || '';
        characterDiv.appendChild(pinyinSpan);
        
        // 添加汉字
        const characterSpan = document.createElement('span');
        characterSpan.textContent = item.character;
        characterDiv.appendChild(characterSpan);
        
        characterDiv.addEventListener('click', () => selectCharacter(characterDiv, item));
        charactersContainer.appendChild(characterDiv);
    });
    
    // 添加打乱的图片
    const shuffledImages = shuffleArray([...currentGame]);
    shuffledImages.forEach(item => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.character;
        imageDiv.appendChild(img);
        imageDiv.addEventListener('click', () => selectImage(imageDiv, item));
        imagesContainer.appendChild(imageDiv);
    });
    
    // 重置游戏状态
    selectedCharacter = null;
    scoreElement.textContent = score;
    levelElement.textContent = currentLevel;
    gameActive = true;
    startButton.textContent = '开始游戏';
    
    // 更新进度条，保持当前进度
    updateProgress();
}

// 选择汉字
function selectCharacter(element, item) {
    if (!gameActive) return;
    
    // 移除之前的选择
    document.querySelectorAll('.character.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // 添加新的选择
    element.classList.add('selected');
    selectedCharacter = item;
}

// 显示关卡过渡动画
function showLevelTransition(completedLevel, nextLevel) {
    const transition = document.querySelector('.level-transition');
    const levelText = transition.querySelector('.level-text');
    const starsContainer = transition.querySelector('.level-stars');
    
    // 清空之前的星星
    starsContainer.innerHTML = '';
    
    // 添加星星，根据失败次数显示灰色星星
    const characterCount = getLevelCharacterCount(completedLevel);
    for (let i = 0; i < characterCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${i < wrongMatches ? 'gray' : ''}`;
        starsContainer.appendChild(star);
    }
    
    // 显示过关动画
    levelText.textContent = `第${completedLevel}关完成！`;
    transition.style.display = 'flex';
    
    // 1.5秒后显示下一关
    setTimeout(() => {
        levelText.textContent = `第${nextLevel}关`;
        // 重置失败次数
        wrongMatches = 0;
        // 更新关卡显示
        levelElement.textContent = nextLevel;
        // 重新初始化游戏
        initGame();
    }, 1500);
}

// 显示游戏失败动画
function showGameOver(finalScore) {
    // 停止背景音乐
    sounds.background.pause();
    sounds.background.currentTime = 0;
    
    // 播放游戏结束音效
    playSound('gameOver');
    
    const gameOverElement = document.querySelector('.game-over');
    const finalScoreElement = document.querySelector('.final-score-value');
    
    finalScoreElement.textContent = finalScore;
    
    // 显示游戏结束层
    gameOverElement.style.display = 'flex';
    setTimeout(() => {
        gameOverElement.classList.add('show');
    }, 10);

    // 3秒后自动隐藏
    setTimeout(() => {
        gameOverElement.classList.remove('show');
        setTimeout(() => {
            gameOverElement.style.display = 'none';
            // 重置游戏状态
            currentLevel = 1;
            score = 0;
            wrongMatches = 0;
            usedCharactersInGame.clear();
            scoreElement.textContent = score;
            levelElement.textContent = currentLevel;
            initGame(); // 重新开始游戏
        }, 300);
    }, 3000);
}

// 显示通关动画
function showGameComplete(finalScore) {
    // 停止背景音乐
    sounds.background.pause();
    sounds.background.currentTime = 0;
    
    // 播放通关音效
    playSound('gameComplete');
    
    const completeScreen = document.querySelector('.game-complete');
    const scoreSpan = completeScreen.querySelector('.complete-score span');
    const starsContainer = completeScreen.querySelector('.complete-stars');
    
    // 设置最终得分
    scoreSpan.textContent = finalScore;
    
    // 清空并添加星星
    starsContainer.innerHTML = '';
    const totalStars = 5; // 总共5颗星
    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = '⭐';
        star.style.animationDelay = `${i * 0.2}s`;
        starsContainer.appendChild(star);
    }
    
    // 显示通关动画
    completeScreen.style.display = 'flex';
    
    // 3秒后重新开始游戏
    setTimeout(() => {
        completeScreen.style.display = 'none';
        currentLevel = 1;
        score = 0;
        wrongMatches = 0;
        document.querySelector('.score-container').textContent = `得分：${score}`;
        document.querySelector('.level-container').textContent = `第${currentLevel}关`;
        initGame();
    }, 3000);
}

// 选择图片
function selectImage(element, item) {
    if (!gameActive || !selectedCharacter) return;
    
    if (selectedCharacter.character === item.character) {
        // 配对成功
        element.classList.add('matched');
        const characterElement = Array.from(charactersContainer.children).find(
            el => el.querySelector('span:last-child').textContent === selectedCharacter.character
        );
        if (characterElement) {
            characterElement.classList.add('matched');
        }
        
        // 播放匹配成功音效
        playSound('match');
        
        score++;
        scoreElement.textContent = score;
        
        // 更新进度条
        updateProgress();
        
        // 检查是否完成当前关卡
        const matchedCount = document.querySelectorAll('.character.matched').length;
        const totalCount = getLevelCharacterCount(currentLevel);
        
        if (matchedCount === totalCount) {
            // 播放过关音效
            playSound('levelComplete');
            
            // 检查是否通关
            if (currentLevel === 4) {
                showGameComplete(score);
            } else {
                const completedLevel = currentLevel;
                currentLevel++;
                showLevelTransition(completedLevel, currentLevel);
            }
        }
    } else {
        // 配对失败
        wrongMatches++;
        livesElement.textContent = '❤️'.repeat(3 - wrongMatches);
        
        // 播放匹配失败音效
        playSound('wrong');
        
        // 添加减少动画
        const decreaseElement = document.createElement('span');
        decreaseElement.className = 'lives-decrease';
        decreaseElement.textContent = '-1';
        livesElement.parentElement.appendChild(decreaseElement);
        
        // 移除动画元素
        setTimeout(() => {
            decreaseElement.remove();
        }, 500);
        
        element.classList.add('wrong-match');
        const characterElement = Array.from(charactersContainer.children).find(
            el => el.textContent === selectedCharacter.character
        );
        if (characterElement) {
            characterElement.classList.add('wrong-match');
        }
        
        // 移除失败动效
        setTimeout(() => {
            element.classList.remove('wrong-match');
            if (characterElement) {
                characterElement.classList.remove('wrong-match');
            }
        }, 500);
        
        // 检查是否用完当前关卡的失败机会
        if (wrongMatches >= 3) {
            gameActive = false;
            showGameOver(score);
        }
    }
    
    // 清除选择
    selectedCharacter = null;
    document.querySelectorAll('.character.selected').forEach(el => {
        el.classList.remove('selected');
    });
}

// 重新排列剩余的汉字和图片
function reorderRemainingItems() {
    // 获取未配对的汉字
    const remainingCharacters = Array.from(charactersContainer.children)
        .filter(el => !el.classList.contains('matched'));
    
    // 获取未配对的图片
    const remainingImages = Array.from(imagesContainer.children)
        .filter(el => !el.classList.contains('matched'));
    
    // 随机打乱顺序
    const shuffledCharacters = shuffleArray([...remainingCharacters]);
    const shuffledImages = shuffleArray([...remainingImages]);
    
    // 清空容器
    charactersContainer.innerHTML = '';
    imagesContainer.innerHTML = '';
    
    // 重新添加元素，保持原有的内容和事件监听器
    shuffledCharacters.forEach(character => {
        charactersContainer.appendChild(character);
    });
    
    shuffledImages.forEach(image => {
        imagesContainer.appendChild(image);
    });
}

// 数组随机打乱函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 开始按钮事件监听
startButton.addEventListener('click', initGame);

// 在页面加载时初始化音效和触摸支持
window.addEventListener('load', () => {
    initBackgroundMusic();
    addTouchSupport();
});

// 关卡配置
const levelConfig = [
    { characters: 2, lives: 3, timeLimit: 60 },  // 第1关
    { characters: 3, lives: 3, timeLimit: 60 },  // 第2关
    { characters: 3, lives: 3, timeLimit: 60 },  // 第3关
    { characters: 4, lives: 3, timeLimit: 60 }   // 第4关
]; 