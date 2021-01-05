<template>
  <v-container class="grey lighten-4 pa-10">
    <v-alert type="success" v-if="success">
      You have selected 5 Nominations
    </v-alert>
    <div class="d-flex">
      <h1 class="flex-grow-1">The Shoppies</h1>
      <v-text-field
        solo
        persistent-hint
        hint="Sharable Link"
        flat
        dense
        readonly
        v-model="link"
        v-if="link"
        id="share"
      />
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="share"
            v-bind="attrs"
            v-on="on"
            icon
            color="blue"
          >
            <v-icon> mdi-share </v-icon>
          </v-btn>
        </template>
        <span> Share </span>
      </v-tooltip>
    </div>
    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-card-text>
          <h3>Movie title</h3>
          </v-card-text>
          <v-text-field
            v-model="search"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-magnify"
            label="Search"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" sm="6">
        <Results :search="search" />
      </v-col>
      <v-col cols="4" sm="6">
        <Nominations />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Results from "./Results";
import Nominations from "./Nominations";
export default {
  name: "Shoppies",
  components: {
    Results,
    Nominations,
  },
  data: () => ({
    search: "",
    link:''
  }),
  computed: {
    success() {
      return this.$store.state.nominations.length === 5
    },
  },
  methods: {
    share() {
      this.link = location.href
    },
  },
};
</script>
