<template>
  <div class="global-wrap">
    <vueToastr></vueToastr>
    <vueSnotify></vueSnotify>
    <awesomeNotifications></awesomeNotifications>
  </div>
</template>

<script>
import vueToastr from './vueToastr.vue'
import vueSnotify from './vueSnotify.vue'
import awesomeNotifications from './awesomeNotifications.vue'

export default {
  components: {
    'vueToastr': vueToastr,
    'vueSnotify': vueSnotify,
    'awesomeNotifications': awesomeNotifications
  }
}
</script>

<style lang="sass">
  @import './sass/main.sass'
</style>