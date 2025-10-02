import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "O Véu de Isis",
  description: "Histórias e reflexões pessoais",
  build: {
    outDir: '.'
  },
  themeConfig: {
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/carllosaguiar' },
      { icon: 'instagram', link: 'https://instagram.com/carlosaguiarluthier' }
    ],
    nav: [
      { text: "Início", link: "/" },
      { text: "Posts", link: "/posts/" },
      { text: "Resenhas", link: "/reviews/" },
      { text: "Poesias", link: "/poetry/" },
      { text: "Minha Biblioteca", link: "/my-library/" },
      { text: "Sobre", link: "/about/" }
    ],
    sidebar: {
      "/posts/": [
        {
          text: "Geral",
          collapsible: true,
          items: [
            { text: "Como este blog está organizado", link: "/posts/" }
          ]
        },
        {
          text: "Gnosis",
          collapsible: true,
          items: [
            { text: "Cristianismo primitivo", link: "/posts/gnosis/cristianismo-primitivo"},
            { text: "Quem foram os gnósticos", link: "/posts/gnosis/quem-foram-os-gnosticos"},
            { text: "Os mistérios do nome interno", link: "/posts/gnosis/os-misterios-do-nome-interno"}
          ]
        },
        {
          text: "Espiritualidade",
          collapsible: true,
          items: [
            { text: "Budismo", link: "/posts/spirituality/buddhism" },
            { text: "Taoísmo", link: "/posts/spirituality/taoism" }
          ]
        }
      ],
      "/reviews/": [
        {
          text: "Resenhas",
          collapsible: true,
          items: [
            { text: "Os Evangelhos Gnósticos", link: "/reviews/gnosis/the-gnostic-gospels" },
            { text: "Poderes ou o livro que diviniza", link: "/reviews/esoterism/powers-or-the-book-that-deifies" },
            { text: "Fragmentos de um ensinamento desconhecido", link: "/reviews/esoterism/in-search-of-the-miraculous" }
          ]
        }
      ],
      "/poetry/": [
        {
          text: "Poesia",
          collapsible: true,
          items: [
            { text: "Poema do coração", link: "/poetry/sufi/rumi" }
          ]
        },
        {
          text: "Autoral",
          collapsible: true,
          items: [
            { text: "Tempo", link: "/poetry/own/tempo" },
            { text: "O Chamado", link: "/poetry/own/the-call" }
          ]
        }
      ]
    }
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX' }
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
      `
    ]
  ]
})
