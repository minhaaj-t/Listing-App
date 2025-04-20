<script setup>
 definePageMeta({
    layout: 'default',
 })

 const articles=ref([1,2,3,4,5])
</script>
<template>
    <div>
        <div>
            <h1>LIST OF ARTICLES</h1>
        </div>
        <br>
        <div v-for="(index,article) in articles" :key="index">
            <h3>Article - {{ article }}</h3>
            <p>This is the home page of the listing app.</p>
            <p>Explore our features and functionalities.</p>
            <NuxtLink to="/about">Learn more about us</NuxtLink>
        </div>
        <br>
    </div>
</template>