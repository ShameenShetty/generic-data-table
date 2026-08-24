import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: false, // Turn off tsup's broken dts generator
  external: ['react', 'react-dom'],
  clean: true,
});