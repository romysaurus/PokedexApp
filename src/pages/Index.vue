<template>
  <div id="body">
    <h4>Pokédex</h4>
    <q-input
      rounded
      class="searchBar"
      v-model="search"
      filled
      type="search"
      placeholder="Pokemon zoeken"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    {{ search }}
    {{ searchy }}

    <div id="cardsContainer">
      <CardComponent
        :title="'Mijn team'"
        :info="'x pokemons'"
        :style="{ 'box-shadow': boxShadow }"
      />
      <CardComponent
        :title="'Favorieten'"
        :info="favoritesNumber + ' pokemons'"
        @click="goToFavorites()"
      />
    </div>

    <q-page class="row items-center justify-evenly">
      <div id="listContainer">
        <PokemonListComponent
          v-for="(pokemonInstance, index) in pokemon"
          :key="index"
          :image="pokemonInstance.sprites.front_default"
          :name="pokemonInstance.name"
          :id="pokemonInstance.id"
          :firstType="pokemonInstance.types[0].type.name"
          @click="setPokemon(pokemonInstance)"
        />
      </div>
    </q-page>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePokemon } from 'src/services/pokemon.services';
import CardComponent from '../components/CardComponent.vue';
import PokemonListComponent from '../components/PokemonListComponent.vue';
import { matSearch } from '@quasar/extras/material-icons';
import { Pokemon } from 'src/components/models';

export default defineComponent({
  components: {
    PokemonListComponent,
    CardComponent,
  },
  setup() {
    const { pokemon, selectedPokemon, favoriteArray } = usePokemon();

    const router = useRouter();

    // const pokemonSorted = pokemon.value;

    const boxShadow = 'inset 0 0 0 1000px rgb(122 59 225 / 93%)';

    const searchIcon = matSearch;

    const favorites = favoriteArray.value;

    const favoritesNumber = favorites.length;

    const search = ref('');
    const searchx = search.value;
    const searchy = ref(searchx.toLowerCase());

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    function goToFavorites() {
      router.push({ path: '/favorieten' }).catch(console.error);
    }
    /*
    const pokemonTypes: Ref<[]> = pokemon.value[1].types;

    for (let i = 0; i < pokemonTypes.value.length; i++) {
      console.log(pokemonTypes.value[i].type);
      i++;
    }

    */

    return {
      pokemon,
      boxShadow,
      searchIcon,
      setPokemon,
      goToFavorites,
      selectedPokemon,
      favoriteArray,
      favoritesNumber,
      search,
      searchy,
    };
  },
});
</script>

<style scoped>
#body {
  background-color: rgb(241, 239, 239);
  margin-top: -3rem;
  padding-top: 4rem;
}

h4 {
  font-weight: 600;
  align-content: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

#cardsContainer {
  display: flex;
  margin: 1rem 1rem;
}

.searchBar {
  margin: 1rem;
}

@media only screen and (min-width: 768px) {
  #body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
