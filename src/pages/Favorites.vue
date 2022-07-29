<template>
  <div id="body">
    <BackComponent @click="goBack()" />

    <h4 id="title">Favorieten</h4>

    <div id="listContainer">
      <PokemonListItem
        v-for="(favorite, index) in favorites"
        :key="index"
        :pokemon="favorite"
        @click="setPokemon(favorite)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemon } from 'src/services/pokemon.services';
import PokemonListItem from '../components/PokemonListItem.vue';
import BackComponent from '../components/BackComponent.vue';
import { useRouter } from 'vue-router';
import { Pokemon } from 'src/components/models';
import { useFavorites } from 'src/services/favorites.service';

export default defineComponent({
  components: {
    PokemonListItem,
    BackComponent,
  },
  setup() {
    const { selectedPokemon } = usePokemon();
    const router = useRouter();
    const { favorites } = useFavorites();

    function goBack() {
      router.go(-1);
    }

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    return { favorites, goBack, setPokemon };
  },
});
</script>

<style scoped>
#body {
  background-image: linear-gradient(
    to right,
    #339caf,
    #2cafc0,
    #23c1cf,
    #1ad5de,
    #12e8eb
  );
  margin-top: -3rem;
  padding-bottom: 41rem;
  padding-top: 4rem;
}

#title {
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-weight: 600;
  align-content: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: white;
}

#pokemonTypes {
  margin-left: 2rem;
}

@media only screen and (min-width: 768px) {
  #title,
  #listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #listContainer {
    margin-left: 33%;
    width: 30rem;
  }
}
</style>
