<template>
  <div id="body">
    <div id="title">404</div>

    <img
      src="..\..\public\img\confusedPsyduck.jpg"
      alt="Imagine a confused Psyduck"
    />

    <div id="bottomText">Oops. Nothing here...</div>

    <q-btn id="button" unelevated to="/" label="Go Home" no-caps />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>

<style scoped>
#body {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20rem;
  background-image: linear-gradient(
    to left top,
    #e3eec5,
    #dae5ab,
    #d2db91,
    #ccd176,
    #c7c75a
  );
}

#title {
  font-size: 9rem;
  color: rgb(143, 105, 8);
}

img {
  width: 35%;
}

#bottomText {
  margin-top: 1rem;
  font-size: 3rem;
  color: rgb(143, 105, 8);
}

#button {
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: rgb(143, 105, 8);
  color: white;
}

@media only screen and (max-width: 1000px) and (min-width: 769px) {
  #body {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(
      to left top,
      #e3eec5,
      #dae5ab,
      #d2db91,
      #ccd176,
      #c7c75a
    );
  }

  #title {
    font-size: 12rem;
    margin-top: 1.5rem;
    color: rgb(143, 105, 8);
  }

  img {
    width: 90%;
    margin-top: 5rem;
  }

  #bottomText {
    margin-top: 5rem;
    font-size: 4rem;
    color: rgb(143, 105, 8);
  }

  #button {
    margin-top: 2rem;
    margin-bottom: 8rem;
    background-color: rgb(143, 105, 8);
    color: white;
    font-size: 2rem;
    width: 20rem;
  }
}

@media only screen and (max-width: 768px) {
  #body {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(
      to left top,
      #e3eec5,
      #dae5ab,
      #d2db91,
      #ccd176,
      #c7c75a
    );
  }

  #title {
    font-size: 7rem;
    margin-top: 3rem;
    color: rgb(143, 105, 8);
  }

  img {
    width: 90%;
    margin-top: 5rem;
  }

  #bottomText {
    margin-top: 5rem;
    font-size: 2rem;
    color: rgb(143, 105, 8);
  }

  #button {
    margin-top: 4rem;
    margin-bottom: 8rem;
    background-color: rgb(143, 105, 8);
    color: white;
  }
}
</style>
