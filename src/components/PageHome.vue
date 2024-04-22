<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script setup>
import ThreadList from './ThreadList.vue'
import sourceData from '@/data.json'
import { reactive } from 'vue'

const threads = reactive(sourceData.threads)

// export default {
//   data() {
//     return { threads: sourceData.threads }
//   }
// }
</script>

<style></style>
