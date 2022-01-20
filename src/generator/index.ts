import vue2 from './vue2';
import vue3 from './vue3';
import { PluginOptions, PluginApi } from "./types";

module.exports = (api: PluginApi, options: PluginOptions, rootOptions: any) => {
    if (options.vue2) {
        vue2(api, options);
    } else {
        vue3(api, options, rootOptions);
    }
};
