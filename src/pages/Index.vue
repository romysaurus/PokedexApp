<template>
  <div id="body">
    <h4>Pokédex</h4>

    <div class="search">
      <form @submit.prevent="pressed()">
        <q-input
          filled
          v-model="search"
          type="search"
          placeholder="Pokemon zoeken"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </form>
    </div>

    <div id="cardsContainer">
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
import { Pokemon } from 'src/components/models';

export default defineComponent({
  components: {
    PokemonListComponent,
    CardComponent,
  },
  setup() {
    const { pokemon, selectedPokemon, favoriteArray } = usePokemon();

    const router = useRouter();

    // ATTEMPT AT FUNCTION TO FILTER POKEMON AND PLACE IN ARRAY TO BE DISPLAYED AFTER SEARCH
    //  COMPARISON PART WORKS, ERROR ON .PUSH

    /*
    const filterPokemon: Ref<Array<Pokemon>> = ref() as Ref<Array<Pokemon>>;

    function filterItems(query: string) {
      for (let i = 0; i < pokemon.value.length; i++) {
        if (pokemon.value[i].name.includes(query.toLowerCase())) {
          console.log(pokemon.value[i]);
          //filterPokemon.value.push(test.value);
        } else {
          window.alert('nothing found!');
        }
      }
    }

    */

    const search = ref('');

    // ALTERNATE SEARCH, WORKS ONLY ON NUMBER AND REROUTES DIRECTLY TO DETAILS PAGE

    function pressed() {
      if (+search.value <= 0 || +search.value > 151) {
        window.alert(
          'There are only 151 Pokémon. Enter a number between 1 and 151 (151 included)'
        );
      } else {
        router.push({ path: `/${+search.value}` }).catch(console.error);
      }
    }

    const boxShadow = 'inset 0 0 0 1000px rgb(122 59 225 / 93%)';

    const favorites = favoriteArray.value;

    const favoritesNumber = favorites.length;

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    function goToFavorites() {
      router.push({ path: '/favorieten' }).catch(console.error);
    }

    return {
      pokemon,
      boxShadow,
      setPokemon,
      goToFavorites,
      selectedPokemon,
      favoriteArray,
      favoritesNumber,
      search,
      pressed,
    };
  },
});
</script>

<style scoped>
#body {
  background-color: rgb(241, 239, 239);
  margin-top: -3rem;
  padding-top: 4rem;
  margin-right: -0.1rem;
}

h4 {
  font-weight: 600;
  align-content: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.search {
  margin: 1rem;
}

#cardsContainer {
  display: flex;
  justify-content: center;
  margin: 1rem 1rem;
}

@media only screen and (min-width: 768px) {
  #body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #card {
    width: 14rem;
    background-position-x: 119%;
  }
}
</style>
