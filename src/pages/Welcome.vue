<template lang="pug">
.flex.justify-center.flex-col.justify-items-center.h-full.mx-5
    Loader(v-if="showLoader")
    div(v-else)
        figure.flex.justify-center.mt-5
            img(src="../assets/images/pikachu.png" class="md:max-w-lg")
        div.text-center.color_black
            h1.text-2xl.font-bold.my-14 {{title}}
            .flex.justify-center
                .max-w-xl
                    p.text-lg.color_grey {{text}}
        .my-24.flex.justify-center
            //- @click="$router.push('/list')"
            button.rounded-full.bg_red.p-4.text-white.block.text-lg.px-5.font-bold(type="button" @click="updateLoader") Get started
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Loader from '../components/loader.vue'

export default defineComponent({
    name: 'Welcome',
    components: {
        Loader
    },
    data() {
        return {
            title: "Welcome to Pokédex",
            text: "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",
            showLoader: false
        }
    },
    methods: {
        updateLoader(){
            this.showLoader = true
            const getList = () => this.$router.push('/list')
            setTimeout(function(){ 
                getList()
            }, 500)
        }
    }
})
</script>
<style lang="sass" scoped>
</style>