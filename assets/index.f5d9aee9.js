var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&l(e,o,t[o]);if(s)for(var o of s(t))a.call(t,o)&&l(e,o,t[o]);return e},i=(e,s)=>t(e,o(s));import{d as c,r as d,o as m,c as u,a as p,p as g,b as h,t as f,w as y,e as b,f as x,m as w,g as T,h as _,v,i as E,j as S,k as I,l as A,n as M,q as k,u as j,F as C,s as O,x as D,y as L,z as G,A as N,B as P,C as U}from"./vendor.50b28a72.js";var $=c({name:"App"});const B={class:"bg_light-grey3 min-h-screen\tmx-auto"};$.render=function(e,t,o,s,n,a){const l=d("router-view");return m(),u("div",B,[p(l)])};var W=c({name:"Loader"});const F={class:"wrapper"},V=p("div",{class:"pokeball"},null,-1);W.render=function(e,t,o,s,n,a){return m(),u("div",F,[V])};var q=c({name:"Welcome",components:{Loader:W},data:()=>({title:"Welcome to Pokédex",text:"The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",showLoader:!1}),methods:{updateLoader(){this.showLoader=!0;const e=()=>this.$router.push("/list");setTimeout((function(){e()}),500)}}});const z=y();g("data-v-2a5d195a");const H={class:"flex justify-center flex-col justify-items-center h-full mx-5"},J={key:1},R=p("figure",{class:"flex justify-center mt-5"},[p("img",{class:"md:max-w-lg",src:"/pokemons/assets/pikachu.288b0930.png"})],-1),K={class:"text-center color_black"},X={class:"text-2xl font-bold my-14"},Y={class:"flex justify-center"},Q={class:"max-w-xl"},Z={class:"text-lg color_grey"},ee={class:"my-24 flex justify-center"};h();const te=z(((e,t,o,s,n,a)=>{const l=d("Loader");return m(),u("div",H,[e.showLoader?(m(),u(l,{key:0})):(m(),u("div",J,[R,p("div",K,[p("h1",X,f(e.title),1),p("div",Y,[p("div",Q,[p("p",Z,f(e.text),1)])])]),p("div",ee,[p("button",{class:"rounded-full bg_red p-4 text-white block text-lg px-5 font-bold",type:"button",onClick:t[1]||(t[1]=(...t)=>e.updateLoader&&e.updateLoader(...t))},"Get started")])]))])}));q.render=te,q.__scopeId="data-v-2a5d195a";var oe=c({name:"Home"});const se={class:"about"},ne=p("h1",null,"Hi, allolouw",-1);oe.render=function(e,t,o,s,n,a){return m(),u("div",se,[ne])};var ae=c({name:"About"});const le={class:"about"},re=p("h1",null,"This is an about page",-1);ae.render=function(e,t,o,s,n,a){return m(),u("div",le,[re])};var ie=c({name:"Cart"});const ce={class:"about"},de=p("h1",null,"This is an cart page",-1);ie.render=function(e,t,o,s,n,a){return m(),u("div",ce,[de])};var me=c({name:"BtnStart",props:{item:{type:Object,required:!1}},components:{StarIcon:b},methods:{toggle(e){this.$emit("toggle",e)}}});me.render=function(e,t,o,s,n,a){const l=d("StarIcon");return m(),u("button",{class:"rounded-full bg_dark-white p-2",onClick:t[1]||(t[1]=x((t=>e.toggle(e.item.status)),["prevent"]))},[p(l,{class:["h-7 w-7",[e.item.status?"color_light-orange":"color_ligth-grey"]]},null,8,["class"])])};var ue=c({name:"BoxName",props:{item:{type:Object,required:!1},index:{type:Number,required:!1},list:{type:Array,required:!1}},components:{BtnStart:me},methods:i(r({},w(["UPDATE_ITEMS","GET_ONE_ITEM"])),{toggle(e){let t=!e,o=this.index||0;const s=JSON.parse(JSON.stringify(this.list));s[o].status=t,this.UPDATE_ITEMS(s)},async selectItem(e){await this.GET_ONE_ITEM(e),this.$emit("selectItems")}})});const pe={class:"flex justify-center justify-items-center cursor-pointer"},ge={class:"w-4/5 md:w-3/5"},he={class:"flex justify-between p-4 bg-white my-2 rounded-md color_black font-medium items-center"};ue.render=function(e,t,o,s,n,a){const l=d("BtnStart");return m(),u("div",pe,[p("div",ge,[p("div",he,[p("h1",{class:"capitalize text-xl w-full",onClick:t[1]||(t[1]=x((t=>e.selectItem(e.item.name)),["prevent"]))},f(e.item.name),1),p(l,{item:e.item,onToggle:e.toggle},null,8,["item","onToggle"])])])])};var fe=c({name:"Search",components:{SearchIcon:T},props:{word:{type:String,required:!1}},computed:{search:{get(){return this.word},set(e){this.$emit("newWord",e)}}},methods:i(r({},w(["SEARCH_ITEMS"])),{changeValue(e){this.SEARCH_ITEMS(e)}})});const ye={class:"flex justify-center"},be={class:"w-4/5 md:w-3/5"},xe={class:"bg-white flex items-center my-12 mb-18 box__shadow"},we={class:"max-w-4xl p-2"},Te={class:"rounded-full p-2 w-12 h-12 flex items-center justify-center hover:bg-gray-100 focus:outline-none"};fe.render=function(e,t,o,s,n,a){const l=d("SearchIcon");return m(),u("div",ye,[p("div",be,[p("div",xe,[p("div",we,[p("button",Te,[p(l,{class:"h-6 w-6 color_ligth-grey"})])]),_(p("input",{class:"rounded-l-full w-full py-4 text-gray-700 leading-tight focus:outline-none","onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),onChange:t[2]||(t[2]=t=>e.changeValue(e.search)),id:"search",type:"text",placeholder:"Search"},null,544),[[v,e.search]])])])])};var _e=c({name:"Footer",components:{StarIcon:b,ViewListIcon:E},data:()=>({all:!0,favorites:!1}),methods:i(r({},w(["GET_FAVORITES_ALL_ITEMS"])),{select(e){let t="all"===e?"favorites":"all";this[e]=!0,this[t]=!1,console.log({val:e});let o="all"!==e;this.GET_FAVORITES_ALL_ITEMS(o)}})});const ve={class:"fixed bottom-0 p-5 bg-white box__shadow w-full"},Ee={class:"flex justify-center items-center"},Se=p("p",null,"All",-1),Ie=p("p",null,"Favorites",-1);_e.render=function(e,t,o,s,n,a){const l=d("ViewListIcon"),r=d("StarIcon");return m(),u("div",ve,[p("div",Ee,[p("button",{class:["p-3 w-72 flex justify-center items-center rounded-full text-white block text-lg font-bold",[1==e.all?"bg_red hover:bg-red-400":"bg_ligth-grey hover:bg-gray-300","mx-2 md:mx-5"]],type:"button",onClick:t[1]||(t[1]=t=>e.select("all"))},[p(l,{class:"h-7 w-7 mr-5"}),Se],2),p("button",{class:["p-3 w-72 flex justify-center items-center rounded-full text-white block text-lg font-bold",[1==e.favorites?"bg_red hover:bg-red-400":"bg_ligth-grey hover:bg-gray-300","mx-2 md:mx-5"]],type:"button",onClick:t[2]||(t[2]=t=>e.select("favorites"))},[p(r,{class:"h-7 w-7 mr-5"}),Ie],2)])])};var Ae=c({name:"ModalDetail",props:{openModal:{type:Boolean,required:!1}},components:{BtnStart:me,XCircleIcon:S},computed:i(r({},I(["item","list"])),{isDialogOpen:{get(){return this.openModal},set(e){this.$emit("closeModal",e)}}}),methods:i(r({},w(["UPDATE_ITEMS","UPDATE_ITEM"])),{getTypes:e=>e.length>0?e.map((e=>e.type.name)).toString().replace(/,/gi,", "):"Ninguno",toggle(e){let t=this.list.findIndex((e=>e.name===this.item.name)),o=!this.list[t].status;const s=JSON.parse(JSON.stringify(this.list));s[t].status=o,this.UPDATE_ITEMS(s);let n=!e;const a=JSON.parse(JSON.stringify(this.item));a.status=n,this.UPDATE_ITEM(a)},copyContent(e){const{name:t,weight:o,height:s,sprites:n}=e;let a=[`name: ${t}`,`weight: ${o}`,`height: ${s}`,`types: ${this.getTypes(e.types)}`,`photo: ${n.other.dream_world.front_default}`].toString().replace(/,/gi,", ");navigator.clipboard.writeText(a).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Error",e)}))},escapeContent(e){console.log({val:e})}})});const Me={class:"py-8 flex justify-center background_image bg-no-repeat bg-cover bg-center"},ke={class:"p-8"},je={class:"py-5 border_bottom_grey"},Ce=p("strong",null,"Name",-1),Oe={class:"py-5 border_bottom_grey"},De=p("strong",null,"Weight",-1),Le={class:"py-5 border_bottom_grey"},Ge=p("strong",null,"Height",-1),Ne={class:"py-5 mb-5 border_bottom_grey"},Pe=p("strong",null,"Types",-1),Ue={class:"flex justify-between items-center"};Ae.render=function(e,t,o,s,n,a){const l=d("XCircleIcon"),r=d("BtnStart");return m(),u("div",{class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none justify-center items-center flex","x-data":"{ 'isDialogOpen': false }",onKeydown:t[5]||(t[5]=(...t)=>e.escapeContent&&e.escapeContent(...t))},[p("div",{class:["fixed z-50 relative my-6 mx-auto w-4/5 md:w-3/5",{"absolute inset-0 z-10 flex items-start justify-center focus:outline-none":e.isDialogOpen}],"x-show":"isDialogOpen"},[p("div",{class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none color_grey text-lg rounded focus:outline-none","x-show":"isDialogOpen",onClick:t[3]||(t[3]=t=>e.isDialogOpen=!1)},[p("button",{class:"rounded-full absolute right-3 top-3 text-white",onClick:t[1]||(t[1]=t=>e.$emit("closeModal",!1))},[p(l,{class:"h-7 w-7"})]),p("figure",Me,[p("img",{class:"md:w-40",src:e.item.sprites.other.dream_world.front_default},null,8,["src"])]),p("div",ke,[p("p",je,[Ce,A(": "+f(e.item.name),1)]),p("p",Oe,[De,A(": "+f(e.item.weight),1)]),p("p",Le,[Ge,A(": "+f(e.item.height),1)]),p("p",Ne,[Pe,A(": "+f(e.getTypes(e.item.types)),1)]),p("div",Ue,[p("button",{class:"rounded-full bg_red p-2 text-white block text-lg px-5 font-bold",type:"button",onClick:t[2]||(t[2]=t=>e.copyContent(e.item))},"Share to my friends"),p(r,{item:e.item,onToggle:e.toggle},null,8,["item","onToggle"])])])])],2),p("div",{class:"opacity-60 fixed inset-0 z-40 bg-black",onKeydown:t[4]||(t[4]=M(((...t)=>e.escapeContent&&e.escapeContent(...t)),["escape"]))},null,32)],32)};var $e=c({name:"List",components:{ModalDetail:Ae,BoxName:ue,Search:fe,Footer:_e},data:()=>({word:"",openModal:!1}),computed:r({},I(["list"])),methods:i(r({},w(["GET_ITEMS"])),{newWord(e){this.word=e},getItems(){this.GET_ITEMS()},selectItems(){this.openModal=!0},closeModal(e){this.openModal=e},escapeContent(e){console.log({val:e})}}),setup(){const e=j();k((()=>{e.dispatch("GET_ITEMS")}))}});const Be={key:1,class:"flex justify-center justify-items-center flex-col mx-auto text-center color_black"},We=p("h1",{class:"text-4xl my-5"}," Uh-oh!",-1),Fe=p("p",{class:"color_grey text-xl mb-10"},"You look lost on your journey!",-1);$e.render=function(e,t,o,s,n,a){const l=d("Search"),r=d("BoxName"),i=d("Footer"),c=d("ModalDetail");return m(),u("div",{class:"flex justify-center justify-items-center flex-col mx-auto",onKeydown:t[2]||(t[2]=M(((...t)=>e.escapeContent&&e.escapeContent(...t)),["escape"]))},[p(l,{word:e.word,onNewWord:e.newWord},null,8,["word","onNewWord"]),e.list.length>0?(m(!0),u(C,{key:0},O(e.list,((t,o)=>(m(),u("div",{class:"mb-2",key:o},[p(r,{item:t,index:o,list:e.list,onSelectItems:e.selectItems},null,8,["item","index","list","onSelectItems"])])))),128)):(m(),u("div",Be,[We,Fe,p("button",{class:"rounded-full bg_red p-4 text-white block text-lg px-5 font-bold hover:bg-red-400",type:"button",onClick:t[1]||(t[1]=t=>(e.getItems(),e.newWord("")))},"Go back home")])),p(i),e.openModal?(m(),u(c,{key:2,onCloseModal:e.closeModal,openModal:e.openModal},null,8,["onCloseModal","openModal"])):D("",!0)],32)};const Ve=[{path:"/",name:"welcome",component:q},{path:"/",name:"home",component:oe},{path:"/about",name:"about",component:ae},{path:"/cart",name:"cart",component:ie},{path:"/list",name:"list",component:$e}],qe=L({history:G("/pokemons/"),routes:Ve});var ze,He;(He=ze||(ze={})).SET_DATA="SET_DATA",He.SET_DATA_ITEM="SET_DATA_ITEM";const Je={[ze.SET_DATA](e,t){e.list=t},[ze.SET_DATA_ITEM](e,t){e.item=t}},Re="https://pokeapi.co/api/v2";var Ke,Xe;(Xe=Ke||(Ke={})).GetItems="GET_ITEMS",Xe.UpdateItems="UPDATE_ITEMS",Xe.SearchItems="SEARCH_ITEMS",Xe.GetStatusItem="GET_FAVORITES_ALL_ITEMS",Xe.GetOneItem="GET_ONE_ITEM",Xe.UpdateItem="UPDATE_ITEM";const Ye=P({state:{list:[],item:{}},actions:{async[Ke.GetItems]({commit:e}){let{data:{results:t}}=await N.get(`${Re}/pokemon/`),o=t.map((e=>(e.status=!1,e)));return e(ze.SET_DATA,o),o},async[Ke.UpdateItems]({commit:e},t){e(ze.SET_DATA,t)},async[Ke.SearchItems]({dispatch:e,commit:t},o){let s=(await e(Ke.GetItems)).filter((e=>!!e.name.toLowerCase().includes(o.toLowerCase())));t(ze.SET_DATA,s)},async[Ke.GetStatusItem]({state:e,commit:t},o){let s=e.list.filter((e=>e.status==o));t(ze.SET_DATA,s)},async[Ke.GetOneItem]({commit:e},t){let{data:o}=await N.get(`${Re}/pokemon/${t}/`),s=o;s.status=!1,e(ze.SET_DATA_ITEM,s)},async[Ke.UpdateItem]({commit:e},t){e(ze.SET_DATA_ITEM,t)}},mutations:Je});U($).use(qe).use(Ye).mount("#app");
