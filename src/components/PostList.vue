<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div v-if="userById(post.userId)" class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
        </a>

        <p class="desktop-only text-small">{{ userById(post.userId).postsCount }} posts</p>
        <p class="desktop-only text-small">{{ userById(post.userId).threadsCount }} threads</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        <!-- <AppDate :timestamp="post.publishedAt" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  computed: {
    users() {
      return sourceData.users
    }
  },
  methods: {
    userById(userId) {
      return this.users.find((p) => p.id === userId)
    }
  }
}
</script>

<style></style>
