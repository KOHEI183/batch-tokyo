<template>
  <HomeTemplate>
    <template #title>
      <h2>ホーム</h2>
    </template>
    <template #lists>
      <AppSkillList
        :img-src="profileImg"
        :items="skillLists"
        :self-introduction="selfIntroduction"
      >
        <AppLinkList
          :sns-link="snsLink"
          @event-button-click="windowOpen($event)"
        />
      </AppSkillList>
    </template>
  </HomeTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import CloudStorage from '@/services/api/firebase-storage'

import DefaultData from '@/mixins/DefaultData'

import HomeTemplate from '@/components/Organisms/HomeTemplate.vue'
import AppSkillList from '@/components/Molecules/AppSkillList.vue'
import AppLinkList from '@/components/Molecules/AppLinkList.vue'

export default Vue.extend({
  mixins: [ DefaultData ],
  components: {
    HomeTemplate,
    AppSkillList,
    AppLinkList
  },
  data() {
    return {
      profileImg: '',
    }
  },
  created: function() {
    CloudStorage.getCloudStorage('user/mebig.jpg')
      .then((r)=>{
        this.profileImg = r;
      })
      .catch((e)=>{
        console.error(e);
      })
  },
  methods: {
    windowOpen (link: string): void{
      window.open(link, '_blank')
    }
  }
});
</script>

<style scoped>
</style>