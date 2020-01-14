import * as React from 'react'
import Layout from '../../components/SSLayout/SSLayout'
import { NextPage } from 'next'
import './index.less'
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | stacksweet.com">
      <section className="index-page">
        <div className="avatar">
          <Link href="/articles">
            <img src="/images/avatar.jpg" alt="avatar" />
          </Link>
        </div>
        <div className="name">Lemontree2000</div>
        <p className="description">A Front-end Developer now, striving to become a full stack developer.</p>
        <div className="links">
          <Link href="/articles">
            <a className="link-item" title="articles">
              <span className="iconfont icon-read"></span>
            </a>
          </Link>
          <a href="https://twitter.com/lemontree2017" className="link-item" title="twitter">
            <span className="iconfont icon-twitter"></span>
          </a>
          <a href="https://github.com/lemontree2000" className="link-item" title="github">
            <span className="iconfont icon-github-fill"></span>
          </a>
          <a href="" className="link-item"></a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage