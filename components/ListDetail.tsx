import * as React from 'react'

import { User } from '../interfaces'
import { articleItem } from './SSArticlesList/SSArticlesList'

type ListDetailProps = {
  item: articleItem
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: user,
}) => (
  <div>
    <h1>Detail for {user.articleTitle}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail