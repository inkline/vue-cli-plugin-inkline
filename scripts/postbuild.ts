import * as shell from 'shelljs';
import { resolve } from 'path';

/**
 * Change directory to root
 */

shell.cd(resolve(__dirname, '..'));

/**
 * Copy files to lib folder
 */

shell.mkdir('lib');
shell.cp('-R', './lib-cjs/*', 'lib');
shell.cp('-R', './lib-mjs/*', 'lib');

/**
 * Remove additional build folders
 */

shell.rm('-R', './lib-cjs');
shell.rm('-R', './lib-mjs');
