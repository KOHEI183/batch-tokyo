<template>
  <div class="lisk-button-list">
    <div v-for="(link, i) in snsLink" :key="i">
      <VButtons
        :class-name="'link-button'"
        :button-name="link.name"
        :color-code="'white'"
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
