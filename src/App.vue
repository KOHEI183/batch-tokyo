<template>
  <div id="app">
    <v-app>
      <BaseLayout>
        <template #header>
          <router-link to="/">ホーム</router-link> |
          <router-link to="/achievements">実績</router-link>
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

export default Vue.extend({
  components: {
    BaseLayout
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
