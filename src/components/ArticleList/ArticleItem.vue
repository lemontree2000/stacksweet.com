<script lang="ts" setup>
import { formatDate } from '/~/utils'
const { article } = defineProps<{
    article: {
        date: string,
        title: String
        path: String
    }
}>()

</script>

<template>
    <router-link :to="article.path" class="flex justify-between my-1 ml-8 item no-underline">
        <span>{{ article.title }}</span>
        <span class="opacity-50">{{ formatDate(article.date) }}</span>
    </router-link>
</template>