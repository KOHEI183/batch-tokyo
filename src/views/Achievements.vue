<template>
  <AchievementsList>
    <template #title>
    </template>
    <template #list>
      <AppTabs
        :tab-list="mixinsAchievement"
        @tabs-button-select="selectTabs"
      />
      <AppAchievement
        v-if="selectTabValue === 0"
        :achievement-list="mixinsAchievementListData"
      />
      <AppForImg
        v-if="selectTabValue === 1"
        :img-src="imgSrc"
        :page-title="'ココナラ'"
      />
    </template>
  </AchievementsList>
</template>

<script lang="ts">
import Vue from 'vue'
import CloudStorage from '@/services/api/firebase-storage'
import DefaultData from '@/mixins/DefaultData'

import AppTabs from '@/components/Molecules/AppTabs.vue'
import AppForImg from '@/components/Molecules/AppForImg.vue'
import AppAchievement from '@/components/Molecules/AppAchievement.vue'
import AchievementsList from '@/components/Organisms/AchievementsList.vue'

export default Vue.extend({
  mixins: [ DefaultData ],
  components: {
    AppForImg,
    AppTabs,
    AppAchievement,
    AchievementsList
  },
  data() {
    return {
      imgSrc: [],
      selectTabValue: 0
    }
  },
  created: function() {
    CloudStorage.getListAllCloudStorage('achievements/')
      .then((res)=>{
        for (const [index, key] of res.items.entries()) {
          CloudStorage.getCloudStorage(`achievements/${key.name}`)
            .then((res) => {
              this.imgSrc.push(res);
            })
        }
      })
      .catch((e)=>{
        console.error(e);
      })
  },
  methods: {
    selectTabs (selectValue: number): void {
      this.selectTabValue = selectValue
    }
  }
})
</script>