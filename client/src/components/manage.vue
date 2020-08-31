<template>
    <div class="chapter">
        <div v-if="mess==null"></div>
        <div v-else id="text">
            <div id="fix">
                <div class="close" @click="close">X</div>
                <h1 style="display:inline-block" ></h1>
                <div><span>empId:</span><input type="text" v-model="mess.empId" disabled></div>
                <div><span>empName:</span><input type="text" v-model="mess.empName"></div>
                <div><span>gender:</span><input type="text" v-model="mess.gender" disabled></div>
                <div><span>age:</span><input type="text" v-model="mess.age"></div>
                <div>
                    <span>postion:</span>
                    <select v-model="mess.postion" style="width:203px;height:29px">
                        <option value="销售">销售</option>
                        <option value="人事">人事</option>
                        <option value="技术">技术</option>
                        <option value="财务">财务</option>
                    </select>
                </div>
                <div><span>telephone:</span><input type="text" v-model="mess.telephone"></div>
                <div><span>address:</span><input type="text" v-model="mess.address"></div>
                <div>
                    <span>edu:</span>
                    <select v-model="mess.edu" style="width:203px;height:29px">
                        <option value="高中以下">高中以下</option>
                        <option value="本科">本科</option>
                        <option value="大专">大专</option>
                        <option value="研究生">研究生</option>
                    </select>
                </div>    
            </div>
            <div>
                <button class="button" @click="alter(mess.empId)">确认修改</button>&nbsp;
                <button @click="del(mess.empId)">确认删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import util from '../API/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState(['mess','emps'])
    },
    beforeRouteEnter (to,from,next) {
        next(vm=>{
            if(vm.mess==null){
                vm.$router.push('/list');
            }
        });
    },
    methods: {
        ...mapMutations(["changeEmp"]),
        close(){
            this.$router.back();
        },
        del(id){
            util.delEmp(id);
            this.$router.push('/list');
        },
        alter(id){
            let alter = this.mess;
            util.alterEmp(id,alter);
            this.changeEmp({mess:alter});
            this.$router.push('/list');
        }
    },
}
</script>

<style scoped>
*{margin:5px 0;}
.chapter{
    color: white;
    position: absolute;
    top: 195px;
    left: 440px;
    right: 0;
    bottom: 0;
    z-index: 999;
    width: 950px;
    height: 520px;
    background-color: rgba(0, 0, 0,0.7);
}
.close{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    left:824px;
    cursor: pointer;

}
#fix{position: fixed;}
#fix>div{margin-left: 66px;}
span{display: inline-block;width: 100px;}
.button{margin-left: 400px;margin-top: 400px;}
</style>