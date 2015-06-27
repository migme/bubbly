# bubbly

[![Travis CI](https://img.shields.io/travis/migme/bubbly.svg)](https://travis-ci.org/migme/bubbly)
[![npm](https://img.shields.io/npm/v/bubbly.svg)](https://www.npmjs.com/package/migme-bubbly)
[![npm](https://img.shields.io/npm/dm/bubbly.svg)](https://www.npmjs.com/package/migme-bubbly)

Effortlessly create [CustomEvent](https://dom.spec.whatwg.org/#interface-customevent) instances.

Trigger events on any object that implements the [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface.

Fits well with [Custom Elements](http://w3c.github.io/webcomponents/spec/custom/) in Web Components based apps.

Designed to be used with [ECMAScript Function Bind syntax](https://github.com/zenparsing/es-function-bind).

## Installation

```
npm install --save bubbly
```

## Usage

### dispatch(type, detail)
```js
import {dispatch} from 'bubbly'
const target = new EventTarget()
target::dispatch('welcome', { hello: 'world' })
```

### bubble(type, detail)
Like `dispatch` but lets the event bubble up.
```js
import {bubble} from 'bubbly'
document.body::bubble('shake', { dat: 'booty' })
```

### on(type, handler)
Alias for `addEventListener`.
```js
import {on} from 'bubbly'
document::on('DOMContentLoaded', ::console.info)
```

### once(type, handler)
Wait for an event to fire, then stop listening.
```js
import {once} from 'bubbly'
const anchor = document.createElement('a')
anchor::once('click', event => event.preventDefault())
```

### off(type, handler)
Alias for `removeEventListener`.
```js
import {off} from 'bubbly'
document::off('DOMContentLoaded')
```

## Development

Run tests
```
npm test
```

## See Also
- [customevent-shim](https://www.npmjs.com/package/customevent-shim)
- [event-target-shim](https://www.npmjs.com/package/event-target-shim)
