const vue2 = require('./vue2.js');
const vue3 = require('./vue3.js');

module.exports = (api, options, rootOptions) => {
    if (options.vue2) {
        vue2(api, options, rootOptions);
    } else {
        vue3(api, options, rootOptions);
    }
};
