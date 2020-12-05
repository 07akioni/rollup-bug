export default {
  input: 'package-src/index.js',
  treeshake: false,
  output: [
    {
      dir: 'package',
      format: 'esm',
      preserveModules: true
    }
  ]
}