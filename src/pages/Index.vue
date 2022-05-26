<template>
  <div id="body">
    <h4>Pokédex</h4>

    <div class="search">
      <form @submit.prevent="pressed(search.toString())">
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

    <div v-if="searched">
      <BackComponent id="back" @click="goBack()" />
      <PokemonListComponent
        v-for="(searchedPokemon, index) in filterPokemon"
        :key="index"
        :image="searchedPokemon.sprites.front_default"
        :name="searchedPokemon.name"
        :id="searchedPokemon.id"
        :firstType="searchedPokemon.types[0].type.name"
        @click="setPokemon(searchedPokemon)"
      />
    </div>

    <div v-if="!searched">
      <div id="cardsContainer">
        <CardComponent
          :title="'Mijn team'"
          :info="amountInTeam + ' pokemons'"
          :style="{ 'box-shadow': boxShadow }"
          @click="goToTeam()"
        />
        <CardComponent
          :title="'Favorieten'"
          :info="amountOfFavorites + ' pokemons'"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePokemon } from 'src/services/pokemon.services';
import CardComponent from '../components/CardComponent.vue';
import PokemonListComponent from '../components/PokemonListComponent.vue';
import { Pokemon } from 'src/components/models';
import { LocalStorage } from 'quasar';
import BackComponent from '../components/BackComponent.vue';

export default defineComponent({
  components: {
    PokemonListComponent,
    CardComponent,
    BackComponent,
  },
  setup() {
    const { pokemon, selectedPokemon, favoriteArray, teamArray } = usePokemon();

    const router = useRouter();

    if (localStorage.getItem('favoriteArray')) {
      const getLocalStorage: string = LocalStorage.getItem(
        'favoriteArray'
      ) as string;
      const localFavoriteArray: Array<Pokemon> = JSON.parse(
        getLocalStorage
      ) as Array<Pokemon>;

      for (let i = 0; i < localFavoriteArray.length; i++) {
        if (
          JSON.stringify(favoriteArray.value[i]) !==
          JSON.stringify(localFavoriteArray[i])
        ) {
          favoriteArray.value.push(localFavoriteArray[i]);
        }
      }
    }

    if (localStorage.getItem('teamArray')) {
      const getLocal: string = LocalStorage.getItem('teamArray') as string;
      const localTeamArray: Array<Pokemon> = JSON.parse(
        getLocal
      ) as Array<Pokemon>;

      for (let i = 0; i < localTeamArray.length; i++) {
        if (
          JSON.stringify(teamArray.value[i]) !==
          JSON.stringify(localTeamArray[i])
        ) {
          teamArray.value.push(localTeamArray[i]);
        }
      }
    }

    const search = ref('');
    const searched: Ref<boolean> = ref(false);

    const filterPokemon: Ref<Array<Pokemon>> = ref([]) as Ref<Array<Pokemon>>;

    function pressed(searchItem: string) {
      filterPokemon.value.splice(0, filterPokemon.value.length);
      for (let i = 0; i < pokemon.value.length; i++) {
        if (
          pokemon.value[i].name.includes(searchItem) ||
          pokemon.value[i].id.toString().includes(searchItem)
        ) {
          filterPokemon.value.push(pokemon.value[i]);
        }
      }

      if (filterPokemon.value.length === 0 || searchItem === '') {
        window.alert('No Pokémon found');
        searched.value = false;
      } else {
        searched.value = true;
      }
    }

    function goBack() {
      searched.value = false;
      filterPokemon.value.splice(0, filterPokemon.value.length);
    }

    const boxShadow = 'inset 0 0 0 1000px rgb(122 59 225 / 93%)';

    const favorites = favoriteArray.value;
    const team = teamArray.value;

    const amountOfFavorites = favorites.length;
    const amountInTeam = team.length;

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    function goToFavorites() {
      router.push({ path: '/favorieten' }).catch(console.error);
    }

    function goToTeam() {
      router.push({ path: '/team' }).catch(console.error);
    }

    return {
      pokemon,
      boxShadow,
      setPokemon,
      goToFavorites,
      goToTeam,
      selectedPokemon,
      amountOfFavorites,
      amountInTeam,
      search,
      pressed,
      searched,
      filterPokemon,
      goBack,
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
