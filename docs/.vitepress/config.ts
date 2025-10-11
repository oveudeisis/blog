import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: "O Véu de Isis",
  description: "Blog pessoal",
  themeConfig: {
    logo: '/image/logo.png',
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
            {
              text: "Gnosticismo",
              items: [
                { text: "Cristianismo primitivo", link: "/posts/gnosis/gnosticism/cristianismo-primitivo" },
                { text: "Quem foram os gnósticos", link: "/posts/gnosis/gnosticism/quem-foram-os-gnosticos" },
                { text: "Os mistérios do nome interno", link: "/posts/gnosis/gnosticism/os-misterios-do-nome-interno" }
              ]
            },
            {
              text: "O Movimento New Age",
              items: [
                { text: "Gnosis e secularização", link: "/posts/gnosis/new-age/secularizacao" },
                { text: "A Gnosis de Samael", link: "/posts/gnosis/new-age/gnosis-samael" },
              ]
            }
          ]
        },
                {
          text: "Mitologia",
          collapsible: true,
          items: [
            {
              text: "Grega",
              items: [
                { text: "Os Doze Trabalhos de Hércules", link: "/posts/mitologia/grega/hercules" }
              ]
            },
            {
              text: "Romana",
              items: [
                { text: "Ainda sem título", link: "/posts/mitologia/romana/ainda-sem-titulo" }
              ]
            }
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
    },
    footer: {
      copyright: 'Copyright © 2025 Carlos Aguiar'
    },
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
