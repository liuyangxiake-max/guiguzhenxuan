<template>
  <div>
    <h1 class="title">项目根文件</h1>
    <el-button type="primary" :icon="Plus">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import{Plus} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
  .title {
    color: $base-color;
  }
</style>
