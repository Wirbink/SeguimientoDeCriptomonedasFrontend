import ApiService from './ApiService';

const CryptocurrencyService = {
  async fetchCryptocurrencies() {
    try {
      const response = await ApiService.get('/CryptocurrenciesApi');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cryptocurrencies:', error);
      return [];
    }
  },
  async fetchCryptocurrencyDetail(id) {
    try {
      const response = await ApiService.get(`/CryptocurrenciesApi/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cryptocurrencies:', error);
    }
  }
};

export default CryptocurrencyService;
