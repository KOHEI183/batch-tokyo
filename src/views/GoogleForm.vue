<template>
  <GoogleForm>
    <AppCard>
      <iframe
        class="googleform"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdnR1PAUfJgYD73VLjMvozmRYy_Ya69exh-XHSwq6mbewnY0A/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        読み込んでいます…
      </iframe>
    </AppCard>
  </GoogleForm>
</template>

<script lang="ts">
import Vue from 'vue'
import AppCard from '@/components/Molecules/AppCard.vue'
import GoogleForm from '@/components/Organisms/GoogleForm.vue'

export default Vue.extend({
  components: {
    AppCard,
    GoogleForm
  }
})
</script>