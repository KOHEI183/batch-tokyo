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
      CloudStorage.getCloudStorage('gs://my-portfolio-c26fa.appspot.com')
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
