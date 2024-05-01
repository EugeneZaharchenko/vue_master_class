<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
    <post-editor @save="addPost"/>
  </div>
</template>

<script>
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
  data () {
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
    addPost(eventData) {
      // const postId = 'slavaUkraini' + Math.random()
      const post = {
        ...eventData.post,
        // id: postId,
        // text: this.newPostText,
        // publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        // userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.posts.push(post)
      this.thread.posts.push(post.id)
    }  
  }
}
</script>
