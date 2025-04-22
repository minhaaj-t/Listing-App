<script setup>
 definePageMeta({
    layout: 'default',
 })

 const articles=ref([1,2,3,4,5])
const config = useRuntimeConfig()
// console.log('config :', config.API_URL)


 const { data } = await useFetch(config.public.API_URL+'/posts')
 console.log('config :', config)
</script>
<template>
    <div>
        <div>
            <h1>LIST OF ARTICLES</h1>
        </div>
        <br>
        <div v-for="(index,article) in data" :key="index">
            <h3>Article - {{ article?.title }}</h3>
            <p>{{ article?.post_content }}</p>
            <NuxtLink to="/about">Learn more about us</NuxtLink>
        </div>
        <br>
    </div>
</template>