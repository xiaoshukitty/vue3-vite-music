<template>
    <div class="exclusive">
        <Title :title="'独家放送'" />
        <div class="list">
            <div class="item" v-for="item in exclusiveMusicData" :key="item.id">
                <img :src="item.picUrl" alt="">
                <span style="font-size: .75rem;">{{ item.name }}</span>
            </div>
        </div>

    </div>
</template>
<script setup lang='ts'>
import { toRefs, onMounted } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { exclusiveMusicData } = toRefs(useMusicStore())
const { getExclusiveMusicData } = useMusicStore()

onMounted(async () => {
    await getExclusiveMusicData()
    console.log('exclusiveMusicData---', exclusiveMusicData);

})

</script>
<style scoped lang="scss">
.exclusive {
    .list {
        width: 100%;
        display: flex;

        .item {
            width: 24%;
            margin-right: 1%;
           
            img {
                width: 100%;
                height: 180px;
                border-radius: 10px;
                object-fit: inherit;
            }
        }
    }

}
</style>