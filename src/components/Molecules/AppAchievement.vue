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
            <span v-if="list.join">※現在参加プロジェクト</span>
          </div>
          <ul>
            <li><span>フェーズ：</span>{{ list.phase }}</li>
            <li><span>使用ツール：</span>{{ list.tools }}</li>
            <li><span>使用技術：</span>{{ list.technology }}</li>
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


