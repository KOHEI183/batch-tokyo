<template>
  <VCard
    :class="'v-card-filed'"
  >
    <v-container>
      <v-col
        v-for="(src, i) in imgSrc" :key="i"
      >
        <VCard
          :class="'v-card-item'"
          :color-code="'white'"
        >
          <VImg
            :class-name="'v-img20'"
            :img-src="src"
          />
        </VCard>
      </v-col>
    </v-container>
  </VCard>
</template>

<script lang="ts">
import Vue from 'vue'
import VImg from '@/components/Atoms/Img/VImg.vue'
import VCard from '@/components/Atoms/Card/VCard.vue'

export default Vue.extend({
  components: {
    VImg,
    VCard
  },
  props: {
    imgSrc: {
      type: Array,
      default: () => []
    },
    pageTitle: {
      type: String,
      default: ''
    }
  }
})
</script>