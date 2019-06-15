<template>
    <div class="wrap detail">
        <Head>
            <p>{{$route.params.type=='overtime'?'加班申请表':'休假申请表'}}</p>
        </Head>
        <div  class="detailhead">
            <!-- <img  v-for="(item,index) in detaildata.annex" :key=index :src="'http://localhost:3000'+`${item}`" /> -->
            <div class="dehead">
                <div class="deheadbotton">
                    <dl>
                        <dt>
                            <div class="img">
                                <img :src="listdata.avatar" alt="">
                            </div>
                        </dt>
                        <dd>
                            <p>
                                <span class="first">申请人姓名</span>
                                <span>{{listdata.nickname}}</span>
                                <span></span>
                            </p>             
                            <p>
                                <span class="first">直接主管</span>
                                <span>秦义超</span>
                                <span></span>
                            </p>             
                        </dd>
                    </dl>
                    <span class="iconfont icon-xiangzuo"></span>
                </div>
                <div class="bb">

                </div>
            </div>
            
            <div class="bottomdetail">
                <div class="msg">
                    <p class="msgtit">
                        申请信息
                    </p>
                    <!-- <p>
                        <span>{{tit}}日期</span>
                        <span class="ms">
                            <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </span>
                    </p> -->
                    <p>
                        <span>{{tit}}类型</span>
                        <span class="ms">
                            <select v-model='sele' @change="seleFn">
                                <option value=-1>选择类型</option>
                                <option v-for="(item,index) in this[this.$route.params.type+'Type']" :key=index>
                                    {{item.title}}
                                </option>
                            </select>
                        </span>
                    </p>
                    <p>
                        <span>{{tit}}起始时间</span>
                        <span class="ms">
                             <!-- <el-time-picker
                                v-model="starttime"
                                placeholder="开始时间">
                            </el-time-picker> -->
                            <el-date-picker
                                v-model="starttime"
                                type="datetime"
                                placeholder="选择日期时间"
                                align="right"
                                >
                            </el-date-picker>

                        </span>
                    </p>
                    <p>
                        <span>{{tit}}截止时间</span>
                        <span class="ms">
                            <!-- <el-time-picker
                                v-model="endtime"
                                @change="endfn"
                                placeholder="终止时间">
                            </el-time-picker> -->
                            <el-date-picker
                                v-model="endtime"
                                type="datetime"
                                placeholder="选择日期时间"
                                align="right"
                                @change="endfn"
                                >
                            </el-date-picker>
                        </span>
                    </p>
                    <p>
                        <span>共计时数</span>
                        <span class="ms">{{tims}}天</span>
                    </p>
                </div>
                <div class="work">
                    <p class="work_k">
                        {{tit}}事由
                    </p>
                    <div>
                        <input type="text" v-model="text">
                    </div>
                </div>
                <div class="up">
                    <p class="upimg">
                        <span class="iconfont icon-tianjia"></span>
                        <span>上传附件</span>
                    </p>
                    <div class="imgs">
                        <!-- <img v-for="(item,index) in detaildata.annex" :key=index :src="'http://localhost:3000'+`${item}`" alt=""> -->
                        <ul>           
                            <li v-for="(item,index) in picArr" 

                            :key=index
                            >
                                <img :src="'http://localhost:3000'+item" alt="">
                            </li>                 
                            <li v-if='open'>
                                <div>+</div>
                                <input type="file" @change="upImgFn" ref='filebtn'>     
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tnt">
                    <p>1.对实行埃里克到家了卡萨经典款垃圾啊数量肯定</p>
                    <p>2.对实行埃里克到家了卡萨经典款垃圾啊数量肯定阿萨德</p>
                </div>
            </div>
             
        </div>
        <div class="footer">
            <span class="out">取消</span>
            <span class="sub" @click="submitFn">提交</span>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
import IsFile from "./ischeck"
import api from "../../api/index"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            value2:'',
            value1:"",
            starttime:'',
            endtime:"",
            sele:'',
            overtimeType:[
                {
                    title:'双休日加班',
                    id:1
                },
                {
                    title:'节假日加班',
                    id:2
                },
                {
                    title:'工作日加班',
                    id:3
                },
            ],
            vacationType:[
                {
                    title:'年假',
                    id:1
                },
                {
                    title:'调休',
                    id:2
                }
            ],
            tims:0,
            picArr:[],
            open:true,
            text:'',
            id:null
        }
    },
    computed:{
        ...mapState('Info',['listdata']),
        tit(){
            return this.$route.params.type=='overtime'? '加班' : "休假"
        }
    },
    watch:{
        picArr(val){
            if(val.length>=2){
                this.open=false
            }
        }
    },
    methods:{
        endfn(e){
            let n =(new Date(e)*1-new Date(this.starttime)*1)/3600000/24
            if(n<0){
                this.$alert('操作不合法')
                return
            }
            this.tims= n.toFixed(1)
        },
        upImgFn(e){
            let files=this.$refs.filebtn.files[0]
            let ischeck=new IsFile(files,{
                type:['jpg','png','gif','jpeg'],
                size:1
            })
            if(ischeck.isType()&&ischeck.isSize()){
                let  userfile=new FormData()
                userfile.append('file',files)
                api.commitFile(userfile).then((res)=>{
                    this.picArr.push(res.url)
                })
            }else{
                this.$alert('文件不符合')
            }
        },
        submitFn(){
            let options={
                annex:this.picArr,
                describe:this.text,
                endTime:this.endtime,
                startTime:this.starttime,
                type:this.id
            }
            if(options.startTime!='' && options.startTime!=''&& options.type!=null){
                api[this.$route.params.type+'Submit'](options).then((res)=>{
                    if(res.code==1){
                        this.$router.go(-1)
                    }
                })
            }else{
                this.$alert('请输出必填项')
            }
            

        },
        seleFn(){
            this.id=this[this.$route.params.type+'Type'].find(item=>item.title==this.sele).id
        }
    },
    created(){

    },
    mounted(){
        
    }   
}
</script>
<style scoped lang="scss">
    @import "../../uitle/scss/_mixin.scss";
    @import "../../uitle/fonts/iconfont.css"; 
    @import "../../uitle/scss/common.scss";
    @import "../../static/css/style.scss";
</style>