# Minha Biblioteca de Livros

<script setup>
const paragraphText = 'Aqui compartilho títulos da minha estante pessoal. Muitos autores parecem não ter relação entre si. Talvez você se pergunte: por que alguém se interessaria tanto por Eliphas Levi e Mircea Eliade? A resposta está nos contrastes entre iniciação e análise acadêmica, foi explorando essas diferenças que aprendi a formar meu próprio pensamento.'
</script>

<Paragraph :text="paragraphText" font-size="14px" color="#222" line-height="1.8" />


<BookTable />