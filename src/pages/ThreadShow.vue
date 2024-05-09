<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useThreadsStore } from '@/stores/ThreadsStore'
import { usePostsStore } from '@/stores/PostsStore'

import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import sourceData from '@/data.json'
export default {
  name: 'ThreadShow',
  components: { PostList, PostEditor },
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
    ...mapState(useThreadsStore, ['threads']),
    ...mapState(usePostsStore, ['posts']),
    thread() {
      return this.threads.find((thread) => thread.id === this.id)
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id)
    }
  },
  methods: {
    ...mapActions(usePostsStore, ['createPost']),
    addPost(eventData) {
      const post = {
        ...eventData.post,
        // id: postId,
        // text: this.newPostText,
        threadId: this.id
      }
      this.createPost(post)
    }
  }
}
</script>
