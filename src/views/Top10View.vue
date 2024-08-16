<template>
    <DefaultLayout>
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Top 10 Criptomonedas</h1>
            <CryptocurrencyTable />
        </div>
    </DefaultLayout>
</template>

<script setup>
import CryptocurrencyTable from '../components/CryptocurrencyTable.vue';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
</script>

<style scoped></style>