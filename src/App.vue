<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { userPlayerInit } from '@/store/modules/playSong'

userPlayerInit();
</script>

<style scoped lang="scss">
</style>
