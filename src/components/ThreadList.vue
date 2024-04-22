<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <a href="#">{{ thread.title }}</a>
          <!-- <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p> -->
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, publishedAt {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.repliesCount }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">publishedAt {{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { findById } from '@/helpers'
import sourceData from '@/data.json'
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

defineProps({
  threads: {
    type: Array,
    required: true
  }
})

function postById(postId) {
  return posts.find((p) => p.id === postId)
}
function userById(userId) {
  return users.find((p) => p.id === userId)
}
</script>
<!-- 
<script>
export default {
  
  } -->
// computed: { // posts() { // return this.$store.state.post // }, // users() { // return
this.$store.state.users // } // }, // methods: { // postById(postId) { // return
findById(this.posts, postId) // }, // userById(userId) { // return findById(this.users, userId) ||
{} // } // }
<!-- }
</script> -->

<style></style>
