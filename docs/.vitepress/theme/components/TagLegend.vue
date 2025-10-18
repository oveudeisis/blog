<template>
  <aside class="tag-legend">
    <h3>Legenda de Tags</h3>
    <ul>
      <li v-for="item in tagItems" :key="item.tag">
        <span :class="['tag', item.class]">{{ item.tag }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const tagMap = {
  Esoterismo: "tag-esoterismo",
  Ocultismo: "tag-ocultismo",
  Mitologia: "tag-mitologia",
  Religiao: "tag-religiao",
  Gnosticismo: "tag-gnosticismo"
};

const tagItems = Object.keys(tagMap).map(tag => ({
  tag,
  class: tagMap[tag]
}));
</script>

<style scoped>
.tag-legend {
  min-width: 180px;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 12px;
  height: fit-content;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  margin-top: 1rem;
}
.tag-legend h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.tag-legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tag-legend li {
  margin: 4px 0;
}

.tag {
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.85rem;
}
</style>
