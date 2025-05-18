import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                calcular: resolve(__dirname, '01-Calcular.html'),
                megatext: resolve(__dirname, '02-MegaText.html')
            }
        }
    }
})