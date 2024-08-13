<template>
    <div class="reviewList">
        <div class="hotReview">
            <div v-if="reviewObj.hotComments && reviewObj.hotComments.length > 0">精彩评论</div>
            <CommentList :commentData="reviewObj.hotComments" />
        </div>
        <div class="hotReview">
            最新评论&nbsp; ({{ reviewObj.total }})
            <CommentList :commentData="reviewObj.comments" />
        </div>
        <div class="pagination">
            <el-pagination v-model:current-page="pageInfo.currentPage" v-model:page-size="pageInfo.pageSize"
                :page-sizes="[10, 20, 30, 50]" background layout="sizes, prev, pager, next" :total="pageInfo.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineEmits } from 'vue';
import CommentList from './CommentList.vue';

const props = defineProps({
    reviewObj: {
        type: Object,
        default: () => { }
    },
    pageInfo: {
        type: Object,
        default: () => { }
    }
})

const emit = defineEmits(['update:pageSize', 'update:currentPage'])

const handleSizeChange = (val: number) => {
    emit('update:pageSize', val)

}
const handleCurrentChange = (val: number) => {
    emit('update:currentPage', val)
}


</script>
<style scoped lang="scss">
.reviewList {

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

    .pagination {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }
}
</style>