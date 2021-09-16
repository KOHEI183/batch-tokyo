<template>
  <v-btn
    elevation="2"
    large
    rounded
    :color="colorCode"
    :disabled="disabled"
    :outlined="outlined"
    @click="postEvent"
    class="button"
  >{{ buttonName }}
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    buttonName: {
      type: String,
      default: '',
    },
    colorCode: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    postEvent (event: Event): void{
      this.$emit('event-button-click', event);
    }
  }
})
</script>
