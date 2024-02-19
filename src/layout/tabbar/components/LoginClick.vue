<template>
    <div class="login_img"></div>
    <div class="login_size" @click="openLogin">点击登录</div>
    <el-dialog v-model="dialogVisible" title="登录" width="330" :before-close="handleClose" :append-to-body="true">
        <el-input v-model="telephone" class="w-290 h-40 " placeholder="手机号码" :prefix-icon="Search" />
        <el-input v-model="password" class="w-290 h-40 m-20" placeholder="登录密码" :prefix-icon="Search" />
        <el-button class="w-290 h-40" type="success" @click="submit">登录</el-button>
    </el-dialog>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { onMounted, ref, } from 'vue'


const dialogVisible = ref<boolean>(false)
const telephone = ref<string>('')
const password = ref<string>('')

const openLogin = () => {
    dialogVisible.value = true;
}
const handleClose = () => {
    dialogVisible.value = false;
}
const submit = () => {
    dialogVisible.value = false;
}

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