<template>
  <img
    :class="className"
    :src="imgSrc"
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    className: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
})
</script>