import * as shell from 'shelljs';
import { resolve } from 'path';

const __root = resolve(__dirname, '..');

shell.cd(resolve(__root, 'tests', 'vue3'));
shell.exec('npx @vue/cli invoke @inkline/vue-cli-plugin-inkline');
shell.exec('npm run build');
