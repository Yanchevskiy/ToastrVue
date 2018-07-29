<template>
  <div class="awesomeNotifications-app toastr-wrap">
    <p>Awesome Notifications example close time out or click</p>
    <div class="toast-example">
      <div class="toast toast-info" @click="addInfo">
        <button class="toast-close-button">
          <span aria-hidden="true">×</span>
        </button>
        <div class="toast-message"><i class="fas fa-info-circle"></i><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</div>
      </div>
    </div>
    <div class="toast-example">
      <div class="toast toast-success" @click="addSuccess">
        <button class="toast-close-button">
          <span aria-hidden="true">×</span>
        </button>
        <div class="toast-message"><strong>Well done!</strong> You successfully read this important alert message.</div>
      </div>
    </div>
    <div class="toast-example">
      <div class="toast toast-error" @click="addError">
        <button class="toast-close-button">
          <span aria-hidden="true">×</span>
        </button>
        <div class="toast-message"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div>
      </div>
    </div>
    <div class="toast-example">
      <div class="toast toast-warning" @click="addWarning">
        <button class="toast-close-button">
          <span aria-hidden="true">×</span>
        </button>
        <div class="toast-message"><i class="fas fa-exclamation-triangle"></i><strong>WARNING:</strong> Better check yourself, you're not looking too good.</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    addInfo: function (event) {
      this.$awn.info(`<div class="toast toast-info">
                        <button class="toast-close-button">
                          <span aria-hidden="true">×</span>
                        </button>
                        <div class="toast-message"><i class="fas fa-info-circle"></i><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</div>
                      </div>`)
    },
    addSuccess: function (event) {
      this.$awn.success(`<div class="toast toast-success">
                          <button class="toast-close-button">
                            <span aria-hidden="true">×</span>
                          </button>
                          <div class="toast-message"><strong>Well done!</strong> You successfully read this important alert message.</div>
                        </div>`)
    },
    addError: function (event) {
      this.$awn.alert(`<div class="toast toast-error">
                          <button class="toast-close-button">
                            <span aria-hidden="true">×</span>
                          </button>
                          <div class="toast-message"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div>
                        </div>`)
    },
    addWarning: function (event) {
      this.$awn.alert(`<div class="toast toast-warning">
                          <button class="toast-close-button">
                            <span aria-hidden="true">×</span>
                          </button>
                          <div class="toast-message"><i class="fas fa-exclamation-triangle"></i><strong>WARNING:</strong> Better check yourself, you're not looking too good.</div>
                        </div>`)
    }
  }
}
</script>