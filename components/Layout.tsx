import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <div className="logo">
            <h1><img width="50" src="/logo.png" alt="" /></h1>
            <h2>StackSweet</h2>
          </div>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/articles">
            <a>Article</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span> Copyright © 2017-2019 stacksweet.com All Rights Reserved  <a href="http://www.beian.miit.gov.cn">赣ICP备17012642号-1</a></span>
      </footer>
      <style>
        {`
          nav {
            display: flex;
            align-items:center;
          }
          .logo {
            display: flex;
            align-items:center;
            flex: 1;
          }
          .logo h1, .logo h2 {
            margin: 0;
          }
          nav a {
            margin: 0 10px;
          }
        `}
      </style>
    </div>
  )

export default Layout