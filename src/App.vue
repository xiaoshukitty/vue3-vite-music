<template>
  <div>
    <el-button type="primary">使用element-plus的第一个按钮</el-button>
    <el-icon>
      <Edit />
    </el-icon>
    <div class="box">scss</div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.box{
  width: 100px;
  height: 100px;
  background-color: $base-background;
}
</style>
