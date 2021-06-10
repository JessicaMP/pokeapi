<template lang="pug">
.flex.justify-center.flex-col.justify-items-center.h-full
    figure.flex.justify-center.mt-5
        img(src="../assets/images/pikachu.png" class="md:max-w-lg")
    div.text-center.color_black
        h1.text-2xl.font-bold.my-14 {{title}}
        .flex.justify-center
            .max-w-xl
                p.text-lg.color_grey {{text}}
    .my-24.flex.justify-center
        button.rounded-full.bg_red.p-4.text-white.block.text-lg.px-5.font-bold(type="button") Get started
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Welcome',
    data() {
        return {
            title: "Welcome to Pokédex",
            text: "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world."
        }
    }
})
</script>
<style lang="sass" scoped>
</style>