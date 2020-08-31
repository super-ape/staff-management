<template>
    <div>
        <div class="container">
            <div class="row" v-for="(emp,i) in emps" :key="i">
                <div class="col-sm-1">{{emp.empId}}</div>
                <div class="col-sm-1">{{emp.empName}}</div>
                <div class="col-sm-1">{{emp.gender=='M'?'男':'女'}}</div>
                <div class="col-sm-1">{{emp.age}}</div>
                <div class="col-sm-1">{{emp.postion}}</div>
                <div class="col-sm-2">{{emp.telephone}}</div>
                <div class="col-sm-2">{{emp.address}}</div>
                <div class="col-sm-1">{{emp.edu}}</div>
                <div class="col-sm-1"><span @click="manage(emp)">管理</span></div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import util from '../API/index.js';
import {mapMutations,mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['emps','mess'])
    },
    beforeRouteEnter(to,from,next) {
        next(vm=>{
            if(vm.mess!=null){
                vm.die = vm.mess;
            }
            vm._getAllEmps();
        });
    },
    beforeRouteUpdate (to,from,next) {
        next(this._getAllEmps());
    },
    methods: {
        ...mapMutations(["setAllEmps","changeEmp"]),
        _getAllEmps(){
            util.getAllEmps().then(res=>{
                this.setAllEmps({
                emps: res
                });
            });
        },
        manage(emp){
            this.changeEmp({mess:emp});
            this.$router.push({
                name: 'manage',
                params: {
                    emp:emp
                }
            });
        },
    },
}
</script>

<style scoped>
.row>div{
    border:1px solid red;
}
span{
    color: darkgrey;
    text-decoration: underline;
}
</style>