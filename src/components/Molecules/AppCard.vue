<template>
  <VCard
    :class="className"
  >
    <v-container>
      <v-col>
        <slot/>
      </v-col>
    </v-container>
  </VCard>
</template>

<script lang="ts">
import Vue from 'vue'
import VCard from '@/components/Atoms/Card/VCard.vue'

export default Vue.extend({
  components: {
    VCard
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  }
})
</script>