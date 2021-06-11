<template lang="pug">
.flex.justify-center.justify-items-center.cursor-pointer
    div(class="w-4/5 md:w-3/5")
        .flex.justify-between.p-4.bg-white.my-2.rounded-md.color_black.font-medium.items-center
            h1.capitalize.text-xl.w-full(@click.prevent="selectItem(item.name)") {{item.name}}
            BtnStart(:item="item" @toggle="toggle")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import BtnStart from './btnStart.vue'

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
        BtnStart
    },
    methods: {
        ...mapActions(["UPDATE_ITEMS", "GET_ONE_ITEM"]),
        toggle(status: boolean) {
            let value = !status
            let position = this.index || 0
            const newList = JSON.parse(JSON.stringify(this.list))
            newList[position].status = value
            this.UPDATE_ITEMS(newList)
        },
        async selectItem(name: string) {
            await this.GET_ONE_ITEM(name)
            this.$emit("selectItems")
        }
    }
})
</script>