# Inkline - Vue CLI Plugin
[![CI](https://github.com/el-cms/vue-cli-plugin-inkline/actions/workflows/node.js.yml/badge.svg)](https://github.com/el-cms/vue-cli-plugin-inkline/actions/workflows/node.js.yml)

[Vue CLI](https://github.com/vuejs/vue-cli) Plugin for [Inkline](https://github.com/inkline/inkline), the customizable
Vue.js UI/UX Library.

## Install for Vue 3

If you haven't yet installed Vue CLI, first follow the installation instructions [here](https://github.com/vuejs/vue-cli).

If you haven't created a project yet, generate a project using Vue CLI:

```bash
vue create my-app
cd my-app
```

**Before installing the Inkline plugin, make sure to commit or stash your changes in case you need to
revert.**

Add Inkline: 
```bash
vue add @inkline/vue-cli-plugin-inkline
```

## Install for Vue 2

Inkline for Vue 2 will stick to the `2.x` versions.

For Vue2:

```bash
vue add @inkline/vue-cli-plugin-inkline --vue2
```

### Configuration

Optionally, you can configure your Inkline Vue CLI Plugin using the following installation options.

First of all, Inkline uses Sass, so you will need to install it as a dependency:

```bash
yarn add --dev node-sass sass-loader
# If you still use NPM
npm install -D node-sass sass-loader
```

#### Tree Shaking and SCSS

To install a tree-shaking and SCSS ready Inkline setup:

```
vue add @inkline/vue-cli-plugin-inkline --vue2 --customizable
```

