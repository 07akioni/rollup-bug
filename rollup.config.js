export default {
  input: 'src/index.js',
  treeshake: false,
  output: [
    {
      dir: 'es',
      format: 'esm',
      preserveModules: true
    }
  ]
}