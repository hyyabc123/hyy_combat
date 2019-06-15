<template>
    <div class="wrap search">
        <header>
            <input type="text" placeholder="搜索">
            <span>取消</span>
        </header>
        <p class="context">搜索指定内容</p>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions('Info',['testUserInfo'])
    },
    created(){
        this.testUserInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../uitle/scss/_mixin.scss";
    @import "../../uitle/fonts/iconfont.css"; 
    @import "../../uitle/scss/common.scss";
    @import "../../static/css/style.scss"
</style>