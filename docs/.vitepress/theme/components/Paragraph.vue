<template>
  <p :style="paragraphStyle">{{ text }}</p>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  fontSize: {
    type: [String, Number],
    default: '16px'
  },
  color: {
    type: String,
    default: '#333'
  },
  lineHeight: {
    type: String,
    default: '1.6'
  }
})

const paragraphStyle = computed(() => ({
  fontSize: typeof props.fontSize === 'number' ? props.fontSize + 'px' : props.fontSize,
  color: props.color,
  lineHeight: props.lineHeight,
  margin: '1em 0'
}))
</script>

<style scoped>
p {
  margin: 1em 0;
}
</style>
