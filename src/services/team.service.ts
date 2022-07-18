import { Pokemon } from 'src/components/models';
import { Ref, ref } from 'vue';

const team: Ref<Array<Pokemon>> = ref([]);

export const useTeam = () => {
  function addToTeam(pokemon: Pokemon) {
    team.value.push(pokemon);
    localStorage.setItem('teamArray', JSON.stringify(team.value));
  }

  return { addToTeam };
};
