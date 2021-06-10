import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  pugPlugin  from  "vite-plugin-pug"
import path from 'path'
const  options  =  {  pretty : true  }
const  locals  =  {  nombre : "Mi Pug"  }

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     // '@/': `${path.resolve(__dirname, 'src')}/`
  //   }
  // },
  plugins: [
    vue(),
    pugPlugin( options , locals ),
  ]
})
