import { defineConfig } from 'tsdown';

export default defineConfig({
  format: 'esm',
  outDir: './lib',
  outputOptions: {
    polyfillRequire: false,
  },
});
