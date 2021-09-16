<template>
  <div>
    <div v-for="(link, i) in snsLink" :key="i">
      <VButtons
        :button-name="link.name"
        @event-button-click="postEvent(link.url)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VButtons from '@/components/Atoms/Buttons/VButtons.vue'
export default Vue.extend({
  components: {
    VButtons
  },
  props: {
    snsLink: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    postEvent (link: string): void{
      this.$emit('event-button-click', link);
    }
  }
})
</script>
