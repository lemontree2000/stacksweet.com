<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = router.getRoutes()
    .filter(i => i.path.startsWith('/articles') && i.meta.frontmatter.date)

console.log(routes)
const articles = [
    {
        id: '1',
        year: '2016',
        articles: [
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
        ]
    },
    {
        id: '1',
        year: '2015',
        articles: [
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
            { articleTitle: 'Hello Vitejs', articleDate: 'July 2, 2018' },
        ]
    }
]
</script>

<template>
    <section v-for="(record,i) in articles" :key="record.id">
        <section class="text-text-xl my-4" :class="{ 'mt-0': i === 0 }">{{ record.year }}</section>
        <ArticleItem
            v-for="article in record.articles"
            :article="article"
            :key="article.articleDate"
        ></ArticleItem>
    </section>
</template>