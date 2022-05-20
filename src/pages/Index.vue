<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemon } from 'src/services/pokemon.services';

export default defineComponent({
  setup() {
    const { pokemon } = usePokemon();

    return { pokemon };
  },
});
</script>
