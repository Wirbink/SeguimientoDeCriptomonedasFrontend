import { createStore } from 'vuex';
import FavoriteService from '@/services/FavoriteService';

const store = createStore({
    state() {
        return {
            favorites: [],
        };
    },
    mutations: {
        setFavorites(state, favorites) {
            state.favorites = favorites;
        },
        addFavorite(state, coin) {
            state.favorites.push(coin);
        },
        removeFavorite(state, coinName) {
            state.favorites = state.favorites.filter(fav => fav.name !== coinName);
        },
    },
    actions: {
        async fetchFavorites({ commit }) {
            try {
                const response = await FavoriteService.fetchFavorites();
                console.log(response)
                commit('setFavorites', response);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        },
        async toggleFavorite({ commit, state }, coin) {
            const favoriteExists = state.favorites.some(fav => fav.name === coin.name);
            if (favoriteExists) {
                const favoriteCoin = state.favorites.find(fav => fav.name === coin.name);

                if (favoriteCoin) {
                    const response = await FavoriteService.removeFavorite(favoriteCoin.id);
                    console.log(response);
                    commit('removeFavorite', coin.name); 
                }
            } else {
                await FavoriteService.addFavorite(coin);
                commit('addFavorite', coin);
            }
        },
    },
    getters: {
        isFavorite: (state) => (coinName) => {
            return state.favorites.some(fav => fav.name === coinName);
        },
    },
});

export default store;
