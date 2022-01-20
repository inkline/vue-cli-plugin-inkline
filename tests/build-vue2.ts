import * as shell from 'shelljs';
import { resolve } from 'path';

const __root = resolve(__dirname, '..');

shell.env.NODE_ENV = 'production';
shell.cd(resolve(__root, 'tests', 'vue2'));
shell.exec('npm run invoke');
shell.exec('npm run build');
