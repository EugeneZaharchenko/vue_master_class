<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
            <!-- publishedAt {{ thread.publishedAt }} -->
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.repliesCount }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findById } from '@/helpers'
import sourceData from '@/data.json'
import AppDate from './AppDate.vue'
export default {
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId)
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId)
    }
  }
}
</script>

<style></style>
