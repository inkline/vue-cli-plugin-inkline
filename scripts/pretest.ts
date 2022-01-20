import * as shell from 'shelljs';
import { resolve } from 'path';

const __root = resolve(__dirname, '..');

shell.cd(__root);
shell.exec('npm run build');
shell.exec('npx rimraf ./tests/vue2 ./tests/vue3');
shell.cp('-R', './tests/templates/*', './tests');

shell.cd('./tests/vue2');
shell.exec('npm install');
shell.rm('-R', './node_modules/@inkline/vue-cli-plugin-inkline/**/*.js');
shell.cp('-R', '../../lib', './node_modules/@inkline/vue-cli-plugin-inkline');

shell.cd(__root);

shell.cd('./tests/vue3');
shell.exec('npm install');
shell.rm('-R', './node_modules/@inkline/vue-cli-plugin-inkline/**/*.js');
shell.cp('-R', '../../lib/*', './node_modules/@inkline/vue-cli-plugin-inkline');
