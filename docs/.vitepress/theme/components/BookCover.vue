<!-- docs/.vitepress/components/BookCover.vue -->
<template>
  <div class="book-cover">
    <img :src="withBase(`/image/${cover}`)" :alt="title" class="cover-image" />
    <div class="book-info">
      <h3 class="book-title">{{ title }}</h3>
      <p class="book-author">{{ author }}</p>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false,
    default: ''
  },
  cover: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.book-cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.cover-image {
  max-width: 200px;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.book-info {
  text-align: center;
  margin-top: 0.5rem;
}

.book-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.book-author {
  font-size: 0.9rem;
  color: #555;
}
</style>