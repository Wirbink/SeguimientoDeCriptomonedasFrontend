<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Tus Criptomonedas Favoritas</h1>
            <FavoritesTable />
        </div>
    </DefaultLayout>
</template>

<script setup>
import FavoritesTable from '../components/FavoritesTable.vue';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
</script>