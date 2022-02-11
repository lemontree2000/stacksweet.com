import dayjs from 'dayjs'
import { RouteRecordNormalized } from 'vue-router'

export const isDark = useDark()

export function formatDate(d: string | Date) {
    const date = dayjs(d)
    if (date.year() === dayjs().year())
        return date.format('MMM D')
    return date.format('MMM D, YYYY')
}


export function formatArticles(routes: RouteRecordNormalized[]) {
    const articlesMeta = routes.reduce((acc: any, current) => {
        const { frontmatter } = current.meta;
        const articleYear = new Date(frontmatter.date).getFullYear();
        if (!acc[articleYear]) {
            acc[articleYear] = []
        }
        acc[articleYear].push({ ...frontmatter, path: current.path })
        return acc
    }, {})
    return Object.keys(articlesMeta)
        .sort((a, b): number => Number(b) - Number(a))
        .map(v => ({ year: v, articles: articlesMeta[v] }))
}