import { User } from '../interfaces'
import { yearsArticele } from '../components/SSArticlesList/SSArticlesList'

/** Dummy user data. */
export const sampleArticleData: yearsArticele[] = [
  {
    year: 2018,
    articles: [
      {
        id: 0, articleTitle: 'Hello Nextjs',
        articleDate: 'July 2, 2018'
      },
      {
        id: 1, articleTitle: 'Hello TypeScrpt',
        articleDate: 'July 2, 2018'
      }
    ]
  },
  {
    year: 2019,
    articles: [
      {
        id: 0, articleTitle: 'Hello Vuejs',
        articleDate: 'July 3, 2018'
      },
      {
        id: 1, articleTitle: 'Hello React',
        articleDate: 'July 3, 2018'
      }
    ]
  }
]