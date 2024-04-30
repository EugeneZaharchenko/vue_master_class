<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText"
          id="" cols="30" rows="10" class="form-input"/>
          
        </div>
        <div class="form-actions">
          <button class="btn-blue">
            Submit post
          </button>
        </div>
      
    </form>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
export default {
  name: 'ThreadShow',
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
      posts: sourceData.posts,
      newPostText: ''
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
    addPost() {
      const postId = 'slavaUkraini' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)

      this.newPostText = ''
    }  
  }
}
</script>
