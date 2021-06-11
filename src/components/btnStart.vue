<template lang="pug">
button.rounded-full.bg_dark-white.p-2(@click.prevent="toggle(item.status)")
    StarIcon.h-7.w-7(:class="[item.status ? 'color_light-orange': 'color_ligth-grey']")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { StarIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: "BtnStart",
    props: {
        item: {
            type: Object,
            required: false
        }
    },
    components: {
        StarIcon
    },
    methods: {
        toggle(status: boolean) {
            this.$emit("toggle", status)
        }
    }
})
</script>
