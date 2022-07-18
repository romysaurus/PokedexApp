import axios from 'axios';
import { Pokemon } from 'src/components/models';
import { ref, Ref } from 'vue';

const pokemonService = () => {
  const pokemon: Ref<Array<Pokemon>> = ref([]);
  const load = ref(true);

  function loadPokemon(): Promise<Array<Pokemon> | void> {
    return axios
      .get<Array<Pokemon>>(
        'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
      )
      .then((response) => {
        pokemon.value = response.data;
      })
      .catch(console.error)
      .finally(() => load.value = false);
  }

  const favoriteArray: Ref<Array<Pokemon>> = ref([]);
  const teamArray: Ref<Array<Pokemon>> = ref([]);

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

  return {
    pokemon,
    selectedPokemon,
    favoriteArray,
    possibleTypes,
    teamArray,
    load,
    loadPokemon
  };
};

const singleton = pokemonService();
const usePokemon = () => singleton;

export { usePokemon };
