<template>
  <div
    id="page"
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
        ? pokemonDetails.types[0].type.name
        : 'normal'
    "
  >
    <div id="header">
      <BackComponent id="back" @click="goBack()" />
      <div
        class="material-icons"
        :class="favorite ? 'redHeart' : 'heart'"
        @click="editFavorites(selectedPokemon)"
      >
        favorite_border
      </div>
    </div>
    <div id="pokemonStart" v-if="pokemonDetails">
      <div id="name">
        {{
          pokemonDetails.forms[0].name.charAt(0).toUpperCase() +
          pokemonDetails.forms[0].name.slice(1)
        }}
      </div>
      <img
        class="center"
        id="img"
        :src="pokemonDetails.sprites.front_default"
        alt=""
      />
      <div id="infoBody">
        <!-- about section -->
        <div id="about">
          <div class="topText">ABOUT</div>
          <div class="infoContainer">
            <div id="description">Gotta catch 'em all!</div>
            <div id="aboutList">
              <div id="type">
                <div class="info">Type</div>
                <div class="answer typing">
                  <div
                    class="typePokemon"
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
                        ? pokemonDetails.types[0].type.name
                        : 'normal'
                    "
                  >
                    {{
                      pokemonDetails.types[0].type.name
                        .charAt(0)
                        .toUpperCase() +
                      pokemonDetails.types[0].type.name.slice(1)
                    }}
                  </div>
                  <span
                    class="typePokemon"
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
                        ? pokemonDetails.types[1].type.name
                        : 'normal'
                    "
                    v-if="pokemonDetails.types[1]"
                  >
                    {{
                      pokemonDetails.types[1].type.name
                        .charAt(0)
                        .toUpperCase() +
                      pokemonDetails.types[1].type.name.slice(1)
                    }}
                  </span>
                </div>
              </div>
              <div id="number">
                <div class="info">Nummer</div>
                <div class="answer">{{ pokemonDetails.id }}</div>
              </div>
              <div id="height">
                <div class="info">Hoogte</div>
                <div class="answer">{{ pokemonDetails.height / 10 }}m</div>
              </div>

              <div id="weight">
                <div class="info">Gewicht</div>
                <div class="answer">{{ pokemonDetails.weight / 10 }} kg</div>
              </div>
              <div id="sex">
                <div class="info">Geslacht</div>
                <div class="answer bold">&#9792; &#9794;</div>
              </div>

              <div id="ability">
                <div class="info">Vaardigheden</div>
                <div class="answer">
                  {{ pokemonDetails.abilities[0].ability.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- STATISTICS SECTION -->
        <div id="statistics">
          <div class="topText">STATISTIEKEN</div>
          <div class="infoContainer">
            <div id="hp">
              <div class="statName">
                {{ pokemonDetails.stats[0].stat.name }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[0].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[0].base_stat > 50"
                :value="pokemonDetails.stats[0].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[0].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>

            <div id="attack">
              <div class="statName">
                {{ pokemonDetails.stats[1].stat.name }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[1].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[1].base_stat > 50"
                :value="pokemonDetails.stats[1].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[1].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>

            <div id="defense">
              <div class="statName">
                {{ pokemonDetails.stats[2].stat.name }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[2].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[2].base_stat > 50"
                :value="pokemonDetails.stats[2].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[2].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>

            <div id="spAttack">
              <div class="statName">
                {{
                  pokemonDetails.stats[3].stat.name.slice(0, 2) +
                  '.' +
                  pokemonDetails.stats[3].stat.name.charAt(8).toUpperCase() +
                  pokemonDetails.stats[3].stat.name.slice(9)
                }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[3].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[3].base_stat > 50"
                :value="pokemonDetails.stats[3].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[3].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>

            <div id="spDefense">
              <div class="statName">
                {{
                  pokemonDetails.stats[4].stat.name.slice(0, 2) +
                  '.' +
                  pokemonDetails.stats[4].stat.name.charAt(8).toUpperCase() +
                  pokemonDetails.stats[4].stat.name.slice(9)
                }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[4].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[4].base_stat > 50"
                :value="pokemonDetails.stats[4].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[4].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>

            <div id="speed">
              <div class="statName">
                {{ pokemonDetails.stats[5].stat.name }}
              </div>
              <div class="statNumber">
                {{ pokemonDetails.stats[5].base_stat }}
              </div>
              <q-linear-progress
                v-if="pokemonDetails.stats[5].base_stat > 50"
                :value="pokemonDetails.stats[5].base_stat / 100"
                rounded
                color="positive"
                class="q-mt-sm statBar"
              />
              <q-linear-progress
                v-else
                :value="pokemonDetails.stats[5].base_stat / 100"
                rounded
                color="negative"
                class="q-mt-sm statBar"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- MOVESET SECTION -->
      <div id="moves">
        <div class="topText">MOVESET</div>
        <div id="moveContainer" class="infoContainer">
          <div class="moveset">
            <div class="level">
              Level
              {{ pokemonMoves[4].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[4].move.name }}
            </div>
            <div class="level">
              Level
              {{ pokemonMoves[10].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[10].move.name }}
            </div>
          </div>

          <div class="moveset">
            <div class="level">
              Level
              {{ pokemonMoves[14].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[14].move.name }}
            </div>
            <div class="level">
              Level
              {{ pokemonMoves[6].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[6].move.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue';
import { usePokemon } from 'src/services/pokemon.services';
import { useRouter, useRoute } from 'vue-router';
import BackComponent from '../components/BackComponent.vue';
import axios from 'axios';
import { Move, Pokemon, PokemonDetails } from 'src/components/models';

export default defineComponent({
  components: {
    BackComponent,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const { selectedPokemon, favoriteArray } = usePokemon();

    const pokemonDetails: Ref<PokemonDetails> = ref() as Ref<PokemonDetails>;

    const pokemonMoves: Ref<Array<Move>> = ref() as Ref<Array<Move>>;

    watch(
      () => route.params.id,
      (newID) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${+newID}`;
        axios.get<PokemonDetails>(url).then(
          (response) => {
            pokemonDetails.value = response.data;
            pokemonMoves.value = pokemonDetails.value.moves;
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      { immediate: true }
    );

    const favorite: Ref<boolean> = ref(false);

    function editFavorites(selectPokemon: Pokemon) {
      if (favoriteArray.value.includes(selectPokemon) === false) {
        favoriteArray.value.push(selectPokemon);
        window.alert('Toegevoegd aan favorieten!');
        favorite.value = true;
      } else {
        const placeInArray = favoriteArray.value.indexOf(selectPokemon);
        window.alert('Verwijderd uit favorieten!');
        favorite.value = false;
        if (placeInArray === 0) {
          favoriteArray.value.shift();
        } else {
          favoriteArray.value.splice(placeInArray, placeInArray);
        }
      }
    }

    function goBack() {
      router.go(-1);
    }

    return {
      selectedPokemon,
      goBack,
      pokemonDetails,
      editFavorites,
      favorite,
      pokemonMoves,
    };
  },
});
</script>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
#header {
  display: flex;
  justify-content: space-between;
  color: white;
}

.heart {
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.redHeart {
  background-color: red;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
}

#name {
  font-size: 2.5rem;
  margin-left: 1rem;
  color: white;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

#img {
  width: 24rem;
  margin: -3rem 0rem;
}

.topText {
  margin: 1rem 1rem 0rem 1rem;
  padding-left: 0.25rem;
  color: white;
}

.infoContainer {
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  border-radius: 1rem;
  background-color: white;
}

#description {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-bottom: 0.25rem;
}

.typing {
  display: flex;
  color: white;
}

.typePokemon {
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  margin-right: 0.25rem;
  padding: 0rem 0.3rem;
}

#type,
#number,
#height,
#weight,
#sex,
#ability {
  display: flex;
  margin: 0.5rem 9rem 0rem 1rem;
  width: 20rem;
  font-size: 1rem;
}

.info {
  width: 10rem;
  color: rgba(0, 0, 0, 0.411);
  font-weight: 500;
}

.bold {
  font-weight: 600;
}

#hp,
#attack,
#defense,
#spAttack,
#spDefense,
#speed {
  display: flex;
  margin: 0.5rem 9rem 0rem 1rem;
  width: 20rem;
}

.statName {
  width: 10rem;
  color: rgba(0, 0, 0, 0.411);
  font-weight: 500;
  font-size: 1rem;
}

.statNumber {
  font-weight: 600;
  padding-right: 2rem;
  font-size: 1rem;
}

.statBar {
  width: 90%;
}

.moveset {
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
}

.level {
  background-color: rgba(164, 126, 189, 0.719);
  border: 0.05rem solid rgb(149, 93, 187);
  padding: 0rem 1rem;
  border-radius: 1rem;
  margin: 1rem;
  width: 5.5rem;
}

.moveName {
  padding-top: 1rem;
  width: 5rem;
}

@media only screen and (min-width: 768px) {
  #infoBody {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #pokemonStart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #about,
  #statistics {
    width: 30rem;
  }

  .infoContainer {
    height: 18rem;
  }

  #moveContainer {
    height: 10rem;
    width: 38rem;
    align-items: center;
  }
}
</style>
