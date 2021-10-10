<template>
  <v-tabs
    class="tab"
    centered
    background-color="#f5f5f5"
    @change="selectTabs"
  >
    <VTab v-for="(tab, i) in tabList" :key="i">
      {{ tab.title }}
    </VTab>
  </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultData from '@/mixins/DefaultData'

import VTab from '@/components/Atoms/Tabs/VTab.vue'

export default Vue.extend({
  mixins: [ DefaultData ],
  components: {
    VTab
  },
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    selectTabs (select: number): void {
      this.$emit('tabs-button-select', select)
    }
  }
})
</script>