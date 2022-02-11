<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { formatArticles } from '/~/utils'
const router = useRouter()
const routes = router.getRoutes()
    .filter(i => i.path.startsWith('/articles') && i.meta.frontmatter.date)
    
const articles = formatArticles(routes)

</script>

<template>
    <section v-for="(record, i) in articles" :key="record.year">
        <section class="text-text-xl my-4" :class="{ 'mt-0': i === 0 }">{{ record.year }}</section>
        <ArticleItem
            v-for="article in record.articles"
            :article="article"
            :key="article.articleDate"
        ></ArticleItem>
    </section>
</template>