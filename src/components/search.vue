<template lang="pug">
.flex.justify-center
    div(class="w-4/5 md:w-3/5")
        .bg-white.flex.items-center.my-12.mb-18.box__shadow
            .max-w-4xl.p-2
                button.rounded-full.p-2.w-12.h-12.flex.items-center.justify-center(class="hover:bg-gray-100 focus:outline-none")
                    SearchIcon.h-6.w-6.color_ligth-grey
            input.rounded-l-full.w-full.py-4.text-gray-700.leading-tight(
                v-model="search"
                @change="changeValue(search)"
                class="focus:outline-none" 
                id="search" 
                type="text" 
                placeholder="Search")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { mapActions } from 'vuex'

export default defineComponent({
    name: 'Search',
    components: {
        SearchIcon
    },
    props: {
       word: {
           type: String,
           required: false
       } 
    },
    computed: {
        search: {
            get() {
                return this.word
            },
            set(newVal){
                this.$emit("newWord", newVal)
            }
        }
    },
    methods: {
        ...mapActions(["SEARCH_ITEMS"]),
        changeValue(word: string) {
            this.SEARCH_ITEMS(word)
        }
    }
})
</script>
<style lang="sass">
.box__shadow
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04)
</style>