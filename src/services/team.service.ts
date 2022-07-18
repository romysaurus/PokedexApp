import { LocalStorage } from 'quasar';
import { Pokemon } from 'src/components/models';
import { Ref, ref } from 'vue';

const team: Ref<Array<Pokemon>> = ref([]);

export const useTeam = () => {
  function saveTeam() {
    LocalStorage.set('team', JSON.stringify(team.value));
  }

  function addToTeam(pokemon: Pokemon) {
    team.value.push(pokemon);
    saveTeam();
  }

  function deletePokemonFromIndex(index: number) {
    team.value.splice(index, 1);
    saveTeam();
  }

  function loadTeam() {
    const teamFromStorage = LocalStorage.getItem('team') as string;
    if (teamFromStorage) {
      team.value = JSON.parse(teamFromStorage) as Array<Pokemon>;
    }
  }

  return { addToTeam, deletePokemonFromIndex, team, loadTeam };
};
