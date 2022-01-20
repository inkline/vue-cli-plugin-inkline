import fs from 'fs';
import { PluginApi, PluginOptions } from "./types";

const configContentTranspileDependencies = `    transpileDependencies: [
        '@inkline/inkline'
    ]`;

const configContent = `module.exports = {
${configContentTranspileDependencies}
};`;

/**
 * Add inkline to package.json dependencies
 *
 * @param api
 */
const addDependencies = (api: PluginApi) => {
    api.extendPackage({
        dependencies: {
            '@inkline/inkline': '^3.0.0'
        }
    });
};

/**
 * Add inkline dependencies to package.json dev dependencies
 *
 * @param api
 */
const addDevDependencies = (api: PluginApi) => {
    api.extendPackage({
        devDependencies: {
            'sass': '^1.26.0',
            'sass-loader': '^8.0.0',
        }
    });
};

/**
 * Add inkline default imports to the entry file
 *
 * @param api
 */
const addDefaultImports = (api: PluginApi) => {
    api.injectImports(api.entryFile, "import { Inkline, components } from '@inkline/inkline';");
    api.injectImports(api.entryFile, "import '@inkline/inkline/inkline.scss';");
};

/**
 * Add inkline to the transpiled dependencies field in vue.config.js.
 *
 * @param api
 */
const addVueConfig = (api: PluginApi) => {
    const configPath = api.resolve('vue.config.js');

    if (!fs.existsSync(configPath)) {
        fs.writeFileSync(configPath, configContent, { encoding: 'utf-8' });
    } else {
        let contents = fs.readFileSync(configPath, { encoding: 'utf-8' });

        if (contents.indexOf('transpileDependencies') !== -1) {
            contents = contents
                .replace(/( *)(transpileDependencies:\s*\[)/, `$1$2\n$1$1'@inkline/inkline',\n`);
        } else {
            contents = contents
                .replace(/(module\.exports\s*=\s*{)/, `$1\n${configContentTranspileDependencies},\n`);
        }

        fs.writeFileSync(configPath, contents, { encoding: 'utf-8' });
    }
};

/**
 * Add inkline to Vue after importing
 *
 * @param api
 * @param options
 */
const addIntegration = (api: PluginApi) => {
    // Read and get content
    let content = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' });
    const lines = content.split(/\r?\n/g).reverse();

    // Inject imports
    let appInitialization = lines.findIndex(line => line.match(/^createApp\(App\)/));

    if (appInitialization === -1) {
        appInitialization = 0;
    }

    lines[appInitialization] = lines[appInitialization].replace('createApp(App)', 'createApp(App).use(Inkline, { components })');

    // Write back
    content = lines.reverse().join(`\n`);
    fs.writeFileSync(api.resolve(api.entryFile), content, { encoding: 'utf-8' });
};

export default (api: PluginApi, options: PluginOptions, rootOptions: any) => {
    addDependencies(api);
    addDevDependencies(api);

    addVueConfig(api);
    addDefaultImports(api);

    api.onCreateComplete(() => {
        addIntegration(api)
    })
};
