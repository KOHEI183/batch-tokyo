<template>
  <VCard
    :class="'v-card-filed'"
  >
    <v-container>
      <VImg
        :class-name="'v-img50'"
        :img-src="imgSrc"
      />
      <v-col cols="12">
        <VCard
          :class="'v-card-item'"
          v-html="selfIntroduction"
        >
        </VCard>
      </v-col>
      <v-col cols="12">
        <VCard
          :class="'v-card-item'"
        >
          <div class="d-flex flex-no-wrap justify-space-between"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card-title
              class="text-h5"
              v-text="item.title"
            ></v-card-title>
            <v-rating
              v-model="item.rating"
              background-color="orange lighten-3"
              color="orange"
              large
              disable
            ></v-rating>
          </div>
        </VCard>
      </v-col>
    </v-container>

    <slot/>
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
    selfIntroduction: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: [Array, String],
      default: () => []
    },
    pageTitle: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
})
</script>