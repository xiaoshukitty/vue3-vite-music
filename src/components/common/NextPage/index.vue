<template>
    <div class="next_page">
        <el-icon>
            <ArrowLeft @click="router.back()"/>
        </el-icon>
        <el-icon>
            <ArrowRight />
        </el-icon>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style scoped lang="scss">
.next_page {
    display: flex;
    align-items: center;

    .el-icon {
        margin-right: 15px;
        cursor: pointer;
    }

    .el-icon:hover {
        color: $base-fontSize-color;
    }
}
</style>