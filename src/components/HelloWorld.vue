<template lang='pug'>
h1.py-2.px-4.bg-green-500 {{ msg }}
p.py-2.px-4.bg-green-500 Recommended IDE setup:
  a(href="https://code.visualstudio.com/" target="_blank")  VSCode + 
    a(href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank") Vetur holi 
    | or 
    a(href="https://github.com/johnsoncodehk/volar" target="_blank") Volar
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

