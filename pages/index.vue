<script setup>
 definePageMeta({
    layout: 'default',
 })

const articles=ref([1,2,3,4,5])
const config = useRuntimeConfig()
// console.log('config :', config.API_URL)
 const { data:serverData } = await useFetch('/api/posts')

 const { data } = await useFetch(config.public.API_URL+'/posts')
 console.log('config :', config.privateKey)
</script>
<template>
    <div>
        <div>
            key : {{ serverData }}
        </div>
        <div>
            <h1>LIST OF ARTICLES</h1>
        </div>
        <br>
        <div v-for="article in data?.data" :key="article.id">
            <h3>Article - <a href="">{{ article?.title }}</a></h3>
            <div v-html="article?.post_content"></div>
            <!-- <p>{{  }}</p> -->
            <NuxtLink to="/about">Learn more</NuxtLink>
        </div>
        <br>
    </div>
</template>