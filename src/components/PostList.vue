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

      <div class="post-date text-faded" :title="humamFriendlyDate(post.publishedAt)">
        {{ diffForHumans(post.publishedAt) }}
        <!-- <AppDate :timestamp="post.publishedAt" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

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
    },
    diffForHumans (timestamp) {
      return dayjs.unix(timestamp).fromNow()
    },
    humamFriendlyDate(timestamp) {
      return dayjs.unix(timestamp).format('llll')
    }
  }
}
</script>

<style></style>
