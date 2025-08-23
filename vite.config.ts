import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
    build: {
        assetsDir: '',
        rollupOptions: {
            output: {
                assetFileNames: '[name].[ext]',
                sourcemap: false, 
            },
        },
    },
    base: mode === 'github-actions' ? '/mahjong-pokemon' : undefined,
}));

