# HELIX RE Styles

HELIX RE design specifications.

## TODO

- add tests for utils

## Installation

Using npm

```sh
npm i @helix-re/styles
```

## Usage

>Note: This package supports both ES and CJS modules.

In your JavaScript file, import variables

```js
import { colors } from '@helix-re/styles';
```

And that's it! You now have access to the following variables.

```js
import {
  antd,
  colors,
  fonts,
  grid,
} from '@helix-re/styles';
```

### Sass

In your Sass file, import styles

```scss
@import '~@helix-re/styles/index';
```

You now have access to CSS and Sass variables.

## Customisation

You can overwrite any Sass variable in this package. To do so, define the variable before you import `@helix-re/styles`. For example, to overwrite the colour `$black`.

```scss
$black: '#f00';

@import '~@helix-re/styles/index';
```

### Dependencies

This project uses a private package manager. View our [guide](https://helixre.atlassian.net/wiki/spaces/ENG/pages/237535269) for configuration instructions.
