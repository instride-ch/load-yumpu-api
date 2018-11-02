![Load Yumpu API](docs/images/github_banner.png "Load Yumpu API")

[![npm Version](http://img.shields.io/npm/v/load-yumpu-api.svg?style=for-the-badge)](https://www.npmjs.com/package/load-yumpu-api) [![Build Status](https://img.shields.io/travis/w-vision/load-yumpu-api.svg?branch=master&style=for-the-badge)](https://travis-ci.org/w-vision/load-yumpu-api)

> A thin, [Promise](https://developers.google.com/web/fundamentals/primers/promises)-returning helper for loading the [Yumpu JavaScript API](https://developers.yumpu.com/introductionJS.html).

- The Promise&rsquo;s fulfilled callback is passed the `Yumpu` object
- 224 bytes gzipped

## Usage

> [**Editable demo (CodePen)**](https://codepen.io/lyuanqing/pen/YeYBrN)

```js
const loadYumpuApi = require('load-yumpu-api');

loadYumpuApi().then(function (Yumpu) {
  const yumpu = new Yumpu();
  yumpu.create_player('#magazineContainer', '17403069');
}).catch(function (error) {
  console.error(error);
});
```

## Why

[Without this module](https://developers.yumpu.com/quickSetup.html), you would need to add a script tag to your page. For example:

```html
<script type="text/javascript" src="https://players.yumpu.com/hub.js"></script>
<script>
  // `window.Yumpu` available here
</script>
```

This module abstracts this ceremony away, and fits better with modern bundlers like [Browserify](http://browserify.org/) or [Webpack](https://webpack.github.io/).

## API

```js
const loadYumpuApi = require('load-yumpu-api');
```

### loadYumpuApi()

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

- **Fulfilled** if loading was successful. The fulfilled callback is passed the `Yumpu` object. If `loadYumpuApi` is called multiple times on a page, the fulfilled callback will be passed the previously-loaded `Yumpu` object.
- **Rejected** if we weren&rsquo;t able to load the Yumpu API.

See [Usage](#usage).

## Installation

Install via [yarn](https://yarnpkg.com):

```sh
$ yarn add load-yumpu-api
```

Or [npm](https://npmjs.com):

```sh
$ npm install --save load-yumpu-api
```

## License

[MIT](LICENSE.md)