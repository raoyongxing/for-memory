
<template>
    <footer class="bg-white border-t border-border py-4">
        <div class="portal-footer">
            <div class="portal-footer__content">
                <p>{{ $t('index.footer_target', { pipe: '|' }) }}</p>
                <p class="beian-wrap mt-2 underline">
                    <a class="text-primary" href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025136985号-1</a>
                </p>
            </div>
            <div class="weixin-mp-container">
                <div class="inline-block p-2 bg-gray-100">
                    <img style="width: 129px;" src="/img/weixin_mp_qrcode.jpg" alt="微信公众号二维码" />
                </div>
                <div class="inline-block p-2 bg-gray-100">
                    <img style="height: 129px;" src="~/assets/img/icon.svg" alt="数字痕迹" />
                </div>
                <br>
                <span class="weixin-mp-desc">{{ $t('index.weixin_mp_scan') }}</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.portal-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.portal-footer__content {
    font-size: 14px;
    color: #000000af;
}
.beian-wrap {
    color: #00000099;
    text-align: center;
}

.weixin-mp-container {
    margin-left: 4rem;
    text-align: center;
}

.weixin-mp-desc {
    font-size: 14px;
    color: #00000099;
}

@media screen and (max-width: 768px) {
    .portal-footer {
        flex-direction: column;
    }
    .weixin-mp-container {
        margin-left: 0;
        margin-top: 2rem;
    }
}

</style>
