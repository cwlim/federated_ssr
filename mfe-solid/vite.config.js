import { defineConfig, resolveConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
    plugins: [ solid() ],
    build: {
        manifest: true,
        minify: false,        
        rollupOptions: {
            input: resolve(__dirname, "src/app.jsx"),
            preserveEntrySignatures: "exports-only",
            output: {
                entryFileNames: "bundle.js",
                assetFileNames: 'bundle.css',
                format: 'esm'
            }
        }
    }
});