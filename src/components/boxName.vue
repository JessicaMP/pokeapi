<template lang="pug">
.flex.justify-center.justify-items-center
    div(class="w-4/5 md:w-3/5")
        .flex.justify-between.p-4.bg-white.my-2.rounded-md.color_black.font-medium.items-center
            h1.capitalize.text-xl {{item.name}}
            button.rounded-full.bg_dark-white.p-2(@click="toggle(item.status)")
                StarIcon.h-7.w-7(:class="[item.status ? 'color_light-orange': 'color_ligth-grey']")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import { StarIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: 'BoxName',
    props: {
        item: {
            type: Object,
            required: false
        },
        index: {
            type: Number,
            required: false
        },
        list: {
            type: Array,
            required: false
        }
    },
    components: {
        StarIcon
    },
    methods: {
        ...mapActions(["UPDATE_ITEMS"]),
        toggle(status: boolean) {
            let value = !status
            let position = this.index || 0
            const newList = JSON.parse(JSON.stringify(this.list))
            newList[position].status = value
            this.UPDATE_ITEMS(newList)
        }
    }
})
</script>