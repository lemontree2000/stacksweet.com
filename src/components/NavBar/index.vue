<script lang="ts" setup>
</script>

<template>
    <section>
        <header class="max-w-screen-xl mx-auto px-7 py-5">
            <nav class="flex justify-between">
                <div class="logo">
                    <h1>
                        <router-link to="/">
                            <Logo />
                        </router-link>
                    </h1>
                </div>
                <div class="nav-right flex items-center">
                    <router-link class="<sm:hidden" to="/articles">Articles</router-link>
                    <!-- <router-link to="/tags">Tags</router-link> -->
                    <!-- <router-link class="<sm:hidden" to="/about">About</router-link> -->
                    <router-link class="link-item sm:hidden" to="/articles" title="articles">
                        <tabler:book />
                    </router-link>
                    <toggle-theme />
                </div>
            </nav>
        </header>
    </section>
</template>

<style lang="scss" scoped>
.nav-right {
    a {
        @apply px-2;
    }
}
</style>
