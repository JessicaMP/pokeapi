<template lang="pug">
.fixed.bottom-0.p-5.bg-white.box__shadow.w-full
    .flex.justify-center.items-center
        button.p-3.w-72.flex.justify-center.items-center.rounded-full.text-white.block.text-lg.font-bold(type="button" :class="[all == true ? 'bg_red hover:bg-red-400': 'bg_ligth-grey hover:bg-gray-300', 'mx-2 md:mx-5']" @click="select('all')")
            ViewListIcon.h-7.w-7.mr-5
            p All
        button.p-3.w-72.flex.justify-center.items-center.rounded-full.text-white.block.text-lg.font-bold(type="button" :class="[favorites == true ? 'bg_red hover:bg-red-400': 'bg_ligth-grey hover:bg-gray-300', 'mx-2 md:mx-5']" @click="select('favorites')") 
            StarIcon.h-7.w-7.mr-5
            p Favorites
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { StarIcon, ViewListIcon } from '@heroicons/vue/solid'
import { mapActions } from 'vuex'

export default defineComponent({
    name: "Footer",
    components: {
        StarIcon,
        ViewListIcon
    },
    data(){
        return {
            all: true,
            favorites: false
        }
    },
    methods: {
        ...mapActions(["GET_FAVORITES_ALL_ITEMS"]),
        select(val){
            let value = val === 'all' ? 'favorites' : 'all'
            this[val] = true
            this[value] = false
            console.log({val})
            let status = val === 'all' ? false : true
            this.GET_FAVORITES_ALL_ITEMS(status)
        }
    }
})
</script>
<style lang="sass">
.box__shadow
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05)
</style>