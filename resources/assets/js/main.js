var Vue = require('vue')

import Alert from './components/Alert.vue'

/* eslint no-new: 0 */

new Vue({
  el: 'body',

  components: { Alert },

  ready () {
    console.log('All set!')
  }
})
