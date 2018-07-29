<template>
  <div class="vueToastr-app toastr-wrap">
    <p>Vue-notification example close timeout or click</p>
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

    <notifications group="custom-info">
      <template slot="body" slot-scope="props">
        <div class="toast toast-info" @click="props.close">
          <button class="toast-close-button">
            <span aria-hidden="true">×</span>
          </button>
          <div class="toast-message"><i class="fas fa-info-circle"></i></i><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</div>
        </div>
      </template>
    </notifications>
    <notifications group="custom-success">
      <template slot="body" slot-scope="props">
        <div class="toast toast-success" @click="props.close">
          <button class="toast-close-button">
            <span aria-hidden="true">×</span>
          </button>
          <div class="toast-message"><strong>Well done!</strong> You successfully read this important alert message.</div>
        </div>
      </template>
    </notifications>
    <notifications group="custom-error">
      <template slot="body" slot-scope="props">
        <div class="toast toast-error" @click="props.close">
          <button class="toast-close-button">
            <span aria-hidden="true">×</span>
          </button>
          <div class="toast-message"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div>
        </div>
      </template>
    </notifications>
    <notifications group="custom-warning">
      <template slot="body" slot-scope="props">
        <div class="toast toast-warning" @click="props.close">
          <button class="toast-close-button">
            <span aria-hidden="true">×</span>
          </button>
          <div class="toast-message"><i class="fas fa-exclamation-triangle"></i><strong>WARNING:</strong> Better check yourself, you're not looking too good.</div>
        </div>
      </template>
    </notifications>

  </div>
</template>

<script>
export default {
  methods: {
    addInfo: function (event) {
      this.$notify({
        group: 'custom-info',
        duration: 3000,
        position: 'top right'
      })
    },
    addSuccess: function (event) {
      this.$notify({
        group: 'custom-success',
        duration: 3000,
        position: 'top right'
      })
    },
    addError: function (event) {
      this.$notify({
        group: 'custom-error',
        duration: 3000,
        position: 'top right'
      })
    },
    addWarning: function (event) {
      this.$notify({
        group: 'custom-warning',
        duration: 3000,
        position: 'top right'
      })
    }
  }
}
</script>