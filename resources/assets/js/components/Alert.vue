<style lang="stylus">
  $grey = #ddd

  .alert
    position relative
    width 600px
    padding 10px
    margin 10px
    border-radius 3px
    border 1px solid lighten($grey, 30%)
    background-color lighten($grey, 70%)

    &.alert--success
      border 1px solid lighten(green, 30%)
      background-color lighten(green, 70%)

    &.alert--error
      border 1px solid lighten(red, 30%)
      background-color lighten(red, 70%)

    & &__close
      position absolute
      padding 3px
      top: 5px
      right: 10px
      cursor pointer
      background-color white

      &.alert__close--white
        background-color white

      &.alert__close--red
        background-color red

      &.alert__close--grey
        background-color lighten($grey, 70%)
</style>

<template>
  <div :class="alertClasses" v-show="show">
    <strong>{{ type | capitalize }}
    <span v-show="type">!</span> </strong>
    <slot></slot>
    <span class="alert__close alert__close--white"
      @click="show = false"
    >
      x
    </span>
  </div>
</template>

<script>
  export default {
    props: ['type'],

    data () {
      return {
        show: true
      }
    },

    computed: {

      alertClasses: function () {
        var type = this.type
        return {
          'alert': true,
          'alert--success': type === 'success',
          'alert--error': type === 'error'
        }
      }
    }
  }

  new Vue({

    el: 'body',

    data: {
      test: 'hello world'
    }

  })
</script>

