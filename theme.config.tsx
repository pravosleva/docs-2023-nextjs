import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>pravosleva.pro</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: 'https://pravosleva.pro/express-helper/chat/#/?room=pravosleva.pro',
    icon: () => {
      return (
        <b>CHAT</b>
      )
    },
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
