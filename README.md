# rot13-stream

This repository is an example of how you can create a readable and writable stream, a through stream, in node.
This particular stream transforms input by applying the [ROT13](http://en.wikipedia.org/wiki/ROT13)
substitution cipher and is based on [through](https://github.com/dominictarr/through) by 
[@dominictarr](https://github.com/dominictarr).

## Example
_example.js_
```js
var rot13 = require('rot13-stream')();
process.stdin.pipe(rot13).pipe(process.stdout)
```

```
$ echo 'The quick brown fox jumps over the lazy dog' | node example.js
Gur dhvpx oebja sbk whzcf bire gur ynml qbt
```

This cipher is also an example of an encrypting algorithm which is its own inverse, i.e. applying it twice produces
the same output as the input:

```
$ echo 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt' | node example.js
The quick brown fox jumps over the lazy dog
```

## Install
```
npm install rot13-stream
```

## License
MIT
