<template>
  <div id="app">
    <v-app>
      <BaseLayout>
        <template #header>
          <AppBottomNavigation/>
        </template>
        <v-main>
          <router-view/>
        </v-main>
        <template #footer>
        </template>
      </BaseLayout>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseLayout from '@/components/Templates/BaseLayout.vue'
import AppBottomNavigation from '@/components/Molecules/AppBottomNavigation.vue'

export default Vue.extend({
  components: {
    BaseLayout,
    AppBottomNavigation
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
