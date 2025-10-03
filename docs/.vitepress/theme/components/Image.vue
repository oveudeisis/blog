<template>
  <figure :class="['image-figure', `align-${align}`]">
    <img 
      :src="withBase(`/image/${cover}`)" 
      :alt="info" 
      :width="width" 
      :style="computedStyle"
      class="blog-image"
    />
    <figcaption v-if="info" class="image-info">{{ info }}</figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  cover: { type: String, required: true },
  info: { type: String, default: '' },
  width: { type: [String, Number], default: '100%' },
  style: { type: [String, Object], default: () => ({}) },
  align: { 
    type: String, 
    default: 'center',
    validator: (value) => ['left', 'center', 'right', 'full'].includes(value)
  }
})

const computedStyle = computed(() => ({
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  ...props.style
}))
</script>

<style scoped>
.image-figure {
  margin: 2rem 0;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.align-full {
  width: 100%;
}

.align-full .blog-image {
  width: 100%;
  max-width: 100%;
}

.blog-image {
  max-width: 100%;
  height: auto;
  display: inline-block;
  transition: transform 0.3s ease;
}

.blog-image:hover {
  transform: scale(1.02);
}

.image-info {
  margin-top: 0.75rem;
  font-style: italic;
  color: #555;
  font-size: 0.85rem;
  line-height: 1.4;
}
</style>