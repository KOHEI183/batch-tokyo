<template>
  <div>
    <div>
      <VSlotPtag>
        {{pageTitle}}
      </VSlotPtag>
    </div>
    <div v-for="(src, i) in imgSrc" :key="i">
      <VImg
        :img-src="src"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VImg from '@/components/Atoms/Img/VImg.vue'
import VSlotPtag from '@/components/Atoms/Slots/VSlotPtag.vue'

export default Vue.extend({
  components: {
    VImg,
    VSlotPtag
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