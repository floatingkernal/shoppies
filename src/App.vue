<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Home
  },

  data: () => ({
    //
  }),
};
</script>
