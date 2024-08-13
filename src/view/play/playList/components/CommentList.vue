<template>
    <div class="review">
        <div class="review-item" v-for="(item, index) in commentData" :key="item.commentId">
            <div class="review-img">
                <img :src="item.user.avatarUrl" alt="">
            </div>
            <div class="review-info">
                <div class="review-top" style="overflow-wrap: anywhere;">
                    <span class="review-name">{{ item.user.nickname }}:</span>
                    <span class="review-content">{{ item.content }}</span>
                </div>
                <div class="recover-review" v-if="item.beReplied.length > 0">
                    <div class="recover-review-item" v-for="(item1, index) in item.beReplied" :key="index">
                        <span class="recover-review-name">@{{ item1.user.nickname }}:</span>
                        <span class="recover-review-content">{{ item1.content }}</span>
                    </div>
                </div>
                <div class="review-bottom">
                    <div class="review-data">{{ useTimestampType(item.time, 'YYYY-MM-DD hh:mm:ss') }}</div>
                    <div class="review-interaction">
                        <el-icon>
                            <Star />
                        </el-icon>{{ item.likedCount }}
                        <el-icon style="margin-left: 20px;">
                            <ChatDotSquare />
                        </el-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useTimestampType } from '@/utils/index'

const props = defineProps({
    commentData: {
        type: Array,
    },
})


onMounted(() => {
    console.log('ss', props.commentData);
})
</script>
<style scoped lang="scss">
.hotReview {
    .review {
        .review-item {
            display: flex;
            margin: 20px 0;
            border-bottom: 1px solid #ccc;
            padding: 10px;

            .review-img {
                width: 50px;
                height: 50px;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }

            .review-info {
                flex: 1;
                margin-left: 20px;
                display: flex;
                flex-direction: column;

                .review-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.5rem;

                    .review-data {
                        font-size: 0.75rem;
                        line-height: 1rem;
                        color: #858688;
                    }

                    .review-interaction {
                        font-size: 14px;
                        display: flex;
                        color: #858688;

                        .el-icon {
                            font-size: 14px;
                            margin-right: 5px;
                        }
                    }
                }

                .recover-review {
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    font-size: 14px;
                    background-color: #f5f5f5;
                    border-radius: 5px;

                    .recover-review-name {
                        font-size: 14px;
                        color: rgb(14, 165, 233);
                        margin-right: 5px;
                    }
                }
            }

            .review-top {

                .review-name {
                    font-size: 14px;
                    color: rgb(14 165 233);
                    margin-right: 5px;
                }
            }
        }
    }

    .review-top {

        .review-name {
            font-size: 14px;
            color: rgb(14 165 233);
            margin-right: 5px;
        }


    }

    .review-content {
        font-size: 14px;
    }
}
</style>