<template>
  <VCard
    :class="'v-card-filed'"
  >
    <v-container>
      <VImg
        :class-name="'v-img50 my-img'"
        :img-src="imgSrc"
      />
      <v-col cols="12">
        <VCard
          :class="'v-card-item my-profile'"
          :color-code="'white'"
          v-html="selfIntroduction"
        >
        </VCard>
      </v-col>
      <v-col cols="12">
        <VCard
          :class="'v-card-item skill'"
          :color-code="'white'"
        >
          <div class="d-flex flex-no-wrap justify-space-between skill__item"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card-title
              class="text-h5 skill-title"
              v-text="item.title"
            ></v-card-title>
            <v-rating
              class="skill-rating"
              readonly
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