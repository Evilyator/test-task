## Installation

### Node version

Use version 8.9.1 or higher of [NodeJS](https://nodejs.org).

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in
command line.

### Install Yarn

Go to
[https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

### Install Gulp

Go to [https://gulpjs.com/](https://gulpjs.com/)

### Download NPM dependencies

```bash
yarn install
```

## Commands

### Run project

```bash
yarn start
```

### Build project

```bash
yarn build
```

## How it works

### Working with SCSS

The SCSS files are located in `./src/assets/scss`.

Example SCSS hierarchy :

* **base/** : Unclassed HTML elements (type selector)
* **elements/** : Designed elements, chunks of UI
* **tools/** : Default mixin and functions
* **_settings.scss** : Global variables
* **main.scss** : Main stylesheet

### Working with Pug templating

The PUG files are located in `./src/template`

* **layout** : layout of html files generated
* **mixin** : for reusable pattern
* **pages** : the content of html files generated
* **partial** : includes of html pattern
* **config.pug** : global variables

### Works with JavaScript

The Javascript files are located in `./src/assets/js`.

**Use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.
