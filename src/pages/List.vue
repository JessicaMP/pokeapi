<template lang="pug">
.flex.justify-center.justify-items-center.flex-col.mx-auto
    Search(:word="word" @newWord="newWord")
    .mb-2(v-if="list.length > 0" v-for="(item, i) in list" :key="i")
        BoxName(:item="item" :index="i" :list="list")
    .flex.justify-center.justify-items-center.flex-col.mx-auto.text-center.color_black(v-else)
        h1.text-4xl.my-5  Uh-oh!
        p.color_grey.text-xl.mb-10 You look lost on your journey!
        button.rounded-full.bg_red.p-4.text-white.block.text-lg.px-5.font-bold(type="button" class="hover:bg-red-400" @click="getItems(),newWord('')") Go back home
    Footer
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import BoxName from "../components/boxName.vue"
import Search from "../components/search.vue"
import { mapState, mapActions } from 'vuex'
import Footer from "../components/footer.vue"

export default defineComponent({
    name: "List",
    components: {
        BoxName,
        Search,
        Footer
    },
    data() {
        return { word: "" }
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
