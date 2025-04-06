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
import { useLoginKey, useLoginQR, useGetLoginStatus } from "@/api/login/index";
import request from "@/utils/request";

const dialogVisible = ref<boolean>(false);
const loading = ref<boolean>(true);
const qrCodeImg = ref<string>('');//登录二维码
let timer: NodeJS.Timeout | undefined;
let qrCodeKey = ref<string>('');
let loginStatus = ref<number | string>();

interface UserInfoResponse {
    code: number;
    data?: any;
    [key: string]: any;
}

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
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(async () => {
        if (!qrCodeKey.value) {
            clearInterval(timer);
            return;
        }

        let params = {
            key: qrCodeKey.value,
            timestamp: new Date().getTime(),
        }
        const res = await useGetLoginStatus(params);
        
        if (res.code === 803) {
            clearInterval(timer);
            dialogVisible.value = false;
            loginStatus.value = '';
            // 获取 cookie 并传递给 getUserInfo
            const cookie = res.cookie;
            await getUserInfo(cookie);
            timer = undefined;
            return;
        }
        
        if (res.code === 800) {
            clearInterval(timer);
            timer = undefined;
            return;
        }

        loginStatus.value = res.code;
    }, 1000)
}

//获取用户信息
const getUserInfo = async (cookie?: string) => {
    console.log('cookie', cookie);
    try {
        const timestamp = new Date().getTime();
        const res = await request.get<UserInfoResponse>('/login/status', {
            timestamp
        }, {
            headers: {
                'Cookie': cookie || ''
            }
        });
        console.log('用户信息响应:', res);
        if (cookie) {
            localStorage.setItem('cookie', cookie); //缓存cookie
        }
        localStorage.setItem('userInfo', JSON.stringify(res.data.profile)); //缓存用户信息
        if (!res || res.code !== 200) {
            console.error('获取用户信息失败，响应数据:', res);
            return;
        }
        // 这里可以添加用户信息处理逻辑
    } catch (error) {
        console.error('获取用户信息失败，错误详情:', error);
    }
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

watch(() => dialogVisible.value, (newVal: boolean) => {
    if (newVal) {
        const timestamp = new Date().getTime();
        loginKey(timestamp);
    } else {
        if (timer) {
            clearInterval(timer);
            timer = undefined;
        }
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