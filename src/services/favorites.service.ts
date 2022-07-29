import { LocalStorage } from 'quasar';
import { Pokemon } from 'src/components/models';
import { Ref, ref } from 'vue';

const favorites: Ref<Array<Pokemon>> = ref([]);

export const useFavorites = () => {
  function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  function addToFavorites(pokemon: Pokemon) {
    favorites.value.push(pokemon);
    saveFavorites();
  }

  function deleteFavoritePokemonFromIndex(index: number) {
    favorites.value.splice(index, 1);
    saveFavorites();
  }

  function loadFavorites() {
    const favoritesFromStorage = LocalStorage.getItem('favorites') as string;
    if (favoritesFromStorage) {
      favorites.value = JSON.parse(favoritesFromStorage) as Array<Pokemon>;
    }
  }

  return {
    favorites,
    saveFavorites,
    addToFavorites,
    deleteFavoritePokemonFromIndex,
    loadFavorites,
  };
};
