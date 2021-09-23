<script lang="ts" setup>
const { article } = defineProps<{
    article: {
        articleDate: string,
        articleTitle: String
    }
}>()

</script>

<template>
    <router-link to="/abc" class="flex justify-between my-1 ml-8 item no-underline">
        <span>{{ article.articleTitle }}</span>
        <span class="opacity-50">{{ article.articleDate }}</span>
    </router-link>
</template>