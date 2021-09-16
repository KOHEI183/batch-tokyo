<template>
  <img :src="imgSrc">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  }
})
</script>