<template>
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800">
            <thead>
                <tr>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase dark:text-gray-400">#
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Coin
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                        Simbolo</th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                        Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(coin, index) in favorites" :key="coin.id" class="border-b dark:border-gray-700">
                    <td class="py-2 px-4">{{ index + 1 }}</td>
                    <td class="py-2 px-4 flex items-center space-x-3">
                        <img :src="coin.image" :alt="coin.name" class="h-8 w-8 rounded-full">
                        <span>{{ coin.name }}</span>
                    </td>
                    <td class="py-2 px-4 uppercase">{{ coin.symbol }}</td>
                    <td class="py-2 px-4">
                        <button
                          @click="toggleFavorite(coin)"
                          :class="isFavorite(coin.name) ? 'bg-red-500' : 'bg-blue-500'"
                          class="text-white font-medium rounded-lg text-sm px-4 py-2 hover:opacity-75">
                          {{ isFavorite(coin.name) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos' }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import FavoriteService from '../services/FavoriteService';

const favorites = ref([]);
const store = useStore();

const fetchFavorites = async () => {
    favorites.value = await FavoriteService.fetchFavorites();
};

const isFavorite = (coinName) => {
    return store.getters.isFavorite(coinName);
};

const toggleFavorite = (coin) => {
    store.dispatch('toggleFavorite', coin);
};

onMounted(() => {
    fetchFavorites();
});
</script>
