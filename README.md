## kelp-build

### install

```bash
~$ npm i -g @kelpjs/build
```

### configurage

kbuild.config.js

```js
const externals = require('@kelpjs/build/plugins/externals');

module.exports = {
  input: "./src/index.ts",
  style: {
    extract: false
  },
  typescript: true,
  plugins: [
    externals([
      'react',
      'react-dom'
    ])
  ],
  output: "my-components.js"
}
```

### usage

```bash
~$ kbuild
> kbuild

Happy[1]: Version: 5.0.1. Threads: 8
Happy[1]: All set; signaling webpack to proceed.
[kelp-build] Javascript compile success, cost 3351ms
```

### license

This Project is under [MIT License](https://opensource.org/licenses/MIT).
