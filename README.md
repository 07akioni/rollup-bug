# Usage
Redundant import generated by `rollConfig.treeshake = false` may create unusable output.

```bash
npm run rollup-app-no-shake
# { a: 'a', b: undefined } not correct
npm run rollup-app
# { a: 'a', b: [ 'b', 'a' ] } correct
```