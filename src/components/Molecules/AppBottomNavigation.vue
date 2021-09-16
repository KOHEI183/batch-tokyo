<template>
  <v-bottom-navigation
    class="bottom-navigation"
    :background-color="'#f5f5f5'"
  >
    <router-link to="/" class="routerLink">
      <v-btn value="recent">
        <span>ホーム</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/achievements" class="routerLink">
      <v-btn value="recent">
        <span>実績</span>
        <v-icon>mdi-trophy</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/googleform" class="routerLink">
      <v-btn value="recent">
        <span>問合せ</span>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </router-link>

  </v-bottom-navigation>
</template>