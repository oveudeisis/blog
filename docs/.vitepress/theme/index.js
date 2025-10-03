import DefaultTheme from 'vitepress/theme'
import BookTable from './components/BookTable.vue'
import BookCover from './components/BookCover.vue'
import Image from './components/Image.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // registra os componentes globalmente
    app.component('BookTable', BookTable)
    app.component('BookCover', BookCover)
    app.component('Image', Image)
  }
}
