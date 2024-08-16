<template>
    <router-view />
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onBeforeMount(async () => {
    await store.dispatch('fetchFavorites');
});
</script>