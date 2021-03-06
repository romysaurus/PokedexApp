import axios from 'axios';
import { Pokemon } from 'src/components/models';
import { ref, Ref } from 'vue';

const pokemonService = () => {
  const pokemon: Ref<Array<Pokemon>> = ref([]);

  axios
    .get<Array<Pokemon>>(
      'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
    )
    .then((response) => {
      pokemon.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  const favoriteArray: Ref<Array<Pokemon>> = ref([]);

  const selectedPokemon: Ref<Pokemon> = ref() as Ref<Pokemon>;

  const possibleTypes = [
    'fire',
    'normal',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'fairy',
  ];

  return { pokemon, selectedPokemon, favoriteArray, possibleTypes };
};

const singleton = pokemonService();
const usePokemon = () => singleton;

export { usePokemon };
