import * as React from 'react'
import { NextPageContext } from 'next'

import { User } from '../../interfaces'
import Layout from '../../components/SSLayout/SSLayout'
import ListDetail from '../../components/ListDetail'
import { sampleFetchWrapper } from '../../utils/sample-api'
import { articleItem } from '../../components/SSArticlesList/SSArticlesList'

type Props = {
    item?: articleItem
    errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
    static getInitialProps = async ({ query }: NextPageContext) => {
        try {
            const { id } = query
            const item = await sampleFetchWrapper(
                `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.stacksweet.com'}/api/users/${Array.isArray(id) ? id[0] : id}`
            )
            return { item }
        } catch (err) {
            return { errors: err.message }
        }
    }

    render() {
        const { item, errors } = this.props

        if (errors) {
            return (
                <Layout title={`Error | 蜜栈网`}>
                    <p>
                        <span style={{ color: 'red' }}>Error:</span> {errors}
                    </p>
                </Layout>
            )
        }

        return (
            <Layout
                title={`${
                    item ? item.articleTitle : 'User Detail'
                    } | Next.js + TypeScript Example`}
            >
                {item && <ListDetail item={item} />}
            </Layout>
        )
    }
}

export default InitialPropsDetail