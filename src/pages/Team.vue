<template>
  <div id="body">
    <BackComponent @click="goBack()" />

    <h4 id="title">Mijn team</h4>

    <div id="listContainer">
      <PokemonListItem
        v-for="(teamMember, index) in team"
        :key="index"
        :pokemon="teamMember"
        @click="setPokemon(teamMember)"
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
import { useTeam } from 'src/services/team.service';

export default defineComponent({
  components: {
    PokemonListItem,
    BackComponent,
  },
  setup() {
    const { selectedPokemon } = usePokemon();
    const router = useRouter();
    const { team } = useTeam();

    function goBack() {
      router.go(-1);
    }

    function setPokemon(selectPokemon: Pokemon) {
      selectedPokemon.value = selectPokemon;
      router.push({ path: `/${selectPokemon.id}` }).catch(console.error);
    }

    return { team, goBack, setPokemon };
  },
});
</script>

<style scoped>
#body {
  background-image: linear-gradient(
    to right,
    #8239b2,
    #8846b2,
    #8d52b2,
    #925eb1,
    #9769b1
  );
  margin-top: -3rem;
  padding-bottom: 41rem;
  padding-top: 4rem;
}

#title {
  color: white;
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
