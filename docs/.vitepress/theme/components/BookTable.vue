<template>
  <div class="book-table-wrapper">
    <input
      v-model="search"
      type="text"
      placeholder="Filtrar por título ou autor..."
      class="filter-input"
    />

    <div class="table-container">
      <table class="book-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Edição</th>
            <th>Resenha</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.title">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
            <td>{{ book.year }}</td>
            <td>
              <a
                v-if="book.review"
                :href="book.review"
                target="_blank"
                class="review-link"
              >
                Ver
              </a>
              <span v-else class="no-review"></span>
            </td>
            <td>
              <span
                v-for="item in book.tagsWithClass"
                :key="item.tag"
                :class="['tag', item.class]"
              >
                {{ item.tag }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { books } from '../../../data/books.js';

const search = ref("");

const tagMap = {
  Esoterismo: "tag-esoterismo",
  Ocultismo: "tag-ocultismo",
  Mitologia: "tag-mitologia",
  Religiao: "tag-religiao",
  Gnosticismo: "tag-gnosticismo"
};

const filteredBooks = computed(() => {
  const term = search.value.toLowerCase();
  return books
    .filter(book =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    )
    .map(book => ({
      ...book,
      tagsWithClass: (book.tags || []).map(tag => ({
        tag,
        class: tagMap[tag] || "tag-default"
      }))
    }));
});
</script>

<style scoped>
.book-table-wrapper {
  width: 100%;
  max-width: none;
  overflow-x: auto;
}

.filter-input {
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 12px;
}

/* Tabela */
.table-container {
  width: 100%;
  overflow-x: auto;
}

.book-table {
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  font-size: 13px;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.book-table th,
.book-table td {
  padding: 6px 8px;
  text-align: left;
  border-bottom: 1px solid #eee;
  vertical-align: top;
  word-break: break-word;
}

.book-table thead th {
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #e5e7eb;
  white-space: nowrap;
  z-index: 5;
}

.book-table tr:nth-child(even) td {
  background-color: #fafafa;
}

.book-table tr:hover td {
  background-color: #f1f5f9;
  transition: background 0.3s ease;
}

.book-table th:nth-child(6),
.book-table td:nth-child(6) {
  width: 100px; /* garante que a coluna de tags tenha espaço */
}

.book-table td .tag {
  display: inline-block;
  margin-bottom: 2px;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap; /* impede quebra */
}

/* Links e placeholders */
.review-link {
  color: #2b6cb0;
  text-decoration: none;
}
.review-link:hover {
  text-decoration: underline;
}
.no-review {
  color: #aaa;
}

.tag-esoterismo { background-color: #f0e68c; color: #000; }
.tag-ocultismo { background-color: #6b2ae4; color: #000; }
.tag-mitologia { background-color: #87ceeb; color: #000; }
.tag-religiao { background-color: #ffa07a; color: #000; }
.tag-gnosticismo { background-color: #5f8f65; color: #000; }
.tag-default { background-color: #d3d3d3; color: #000; }
</style>