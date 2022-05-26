<template>
  <div id="body">
    <BackComponent @click="goBack()" />

    <h4 id="title">Favorieten</h4>

    <div id="listContainer">
      <PokemonListComponent
        v-for="(team, index) in teamArray"
        :key="index"
        :image="team.sprites.front_default"
        :name="team.name"
        :id="team.id"
        :firstType="team.types[0].type.name"
        @click="setPokemon(team)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemon } from 'src/services/pokemon.services';
import PokemonListComponent from '../components/PokemonListComponent.vue';
import BackComponent from '../components/BackComponent.vue';
import { useRouter } from 'vue-router';
import { Pokemon } from 'src/components/models';

export default defineComponent({
  components: {
    PokemonListComponent,
    BackComponent,
  },
  setup() {
    const { teamArray, selectedPokemon } = usePokemon();
    const router = useRouter();

    function goBack() {
      router.go(-1);
    }

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    return { teamArray, goBack, setPokemon };
  },
});
</script>

<style scoped>
#body {
  background-image: linear-gradient(
    to right bottom,
    #7731ae,
    #862fbe,
    #972acd,
    #a922dc,
    #bb12eb
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
