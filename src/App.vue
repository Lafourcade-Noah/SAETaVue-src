<script setup>
    import PocketBase from 'pocketbase'
    import Header from './components/header.vue';
    import Footer from './components/footer.vue';
    const pb = new PocketBase("http://127.0.0.1:8090");
</script>

<template>
<Header />

    <RouterView />

    <Footer />
</template>

<style scoped>
</style>
