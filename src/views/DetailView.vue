<template>
    <DefaultLayout>
        <div class="p-4" v-if="cryptocurrency">
            <div class="flex items-center space-x-4 mb-4">
                <h1 class="text-2xl font-bold">{{ cryptocurrency.name }} Details</h1>
            </div>
            <div>
                <p><strong>Symbol:</strong> {{ cryptocurrency.symbol.toUpperCase() }}</p>
                <p><strong>Current Price (USD):</strong> ${{ cryptocurrency.market_data.current_price.usd.toLocaleString() }}</p>
                <p><strong>Market Cap (USD):</strong> ${{ cryptocurrency.market_data.market_cap.usd.toLocaleString() }}</p>
                <p><strong>Market Cap FDV Ratio:</strong> {{ cryptocurrency.market_data.market_cap_fdv_ratio }}</p>
                <p><strong>Total Volume (USD):</strong> ${{ cryptocurrency.market_data.total_volume.usd.toLocaleString() }}</p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_24h < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_24h >= 0 }">
                    <strong>24h Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_24h.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_7d < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_7d >= 0 }">
                    <strong>7d Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_7d.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_14d < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_14d >= 0 }">
                    <strong>14d Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_14d.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_30d < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_30d >= 0 }">
                    <strong>30d Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_30d.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_60d < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_60d >= 0 }">
                    <strong>60d Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_60d.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_200d < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_200d >= 0 }">
                    <strong>200d Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_200d.toFixed(2) }}%
                </p>
                <p :class="{ 'text-red-500': cryptocurrency.market_data.price_change_percentage_1y < 0, 'text-green-500': cryptocurrency.market_data.price_change_percentage_1y >= 0 }">
                    <strong>1y Price Change:</strong> {{ cryptocurrency.market_data.price_change_percentage_1y.toFixed(2) }}%
                </p>
                <p><strong>Last Updated:</strong> {{ new Date(cryptocurrency.market_data.last_updated).toLocaleString() }}</p>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import CryptocurrencyService from '../services/CryptocurrencyService';
import DefaultLayout from '../components/layout/DefaultLayout.vue';

const cryptocurrency = ref(null);
const route = useRoute();

const fetchCryptocurrencyDetail = async () => {
    const { id } = route.params;
    const response = await CryptocurrencyService.fetchCryptocurrencyDetail(id);
    cryptocurrency.value = response;
};

onBeforeMount(() => {
    fetchCryptocurrencyDetail();
});
</script>

<style scoped></style>
