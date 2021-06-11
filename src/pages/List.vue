<template lang="pug">
.flex.justify-center.justify-items-center.flex-col.mx-auto(@keydown.escape="escapeContent")
    Search(:word="word" @newWord="newWord")
    .mb-2(v-if="list.length > 0" v-for="(item, i) in list" :key="i")
        BoxName(:item="item" :index="i" :list="list" @selectItems="selectItems")
    .flex.justify-center.justify-items-center.flex-col.mx-auto.text-center.color_black(v-else)
        h1.text-4xl.my-5  Uh-oh!
        p.color_grey.text-xl.mb-10 You look lost on your journey!
        button.rounded-full.bg_red.p-4.text-white.block.text-lg.px-5.font-bold(type="button" class="hover:bg-red-400" @click="getItems(),newWord('')") Go back home
    Footer
    ModalDetail(v-if="openModal" @closeModal="closeModal" :openModal="openModal")
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BoxName from "../components/boxName.vue"
import Search from "../components/search.vue"
import Footer from "../components/footer.vue"
import ModalDetail from "../components/modalDetail.vue"
import { mapState, mapActions, useStore } from 'vuex'

export default defineComponent({
    name: "List",
    components: {
        ModalDetail,
        BoxName,
        Search,
        Footer,
    },
    data() {
        return { 
            word: "",
            openModal: false
        }
    },
    computed: {
        ...mapState(["list"])
    },
    methods: {
        ...mapActions(["GET_ITEMS"]),
        newWord(val){
            this.word = val
        },
        getItems() {
            this.GET_ITEMS()
        },
        selectItems() {
            this.openModal = true
        },
        closeModal(value) {
            this.openModal = value
        },
        escapeContent(val){
            console.log({val})
        }
    },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch("GET_ITEMS")
        })
    }
})
</script>
