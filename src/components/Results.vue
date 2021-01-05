<template>
  <v-card class="pa-2" outlined :loading="loading">
    <v-card-text v-if="!search">
      <h2>Please use search bar to search for Movie titles</h2>
    </v-card-text>
    <v-card-text v-else>
      <h2>Results for "{{ search }}"</h2>
      <v-list>
        <v-list-item
          v-for="(movie, index) in searchResults"
          :key="movie.imdbID"
          two-line
        >
          <v-list-item-avatar tile>
            <v-img :src="movie.Poster" contain />
          </v-list-item-avatar>
          <v-list-item-content>
          <v-list-item-title>
            {{ movie.Title }}
          </v-list-item-title>
          <v-list-item-subtitle>
              ({{ movie.Year }})
          </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :disabled="nominated.includes(movie.imdbID)"
                  @click="nominate(index)"
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="green"
                >
                  <v-icon> mdi-check-bold </v-icon>
                </v-btn>
              </template>
              <span> Nominate </span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <!-- <v-btn @click="apiCall"> Search </v-btn> -->
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import { BASEURL } from "./consts";
export default {
  name: "Results",
  props: {
    search: String,
  },
  data: () => ({
    loading: false,
    searchResults: [],
    nominated: [],
  }),
  watch: {
    search() {
      this.apiCall()
    },
    "$route.query.noms"() {
      this.nominated = this.$route.query.noms.split(",");
    },
  },
  methods: {
    async apiCall() {
      this.loading = true;
      try {
        const res = await axios.get(`${BASEURL}s=${this.search}`);
        this.searchResults = res.data.Search;
      } catch (error) {
        console.error(error);
      }
      this.loading = false;
    },
    nominate(index) {
      const query = this.$route.query;
      const movie = this.searchResults[index];
      this.$store.commit('addNomination', movie);
      let empty = true;
      for (var i in query) {
        empty = false;
        break;
      }
      if (!empty && query.noms == "") empty = true;
      if (empty) this.$router.push({ query: { noms: movie.imdbID } });
      else this.$router.replace({ query: { noms: `${query.noms},${movie.imdbID}` } });
    },
  },
};
</script>

<style></style>
