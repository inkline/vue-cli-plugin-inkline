import vue2 from './vue2';
import vue3 from './vue3';
import { PluginAPI } from "./types";

export default (api: PluginAPI, options: any, rootOptions: any) => {
  if (options.vue2) {
    vue2(api, options, rootOptions)
  } else {
    vue3(api, options, rootOptions)
  }
}
