import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../../components/SSLayout/SSLayout'
import { User } from '../../interfaces'
import { sampleFetchWrapper } from '../../utils/sample-api'
import SSArticlesList, { yearsArticele, Props } from '../../components/SSArticlesList/SSArticlesList'

const WithInitialProps: NextPage<Props> = ({ articleList }) => (
  <Layout title="Users List | 蜜栈网">
    <SSArticlesList articleList={articleList} />
  </Layout>
)

WithInitialProps.getInitialProps = async () => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const articleList: yearsArticele[] = await sampleFetchWrapper(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.stacksweet.com'}/api/users`
  )
  return { articleList }
}

export default WithInitialProps