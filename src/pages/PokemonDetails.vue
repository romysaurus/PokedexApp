<template>
  <div
    id="page"
    :class="possibleTypes.includes(firstType) ? firstType : 'normal'"
  >
    <div id="header">
      <BackComponent id="back" @click="goBack()" />

      <q-btn
        v-if="!deleteButton"
        class="teamButton"
        label="Toevoegen aan team"
        @click="editTeam(selectedPokemon)"
      />

      <q-btn
        v-if="deleteButton"
        class="teamButton"
        label="Verwijderen uit team"
        @click="editTeam(selectedPokemon)"
      />

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

      <div>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="[imageDefault, imageShiny]"
          @hide="hideLightbox"
        ></vue-easy-lightbox>

        <div class="q-pa-md">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
            @click="visible = true"
            :class="possibleTypes.includes(firstType) ? firstType : 'normal'"
          >
            <q-carousel-slide :name="1" :img-src="imageDefault" />
            <q-carousel-slide :name="2" :img-src="imageShiny" />
          </q-carousel>
        </div>
      </div>

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
                      possibleTypes.includes(firstType) ? firstType : 'normal'
                    "
                  >
                    {{ firstType.charAt(0).toUpperCase() + firstType.slice(1) }}
                  </div>
                  <span
                    class="typePokemon"
                    :class="
                      possibleTypes.includes(secondType) ? secondType : 'normal'
                    "
                    v-if="secondType"
                  >
                    {{
                      secondType.charAt(0).toUpperCase() + secondType.slice(1)
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
              {{ pokemonMoves[0].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[0].move.name }}
            </div>
            <div class="level">
              Level
              {{ pokemonMoves[1].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[1].move.name }}
            </div>
          </div>

          <div class="moveset">
            <div class="level">
              Level
              {{ pokemonMoves[2].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[2].move.name }}
            </div>
            <div class="level">
              Level
              {{ pokemonMoves[3].version_group_details[0].level_learned_at }}
            </div>
            <div class="moveName">
              {{ pokemonMoves[3].move.name }}
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
import VueEasyLightbox from 'vue-easy-lightbox';
import { LocalStorage } from 'quasar';

export default defineComponent({
  components: {
    BackComponent,
    VueEasyLightbox,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const {
      selectedPokemon,
      favoriteArray,
      teamArray,
      pokemon,
      possibleTypes,
    } = usePokemon();

    const pokemonDetails: Ref<PokemonDetails> = ref() as Ref<PokemonDetails>;

    const pokemonMoves: Ref<Array<Move>> = ref() as Ref<Array<Move>>;
    const firstType: Ref<string> = ref('');
    const secondType: Ref<string> = ref('');
    const imageDefault: Ref<string> = ref('');
    const imageShiny: Ref<string> = ref('');
    const favorite: Ref<boolean> = ref(false);

    function goBack() {
      router.go(-1);
    }

    watch(
      () => route.params.id,
      (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${+id}`;
        const selected: Ref<Pokemon> = ref(
          pokemon.value.find((poke) => poke.id === +id)
        ) as Ref<Pokemon>;
        selectedPokemon.value = selected.value;
        favorite.value = false;
        for (let index = 0; index < favoriteArray.value.length; index++) {
          if (
            JSON.stringify(favoriteArray.value[index]) ===
            JSON.stringify(selectedPokemon.value)
          ) {
            favorite.value = true;
          }
        }

        axios.get<PokemonDetails>(url).then(
          (response) => {
            pokemonDetails.value = response.data;
            pokemonMoves.value = pokemonDetails.value.moves;
            firstType.value = pokemonDetails.value.types[0].type.name;
            imageDefault.value = pokemonDetails.value.sprites.front_default;
            imageShiny.value = pokemonDetails.value.sprites.front_shiny;
            if (pokemonDetails.value.types[1]) {
              secondType.value = pokemonDetails.value.types[1].type.name;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      },
      { immediate: true }
    );

    if (localStorage.getItem('favoriteArray')) {
      const getLocalStorage: string = LocalStorage.getItem(
        'favoriteArray'
      ) as string;
      const localFavoriteArray: Array<Pokemon> = JSON.parse(
        getLocalStorage
      ) as Array<Pokemon>;

      for (let i = 0; i < localFavoriteArray.length; i++) {
        const name: string = localFavoriteArray[i].name;
        if (name !== localFavoriteArray[i].name) {
          if (
            JSON.stringify(favoriteArray.value[i]) !==
            JSON.stringify(localFavoriteArray[i])
          ) {
            favoriteArray.value.push(localFavoriteArray[i]);
          }
        }
      }
    }

    if (localStorage.getItem('teamArray')) {
      const getLocalStorage: string = LocalStorage.getItem(
        'teamArray'
      ) as string;
      const localTeamArray: Array<Pokemon> = JSON.parse(
        getLocalStorage
      ) as Array<Pokemon>;

      for (let i = 0; i < localTeamArray.length; i++) {
        const name: string = localTeamArray[i].name;
        if (name !== localTeamArray[i].name) {
          if (
            JSON.stringify(teamArray.value[i]) !==
            JSON.stringify(localTeamArray[i])
          ) {
            teamArray.value.push(localTeamArray[i]);
          }
        }
      }
    }

    function editFavorites(selectPokemon: Pokemon) {
      const alreadyFavorite = favoriteArray.value.findIndex(
        (poke) => poke.name === selectPokemon.name
      );

      if (alreadyFavorite === -1) {
        favoriteArray.value.push(selectPokemon);
        favorite.value = true;
        localStorage.setItem(
          'favoriteArray',
          JSON.stringify(favoriteArray.value)
        );
      } else {
        favorite.value = false;
        if (alreadyFavorite === 0) {
          favoriteArray.value.shift();
          localStorage.setItem(
            'favoriteArray',
            JSON.stringify(favoriteArray.value)
          );
        } else {
          favoriteArray.value.splice(alreadyFavorite, 1);
          localStorage.setItem(
            'favoriteArray',
            JSON.stringify(favoriteArray.value)
          );
        }
      }
    }

    const deleteButton: Ref<boolean> = ref(false);
    const alreadyTeam = teamArray.value.findIndex(
      (poke) => poke.name === selectedPokemon.value.name
    );
    if (alreadyTeam !== -1) {
      deleteButton.value = true;
    }

    console.log(alreadyTeam);

    function editTeam(selectPokemon: Pokemon) {
      const alreadyTeam = teamArray.value.findIndex(
        (poke) => poke.name === selectPokemon.name
      );

      console.log(alreadyTeam);

      if (teamArray.value.length === 6 && alreadyTeam === -1) {
        window.alert('Reeds 6 Pokémon in team');
      } else if (alreadyTeam === -1) {
        teamArray.value.push(selectPokemon);
        localStorage.setItem('teamArray', JSON.stringify(teamArray.value));
        deleteButton.value = false;
      } else {
        if (alreadyTeam === 0) {
          teamArray.value.shift();
          localStorage.setItem('teamArray', JSON.stringify(teamArray.value));
          deleteButton.value = true;
        } else {
          teamArray.value.splice(alreadyTeam, 1);
          localStorage.setItem('teamArray', JSON.stringify(teamArray.value));
          deleteButton.value = true;
        }
      }
    }

    const visible = ref(false);

    const hideLightbox = () => (visible.value = false);

    return {
      selectedPokemon,
      goBack,
      pokemonDetails,
      deleteButton,
      editFavorites,
      editTeam,
      favorite,
      pokemonMoves,
      firstType,
      secondType,
      visible,
      hideLightbox,
      imageDefault,
      imageShiny,
      slide: ref(1),
      possibleTypes,
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

.teamButton {
  height: 2rem;
  margin-top: 1rem;
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
