import axios from 'axios';
import { ref } from 'vue';

const pokemonService = () => {
  const pokemon = ref();

  axios
    .get('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
    .then((response: { data: [] }) => {
      pokemon.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return { pokemon };
};

const singleton = pokemonService();
const usePokemon = () => singleton;

export { usePokemon };
