<template>
  <v-card class="pa-2" outlined tile :loading="loading">
    <v-card-text>
      <h2>Nominations</h2>
      <v-list>
        <v-list-item v-for="(movie, index) in nominations" :key="movie.imdbID" two-line>
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
                  @click="remove(index)"
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="red"
                >
                  <v-icon> mdi-close-circle </v-icon>
                </v-btn>
              </template>
              <span> Remove </span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import { BASEURL } from "./consts";
export default {
  name: "Nominations",
  data: () => ({
    loading: false,
  }),
  created() {
    this.loadData();
  },
  computed: {
      nominations () {
          return this.$store.state.nominations
      }
  },
  methods: {
    async loadData() {
      const query = this.$route.query;
      let empty = true;
      for (var i in query) {
        empty = false;
        break;
      }
      if (empty) return;
      const noms = query.noms.split(",");
      if (noms.length == 1 && noms[0] == "") return;
      this.loading = true;
      const nominations = [];
      for (let nom of noms) {
          if (nom === "") continue
        const res = await axios.get(`${BASEURL}i=${nom}`);
        nominations.push(res.data);
      }
      this.$store.commit('loadNominations', nominations)
      this.loading = false;
    },
    remove(index) {
      const query = this.$route.query.noms.split(",");
      query.splice(index, 1);
      this.$router.replace({ query: { noms: query.join(",") } });
      this.$store.state.nominations.splice(index,1)
    },
  },
};
</script>

<style></style>
