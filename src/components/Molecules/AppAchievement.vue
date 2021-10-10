<template>
  <VCard
    :class="'v-card-filed'"
  >
    <v-container>
      <v-col
        v-for="(list, i) in achievementList" :key="i"
      >
        <VCard
          :class="'v-card-item achievement'"
          :color-code="'white'"
        >
          <div class="project-title">
            <h2>{{ list.title }}</h2>
            <p v-if="list.join">※現在参加プロジェクト</p>
          </div>
          <ul>
            <li>フェーズ：{{ list.phase }}</li>
            <li>使用技術：{{ list.technology }}</li>
            <li>使用ツール：{{ list.tools }}</li>
          </ul>
        </VCard>
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
    achievementList: {
      type: Array,
      default: () => []
    },
  }
})
</script>


