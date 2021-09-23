<script lang="ts" setup>
import { isDark } from '/~/utils'
</script>

<template>
    <template v-if="!isDark">
        <img class="text-logo <sm:hidden" src="/images/logo-text.svg" alt />
        <img class="sm:hidden"  src="/images/logo.svg" alt />
    </template>
    <template v-else>
        <img class="text-logo <sm:hidden" src="/images/logo-text-dark.svg" alt />
        <img class="sm:hidden" src="/images/logo-dark.svg" alt />
    </template>
</template>

<style scoped>
img {
    width: 24px
}
img.text-logo {
    width: 170px;
}
</style>
