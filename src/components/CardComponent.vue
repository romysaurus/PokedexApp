<template>
  <div id="card">
    <div id="cardText">
      <div id="cardTitle">{{ title }}</div>
      <div id="cardInfo">{{ info }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true,
    },

    info: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
#card {
  width: 11rem;
  height: 6rem;
  background-image: url(C:\Users\romys\Projects\PokedexApp\public\img\png-transparent-game-pokeball-pokemon-pokemon-go-pokemongo-pokestop-pokemon-go-addict-icon.png);
  background-position-x: 149%;
  background-position-y: 38%;
  background-repeat: no-repeat;
  background-size: 7rem 6.5rem;
  box-shadow: inset 0 0 0 1000px rgb(81 218 223 / 93%);
  border-radius: 1rem;
  margin: 0rem 0.25rem;
  cursor: pointer;
}

#cardText {
  position: relative;
  bottom: -39px;
  left: 18px;
}

#cardTitle {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

#cardInfo {
  color: rgba(255, 255, 255, 0.664);
  margin-top: -0.2rem;
}
</style>
