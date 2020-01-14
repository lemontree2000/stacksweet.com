import { NextApiRequest, NextApiResponse } from 'next'
import { sampleArticleData } from '../../../utils/sample-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleArticleData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleArticleData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}