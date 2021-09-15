<template>
  <div>
    <button
      @click="test()"
    >click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloudStorage from '@/services/api/firebase-storage'

export default Vue.extend({
  methods: {
    test() {
      CloudStorage.getCloudStorage('user/mebig.jpg')
        .then((r)=>{
          console.log(r);
        })
        .catch((e)=>{
          console.error(e);
        })
    }
  }
})
</script>
