<template>
  <AchievementsList>
    <template #title>
      <h2>実績</h2>
    </template>
    <template #list>
      <AppForImg
        :img-src="imgSrc"
        :page-title="'ココナラ'"
      />
    </template>
  </AchievementsList>
</template>

<script lang="ts">
import Vue from 'vue'
import CloudStorage from '@/services/api/firebase-storage'

import AppForImg from '@/components/Molecules/AppForImg.vue'
import AchievementsList from '@/components/Organisms/AchievementsList.vue'

export default Vue.extend({
  components: {
    AppForImg,
    AchievementsList
  },
  data() {
    return {
      imgSrc: []
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
  }
})
</script>