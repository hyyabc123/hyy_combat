<template>
    <header class="header">
        <span class="iconfont icon-arrow-left" @click="gofn"></span>
        <div></div>
        <span class="add"><slot>加班/休假</slot></span>
        <div></div>
        <span class="iconfont icon-fangdajing"></span>
    </header>
</template>
<script>
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
        gofn(){

            this.$router.go(-1)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../uitle/scss/_mixin.scss";
    @import "../uitle/fonts/iconfont.css"; 
    @import "../uitle/scss/common.scss";
    @import "../static/css/style.scss"
</style>