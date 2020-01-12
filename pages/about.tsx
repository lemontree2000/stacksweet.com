import * as React from 'react'
import Link from 'next/link'
import SSLayout from '../components/SSLayout/SSLayout'

const AboutPage: React.FunctionComponent = () => (
  <SSLayout title="About | 蜜栈网">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </SSLayout>
)

export default AboutPage