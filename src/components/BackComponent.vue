<template>
  <div id="back">
    <div id="backSymbol">&#10092;</div>
    <div id="backText">Terug</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackComponent',
});
</script>

<style lang="scss" scoped>
#back {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  color: white;
}
#backSymbol {
  font-size: 1.5rem;
}

#backText {
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}
</style>
