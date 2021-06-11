import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  pugPlugin  from  "vite-plugin-pug"
const  options  =  {  pretty : true  }
const  locals  =  {  nombre : "Mi Pug"  }

export default defineConfig({
  base: "/pokemons/",
  plugins: [
    vue(),
    pugPlugin( options , locals ),
  ],
})
