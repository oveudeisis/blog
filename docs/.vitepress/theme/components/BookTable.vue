<script setup>
const books = [
  { title: "O Pequeno Príncipe O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", publisher: "Literatura infantil", year: "1989" }
]
</script>

<template>
  <div class="book-table">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Edição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.book-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.book-table th,
.book-table td {
  padding: 12px 16px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  max-width: 300px;
}

.book-table th {
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #e5e7eb;
}

.book-table td {
  border-bottom: 1px solid #f0f0f0;
  color: #444;
}

.book-table tr:nth-child(even) td {
  background-color: #fafafa;
}

.book-table tr:hover td {
  background-color: #f1f5f9;
  transition: background 0.3s ease;
}
</style>
