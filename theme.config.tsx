import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Docs exp with Next.js</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: 'http://pravosleva.ru/express-helper/chat/#/?room=ui-test',
    icon: () => {
      return (
        <b>CHAT</b>
      )
    },
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
