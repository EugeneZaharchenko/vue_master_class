<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
export default {
  components: { PostList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id)
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id)
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find((post) => post.id === postId)
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId)
    }
  }
}
</script>
