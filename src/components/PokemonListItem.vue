<template>
  <div class="listItem">
    <div class="pokemon-info">
      <img :src="`${pokemon.sprites.front_default}`" alt="Pokémon" />
      <div class="pokemon-identifiers">
        <div class="name">
          {{ pokemon.name }}
        </div>
        <div class="id">Nr. {{ pokemon.id }}</div>
      </div>
    </div>
    <div class="type-arrow-wrapper">
      <div class="pokemon-types">
        <div
          v-for="(type, index) in pokemon.types"
          :key="index"
          class="type"
          :class="
            possibleTypes.includes(type.type.name) ? type.type.name : 'normal'
          "
        >
          {{ type.type.name }}
        </div>
      </div>
      <div>&#10095;</div>
    </div>
  </div>
</template>

<script lang="ts">
import { usePokemon } from 'src/services/pokemon.services';
import { defineComponent, PropType } from 'vue';
import { Pokemon } from './models';

export default defineComponent({
  name: 'PokemonListItem',
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },

  setup() {
    const { possibleTypes } = usePokemon();

    return { possibleTypes };
  },
});
</script>

<style lang="scss" scoped>
.listItem {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 0.75rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pokemon-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pokemon-identifiers {
  width: 5rem;
}

.name {
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
}

.id {
  color: rgba(0, 0, 0, 0.411);
}

.pokemon-types {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.type-arrow-wrapper {
  display: flex;
  margin-right: 1rem;
  gap: 1rem;
  align-items: center;
}
.type {
  width: 4rem;
  padding: 0;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  height: 1.5rem;
}
</style>
