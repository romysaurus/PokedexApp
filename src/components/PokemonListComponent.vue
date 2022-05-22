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
        :class="
          'fire' ||
          'normal' ||
          'water' ||
          'electric' ||
          'grass' ||
          'ice' ||
          'fighting' ||
          'poison' ||
          'ground' ||
          'flying' ||
          'Psychic' ||
          'bug' ||
          'rock' ||
          'ghost' ||
          'dragon' ||
          'fairy'
            ? firstType
            : 'normal'
        "
      >
        {{ firstType }}
      </div>
      <!--  <q-badge
        class="answer"
        :label="`${secondType.charAt(0).toUpperCase() + firstType.slice(1)}`"
      /> -->

      {{ secondType }}
    </div>
    <div id="pointSymbol">&#10095;</div>
  </div>
</template>

<script lang="ts">
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
});
</script>

<style lang="scss" scoped>
.listItem {
  display: flex;
  flex-direction: row;
  margin: 1rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 4px 3px 14px 1px rgba(255, 255, 255, 0.932);
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
  padding-top: 1.5rem;
  padding-left: 0.5rem;
}
</style>
