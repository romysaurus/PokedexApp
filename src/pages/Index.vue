<template>
  <div id="body">
    <h4>Pokédex</h4>

    <div class="search">
      <form @submit.prevent="pressed(search.toString())">
        <q-input
          filled
          rounded
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
      <PokemonListItem
        class="pokemon-list-item"
        v-for="(searchedPokemon, index) in filterPokemon"
        :key="index"
        :pokemon="searchedPokemon"
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

      <div id="load" v-if="load">
        <div class="q-pa-md q-gutter-xs center">
          <div class="q-gutter-md row items-center">
            <q-spinner-cube color="secondary" size="5.5em" />
          </div>
        </div>
      </div>

      <div v-if="!load">
        <q-page class="row items-center justify-evenly">
          <div id="listContainer">
            <PokemonListItem
              class="pokemon-list-item"
              v-for="(pokemonInstance, index) in pokemon"
              :key="index"
              :pokemon="pokemonInstance"
              @click="setPokemon(pokemonInstance)"
            />
          </div>
        </q-page>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePokemon } from 'src/services/pokemon.services';
import CardComponent from '../components/CardComponent.vue';
import PokemonListItem from '../components/PokemonListItem.vue';
import { Pokemon } from 'src/components/models';
import BackComponent from '../components/BackComponent.vue';
import { useTeam } from 'src/services/team.service';
import { useFavorites } from 'src/services/favorites.service';

export default defineComponent({
  components: {
    PokemonListItem,
    CardComponent,
    BackComponent,
  },
  setup() {
    const { pokemon, selectedPokemon, load, loadPokemon } = usePokemon();

    const { loadTeam, team } = useTeam();

    const { loadFavorites, favorites } = useFavorites();

    const router = useRouter();

    const search = ref('');
    const searched: Ref<boolean> = ref(false);

    const filterPokemon: Ref<Array<Pokemon>> = ref([]) as Ref<Array<Pokemon>>;

    onBeforeMount(() => {
      loadPokemon();
    });

    function pressed(searchItem: string) {
      filterPokemon.value.splice(0, filterPokemon.value.length);
      for (let i = 0; i < pokemon.value.length; i++) {
        if (
          pokemon.value[i].name.includes(searchItem) ||
          pokemon.value[i].id.toString().includes(searchItem)
        ) {
          filterPokemon.value.push(pokemon.value[i]);
        }

        if (
          pokemon.value[i].types.findIndex(
            (poke) => poke.type.name === searchItem
          ) !== -1
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

    const amountOfFavorites = favorites.value.length;
    const amountInTeam = team.value.length;

    function goToFavorites() {
      router.push({ path: '/favorieten' }).catch(console.error);
    }

    function goToTeam() {
      router.push({ path: '/team' }).catch(console.error);
    }

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    return {
      load,
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
      loadTeam,
      loadFavorites,
    };
  },
});
</script>

<style>
.q-field--filled.q-field--rounded .q-field__control {
  border-radius: 28px;
}
</style>

<style scoped>
#listContainer {
  width: 100%;
  margin: 0rem 1rem 1rem 1rem;
}

#load {
  display: flex;
  justify-content: center;
}

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

#back {
  color: black;
}

#cardsContainer {
  display: flex;
  justify-content: center;
  margin: 1rem 1rem;
  gap: 0.5rem;
}

.pokemon-list-item {
  cursor: pointer;
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
