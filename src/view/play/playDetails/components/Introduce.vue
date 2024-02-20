<template>
    <div v-loading="!introduceData" style="min-height: 200px;">
        <div v-if="introduceData && introduceData?.introduction?.length > 0">
            <div v-for="(item, index) in introduceData?.introduction" :key="index">
                <div class="introduceData_title">{{ item.ti }}</div>
                <div class="introduceData_conten" style="white-space: pre-wrap" v-html="item.txt" />
            </div>
        </div>
        <el-empty description="暂无数据" v-else />
    </div>
</template>

<script setup lang='ts'>
import { useIntroduce } from '@/api/index'
import type { Introduce } from '@/api/types/introduce'
import { onMounted, ref } from 'vue';

const props = defineProps<{ id: number }>()
const introduceData = ref<Introduce>()

onMounted(async () => {
    introduceData.value = await useIntroduce(props.id);
    console.log('   introduceData.value', introduceData.value);
})
</script>
<style scoped lang="scss">
.introduceData_title{
    margin: 10px 0 20px;
    font-size: 16px;
    font-weight: 600;
}
.introduceData_conten{
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
    font-size: 14px;
    line-height: 30px;
}
</style>