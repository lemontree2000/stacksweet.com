import * as React from 'react'
import Link from 'next/link'
import './SSArticlesList.less'

export type Props = {
    articleList: yearsArticele[]
}

export type yearsArticele = {
    year: number,
    articles: articleItem[]
}

export type articleItem = {
    id: number,
    articleTitle: string,
    articleDate: string
}

const SSArticleItem: React.FunctionComponent<articleItem> = ({ articleTitle, articleDate, id }) => (
    <article className="article-item">
        <Link href={`/articles/${id}`}>
            <span className="article-title">{articleTitle}</span>
        </Link>
        <span className="article-date">{articleDate}</span>
    </article>
)

const SSArticlesList: React.FunctionComponent<Props> = ({ articleList }) => (
    <section className="articles">
        {
            articleList && articleList.map((yearsArticele) => (
                <React.Fragment key={yearsArticele.year}>
                    <h3 className="year">{yearsArticele.year}</h3>
                    {yearsArticele.articles.map((article) => (
                        <SSArticleItem {...article} key={article.id}/>
                    ))}
                </React.Fragment>
            ))
        }
    </section>
)

export default SSArticlesList