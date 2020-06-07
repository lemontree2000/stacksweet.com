import * as React from 'react'
import Head from 'next/head'
import SSNav from '../SSNav/SSNav'
import '../../style/normalize.less'
import '../../style/site.less'
import './SSLayout.less'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div className="ss-layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/iosevka-regular.woff2" as="font" type="font/woff2"/>
      </Head>
      <header>
        <SSNav />
      </header>
      <main>
        <section className="container">
          {children}
        </section>
      </main>
      <footer>
        <section className="copyright">
          <span>
            Copyright © STACKSWEET.COM All Rights Reserved  
          </span>
          &nbsp;|
          <a href="http://www.beian.miit.gov.cn"> 赣ICP备17012642号-1</a>
          &nbsp;| Powered by  
          <a href="https://nextjs.org/"> Nextjs</a>
        </section>
      </footer>
    </div>
  )

export default Layout