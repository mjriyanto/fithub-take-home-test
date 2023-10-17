<script setup>
const props = defineProps({
  width: String,
  height: String
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 10H17V16H13V10Z" fill="currentColor" fill-opacity="0.5" />
    <path d="M11 4H7V16H11V4Z" fill="currentColor" />
    <path d="M18 18H6V20H18V18Z" fill="currentColor" />
  </svg>
</template>

<style scoped lang="scss"></style>