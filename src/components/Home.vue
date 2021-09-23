<script lang="ts" setup>

</script>

<template>
    <section class="text-center home">
        <div class="flex justify-center avatar mb-5">
            <router-link to="/articles">
                <img
                    src="/images/avatar.jpg"
                    class="w-32 h-32 cursor-pointer rounded-1"
                    alt="avatar"
                />
            </router-link>
        </div>
        <div class="text-3xl name">Lemontree2000</div>
        <p
            class="description text-sm"
        >A Front-end Developer now, striving to become a full stack developer.</p>
        <div class="flex gap-3 text-lg py-3 links justify-center">
            <router-link class="link-item" to="/articles" title="articles">
                <tabler:book />
            </router-link>
            <a href="//twitter.com/lemontree2017" target="_blank" class="link-item" title="twitter">
                <tabler:brand-twitter />
            </a>
            <a href="//github.com/lemontree2000" target="_blank" class="link-item" title="github">
                <tabler:brand-github />
            </a>
            <a href class="link-item"></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.home {
    transform: translateY(15vh);
    .avatar {
        a {
            border: none;
            img {
                margin: 0;
                box-shadow: 0 0 0 5px rgb(0 0 0 / 5%);
            }
        }
    }
    .name {
        color: var(--fg-deeper);
    }
    .description {
        color: var(--fg-deep);
    }
    .links {
        a {
            border-bottom: 0;
            color: var(--fg);
        }
    }
}
</style>