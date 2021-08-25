# URL Pattern

Validate URLs and extract values easily!

## Installation

Using npm

```sh
npm i @helix-re/url-pattern
```

## Usage

>Note: URL Pattern supports both ES and CJS modules.

To use the APIs, you will need to understand the concept of a namespace. We define namespace as one or more characters between 2 slashes. Let's look at an example URL.

```sh
https://example.com/foo/bar/
```

We recommend using URL Pattern only with the `pathname` part of the URL.

```sh
/foo/bar/
```

We also define a concept of named and anonymous namespaces. Let's see how they work in practice on the example URL. There are 2 anonymous namespaces `foo` and `bar`, or 1 named namespace `foo` with value `bar`.

The reason we define 2 concepts is that a typical application might use a combination of both. For example, if we look at the HELIX RE office on Google Maps.

```sh
https://google.com/maps/place/HELIX+RE/@51.5333649,-0.1075597,17z/data=!3m1!4b1!4m5!3m4!1s0x48761bb724ab195d:0x1c29f788dbea0821!8m2!3d51.5333649!4d-0.1053657
```

Again, remove the domain part.

```sh
/maps/place/HELIX+RE/@51.5333649,-0.1075597,17z/data=!3m1!4b1!4m5!3m4!1s0x48761bb724ab195d:0x1c29f788dbea0821!8m2!3d51.5333649!4d-0.1053657
```

- `maps` is an anonymous namespace
- `place` is a named namespace with value `HELIX+RE`
- `@51.5333649,-0.1075597,17z` is an anonymous namespace
- `data=!3m1!4b1!4m5!3m4!1s0x48761bb724ab195d:0x1c29f788dbea0821!8m2!3d51.5333649!4d-0.1053657` is an anonymous namespace

Let's look at how we can extract the `place` namespace with URL Pattern.

```js
import { required, select } from '@helix-re/url-pattern';

const pattern = required() + select('place');
url.match(new RegExp(`^${pattern}`))[1]; // 'HELIX+RE'
```

All we had to do was require an anonymous namespace (`maps`) and select the value of a named namespace `place`.

Another common use case is defining optional namespaces. Let's assume Google Maps works even if you skip the initial `/maps/` prefix. We could make our selector work like this.

```js
import { optional, select } from '@helix-re/url-pattern';

const pattern = optional('maps') + select('place');
url.match(new RegExp(`^${pattern}`))[1]; // 'HELIX+RE'
```

Our pattern will now match the following URL as well.

```sh
/place/HELIX+RE/@51.5333649,-0.1075597,17z/data=!3m1!4b1!4m5!3m4!1s0x48761bb724ab195d:0x1c29f788dbea0821!8m2!3d51.5333649!4d-0.1053657
```

## API

### `- optional(values)`

Denotes one or more optional anonymous namespaces. Note that you need to know their values in advance.

### `- required(name)`

Denotes a required namespace. Accepts an optional `name` parameter. If skipped, we require an anonymous namespace.

### `- select(name)`

Selects a namespace value which can be accessed in the matched result. Accepts an optional `name` parameter. If skipped we select an anonymous namespace.
