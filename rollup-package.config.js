export default {
  input: 'package-src/index.js',
  output: [
    {
      dir: 'package',
      format: 'esm',
      preserveModules: true
    }
  ]
}