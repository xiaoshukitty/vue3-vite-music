<template>
    <h2> {{ title }}</h2>
</template>

<script setup lang='ts'>

defineProps<{
    title: string
}>()
</script>
<style scoped lang="scss">
h2 {
    font-size: 24px;
    margin: 20px 0;
}
</style>