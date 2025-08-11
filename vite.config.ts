import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        assetsDir: '',
        rollupOptions: {
            output: {
                assetFileNames: '[name].[ext]',
                sourcemap: false, 
            },
        },
    },
});

