<template>
    <div class="login_img"></div>
    <div class="login_size" @click="openLogin">点击登录</div>
    <el-dialog v-model="dialogVisible" title="" width="430" :before-close="handleClose" :append-to-body="true">
        <div class="scan-status" v-if="loginStatus != 802">
            <div class="title">扫码登录</div>
            <div class="login-img" v-loading="loading">
                <img :src="qrCodeImg" alt="">
                <!-- <div class="img-mask">
                    <div class="img-mask-text" v-if="loginStatus === 800">二维码已失效</div>

                    <el-button type="success" v-if="loginStatus === 800">点击刷新</el-button>
                </div> -->
            </div>
            <div class="login-text">使用 <span style="color: #34d399">网易云音乐APP</span> 扫码登录</div>
        </div>
        <!-- 扫码待确认登录 -->
        <div class="scan-verify" v-else>
            <el-icon class="scan-icon">
                <SuccessFilled />
            </el-icon>
            <div class="scan-text">扫码成功</div>
            <div class="scan-text2">请在手机上确认登录</div>
        </div>
    </el-dialog>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch, onUnmounted } from 'vue'
import { useLoginKey, useLoginQR, useGetLoginStatus, useGetUserInfo } from "@/api/login/index";

const dialogVisible = ref<boolean>(false);
const loading = ref<boolean>(true);
const qrCodeImg = ref<string>('');//登录二维码
let timer: number | undefined;
let qrCodeKey = ref<string>('');
let loginStatus = ref<number | string>();

const openLogin = () => {
    loading.value = true;
    dialogVisible.value = true;
}
const handleClose = () => {
    loginStatus.value = '';
    qrCodeImg.value = '';
    dialogVisible.value = false;

}

//循环获取登录状态
const loopGetLoginStatus = () => {
    timer = setInterval(async () => {
        let params = {
            key: qrCodeKey.value,
            timestamp: new Date().getTime(),
        }
        const res = await useGetLoginStatus(params);
        loginStatus.value = res.code;
        console.log('结果', res.code);

        if (timer === undefined) return;
        if (res.code === 803) {
            clearInterval(timer);
            dialogVisible.value = false;
            loginStatus.value = '';
            getUserInfo();
            timer = undefined;
        }
        if (res.code == 800) {
            clearInterval(timer);

            timer = undefined;
        }
    }, 1000)
}

//获取用户信息
const getUserInfo = async () => {
    const res = await useGetUserInfo();
    console.log('用户信息', res);
}

const loginKey = async (timestamp: number) => {
    const res = await useLoginKey(timestamp);
    if (res.code === 200) {
        qrCodeKey.value = res.data.unikey;
        getLoginQR(res.data.unikey)
    }
}

//获取登录二维码图片地址
const getLoginQR = async (loginKey: string) => {
    let params = {
        key: loginKey,
        qrimg: true,
        timestamp: new Date().getTime(),
    };
    const data = await useLoginQR(params);
    if (data.code === 200) {
        // 登录成功
        setTimeout(() => {
            qrCodeImg.value = data.data.qrimg;
            loading.value = false
        }, 1000);
        loopGetLoginStatus()
    }
}

watch(() => dialogVisible.value, (newVal) => {
    if (newVal) {
        var timestamp = new Date().getTime();
        loginKey(timestamp)
    } else {
        clearInterval(timer);
    }
})
onUnmounted(() => {
    clearInterval(timer);
});
</script>
<style scoped lang="scss">
.login_img {
    cursor: pointer;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: pink;
    margin-right: 5px;
}

.login_size {
    cursor: pointer;
    font-size: 14px;
}

.scan-status {
    width: 390px;
    height: 310px;

    .title {
        font-size: 30px;
        text-align: center;
        margin-top: 20px;
    }

    .login-img {
        position: relative;
        width: 200px;
        height: 200px;
        margin-left: 50%;
        margin: 30px auto;

        .img-mask {
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            width: 200px;
            height: 200px;

            .img-mask-text {
                color: #fff;
                font-size: 20px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}



.scan-verify {
    width: 390px;
    height: 310px;

    .scan-icon {
        color: #34d399;
        font-size: 60px;
        margin-left: 50%;
        margin-top: 20px;
        transform: translateX(-50%);
    }

    .scan-text {
        font-size: 30px;
        font-weight: 600;
        margin: 40px 10px 20px;
        text-align: center;
    }

    .scan-text2 {
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
    }
}

.login-img img {
    width: 200px;
    height: 200px;
}

.login-text {
    text-align: center;
    font-size: 16px;
    margin-bottom: 40px;
}

.w-290 {
    width: 290px;
}

.h-40 {
    height: 40px;
}

.m-20 {
    margin: 20px 0;
}
</style>