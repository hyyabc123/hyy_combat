import Header from "../components/Header";
import Dialog from "../components/Dialog.vue/index"
export default {
    install(Vue){
        Vue.component('Head',Header)
        let newDialog = Vue.extend(Dialog)
        Vue.prototype.$alert=(text)=>{
            let allDialog=new newDialog({
                propsData:{
                    title:text
                }
            })
            allDialog.$mount()
            document.body.appendChild(allDialog.$el)
        }
    }
}
