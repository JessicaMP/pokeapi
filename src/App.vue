<template>
<div class="bg_light-grey3 min-h-screen	mx-auto">
  <router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>