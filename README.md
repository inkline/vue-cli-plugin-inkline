# Deprecated 
### To use Inkline with Vue.js CLI, please refer to the [Installation Documentation](https://www.inkline.io/docs/installation/webpack).

---

<p align="center">
    <a href="http://inkline.io/">
        <img src="https://www.inkline.io/assets/images/logo/logo-black.svg" alt="Inkline logo" width=72 height=72>
    </a>
</p>

<h1 align="center">Inkline - Vue.js CLI Plugin</h1>

<p align="center">
    Vue.js CLI Plugin for Inkline, the intuitive UI Components library that gives you the foundation for building high quality, accessible, and customizable Vue.js Design Systems.<br/><br/> Inkline is written and maintained by <a href="https://twitter.com/alexgrozav">@alexgrozav</a>. 
    <br/>
    <br/>
    <a href="https://inkline.io">Homepage</a>
    ·
    <a href="https://inkline.io/docs/introduction">Documentation</a>
    ·
    <a href="https://storybook.inkline.io/">Storybook</a>
    ·
    <a href="https://stackblitz.com/edit/inkline?file=src/App.vue">Playground</a>
    ·
    <a href="https://github.com/inkline/inkline/issues">Issue Tracker</a>
</p>

## Install for Vue.js 3

If you haven't yet installed Vue.js CLI, first follow the installation instructions [here](https://github.com/vuejs/vue-cli).

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

## Creator
**Alex Grozav**

- <https://grozav.com>
- <https://twitter.com/alexgrozav>
- <https://facebook.com/alexgrozav>
- <https://github.com/alexgrozav>

If you use Inkline in your daily work and feel that it has made your life easier, please consider sponsoring me on [Github Sponsors](https://github.com/sponsors/alexgrozav). 💖

## Copyright and license
Code copyright 2017-2022 [Inkline Authors](https://github.com/inkline/inkline/graphs/contributors).
Code released under the [MIT License](https://github.com/inkline/inkline/blob/master/packages/inkline/LICENSE).
