<template>
  <div class="listItem">
    <img :src="`${image}`" alt="Pokémon" />
    <div id="pokemonIdentifiers">
      <div id="name">
        {{ name.charAt(0).toUpperCase() + name.slice(1) }}
      </div>
      <div id="id">Nr. {{ id }}</div>
    </div>
    <div id="pokemonTypes">
      <div
        id="type"
        :class="possibleTypes.includes(firstType) ? firstType : 'normal'"
      >
        {{ firstType }}
      </div>

      {{ secondType }}
    </div>
    <div id="pointSymbol">&#10095;</div>
  </div>
</template>

<script lang="ts">
import { usePokemon } from 'src/services/pokemon.services';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonListComponent',
  props: {
    image: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    firstType: {
      type: String,
      required: true,
    },

    secondType: {
      type: String,
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
  margin: 1rem 1rem 1rem 1.25rem;
  background-color: white;
  border-radius: 0.75rem;
  width: 90%;
}

#pokemonIdentifiers {
  padding-top: 1.5rem;
  width: 5rem;
}

#name {
  font-weight: 600;
  font-size: 1rem;
}

#id {
  color: rgba(0, 0, 0, 0.411);
}

#pokemonTypes {
  padding-top: 1.5rem;
  padding-left: 5rem;
  margin-left: 3rem;
  width: 8rem;
}

#type {
  width: 4rem;
  padding: 0;
  margin-left: -2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  color: white;
}

#pointSymbol {
  padding: 1.5rem 0.75rem 0rem 0.5rem;
}
</style>
