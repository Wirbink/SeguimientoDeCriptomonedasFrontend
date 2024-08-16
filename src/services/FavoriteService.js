import ApiService from './ApiService'

const FavoriteService = {
  async fetchFavorites() {
    try {
      const response = await ApiService.get('/Favorites');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  },
  async removeFavorite(id) {
    try {
      const response = await ApiService.delete(`/Favorites/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error delete favorites:', error);
      return;
    }
  },
  async addFavorite({name, symbol, image}) {
    const coin = {name, symbol, image}
    try {
      const response = await ApiService.post('/Favorites', coin);
      return response.data.data;
    } catch(error) {
      console.error('Error creating favorite:', error);
    }
  }
};

export default FavoriteService;
