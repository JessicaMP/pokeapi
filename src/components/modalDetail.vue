<template lang="pug">
.overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.outline-none.justify-center.items-center.flex(x-data="{ 'isDialogOpen': false }" @keydown="escapeContent" )
    .fixed.z-50.relative.my-6.mx-auto(class="w-4/5 md:w-3/5" x-show="isDialogOpen" :class="{ 'absolute inset-0 z-10 flex items-start justify-center focus:outline-none': isDialogOpen }")
        .border-0.rounded-lg.shadow-lg.relative.flex.flex-col.w-full.bg-white.outline-none.color_grey.text-lg.rounded(class="focus:outline-none" x-show="isDialogOpen" @click.away="isDialogOpen = false")
            button.rounded-full.absolute.right-3.top-3.text-white(@click="$emit('closeModal', false)")
                XCircleIcon.h-7.w-7
            figure.py-8.flex.justify-center.background_image.bg-no-repeat.bg-cover.bg-center
                img(:src="item.sprites.other.dream_world.front_default" class="md:w-40")
            .p-8
                p.py-5.border_bottom_grey #[strong Name]: {{item.name}}
                p.py-5.border_bottom_grey #[strong Weight]: {{item.weight}}
                p.py-5.border_bottom_grey #[strong Height]: {{item.height}}
                p.py-5.mb-5.border_bottom_grey #[strong Types]: {{getTypes(item.types)}}
                .flex.justify-between.items-center
                    button.rounded-full.bg_red.p-2.text-white.block.text-lg.px-5.font-bold(type="button" @click="copyContent(item)") Share to my friends
                    BtnStart(:item="item" @toggle="toggle")
    .opacity-60.fixed.inset-0.z-40.bg-black(@keydown.escape="escapeContent")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import BtnStart from './btnStart.vue'
import {XCircleIcon} from '@heroicons/vue/solid'

export default defineComponent({
    name: "ModalDetail",
    props: {
        openModal: {
            type: Boolean,
            required: false
        }
    },
    components: {
        BtnStart,
        XCircleIcon
    },
    computed: {
        ...mapState(["item", "list"]),
        isDialogOpen: {
            get(){
                return this.openModal
            },
            set(newVal){
                this.$emit('closeModal', newVal)
            }
        }
    },
    methods: {
        ...mapActions(["UPDATE_ITEMS", "UPDATE_ITEM"]),
        getTypes(types){
            if(types.length > 0){
                return types.map((e) => (e.type.name)).toString().replace(/,/gi, ', ')
            }else {
                return 'Ninguno'
            }
        },
        toggle(status: boolean){
            let position = this.list.findIndex((e) => e.name === this.item.name)
            let content = this.list[position]
            let value = !content.status
            const newList = JSON.parse(JSON.stringify(this.list))
            newList[position].status = value
            this.UPDATE_ITEMS(newList)
            let itemStatus = !status
            const newItem = JSON.parse(JSON.stringify(this.item))
            newItem.status = itemStatus
            this.UPDATE_ITEM(newItem)
        },
        copyContent(item){
            const {name, weight, height, sprites} = item
            let types = this.getTypes(item.types)
            let photo = sprites.other.dream_world.front_default
            let contentText = [`name: ${name}`, `weight: ${weight}`, `height: ${height}`, `types: ${types}`, `photo: ${photo}`]
            let text = contentText.toString().replace(/,/gi, ', ')
            navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Error', err);
            });
        },
        escapeContent(val){
            console.log({val})
        }
    }
})
</script>
<style lang="sass">
.background_image
    background-image: url("../assets/images/background.png")
</style>