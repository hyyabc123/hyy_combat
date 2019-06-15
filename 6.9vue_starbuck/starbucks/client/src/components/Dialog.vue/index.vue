<template>
    <div class="sdialog" v-if="open">
        {{title}}
    </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    components:{

    },
    data(){
        return {
            time:null,
            open:true
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        
    },
    mounted(){
        this.timer=setTimeout(()=>{
            this.open=false
        },2000)
    },
    beforeDestroy(){
        clearTimeout(this.timer)
    }
}
</script>
<style scoped lang="">
    .sdialog{
        position: fixed;
        width: 40%;
        height: 10%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,.6);
        color: white;
        font-size: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
</style>