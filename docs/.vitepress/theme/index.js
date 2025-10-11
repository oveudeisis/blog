import DefaultTheme from 'vitepress/theme'
import BookTable from './components/BookTable.vue'
import TagLegend from './components/TagLegend.vue'
import BookCover from './components/BookCover.vue'
import Image from './components/Image.vue'
import Paragraph from './components/Paragraph.vue'
import './custom.css'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // registra os componentes globalmente
    app.component('BookTable', BookTable)
    app.component('TagLegend', TagLegend)
    app.component('BookCover', BookCover)
    app.component('Image', Image)
    app.component('Paragraph', Paragraph)
  }
}
