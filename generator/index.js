const vue2 = require('./vue2.js')

module.exports = (api, options, rootOptions) => {
  if (options.vue2) {
    vue2(api, options, rootOptions)
  }
}
