<template>
  <v-card
    :class="className"
    :color="colorCode"
  >
    <slot/>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    className: {
      type: String,
      default: ''
    },
    colorCode: {
      type: String,
      default: ''
    },
  }
})
</script>
