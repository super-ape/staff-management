<template>
  <div>
    empId: <input type="text" v-model="empId"><br>
    empName: <input type="text" v-model="empName"><br>
    gender: 
    <input type="radio" v-model="gender" value="M" name="a"> 男
    <input type="radio" v-model="gender" value="F" name="a"> 女<br>
    age: <input type="text" v-model="age"><br>
    postion: 
    <select v-model="postion">
      <option value="销售">销售</option>
      <option value="人事">人事</option>
      <option value="技术">技术</option>
      <option value="财务">财务</option>
    </select><br>
    telephone: <input type="text" v-model="telephone"><br>
    address: <input type="text" v-model="address"><br>
    edu: 
    <select v-model="edu">
      <option value="高中以下">高中以下</option>
      <option value="本科">本科</option>
      <option value="大专">大专</option>
      <option value="研究生">研究生</option>
    </select><br>
    <div class="button"><button class="btn btn-info" @click="add">添加</button></div>
  </div>
</template>

<script>
import Emp from '../entity/emp.js'
import Util from '../API/index.js'

export default {
    data() {
        return { 
            empId: null,
            empName: '',
            gender: 'M',
            age: null,
            postion : '销售',
            telephone: '',
            address: '',
            edu: '高中以下'
        }
    },
    methods: {
        add(){
            let emp = new Emp(
                this.empId,
                this.empName,
                this.gender,
                this.age,
                this.postion,
                this.telephone,
                this.address,
                this.edu
            );
            Util.addEmp(emp).then(data=>{
                console.log(data);
                this.$router.push('/');
            });
        }
    },
}
</script>

<style scoped>
    *{margin: 10px 0;}
    div{width:30%;text-align: left;margin: 0 auto;}
    .button{text-align: center;}
    button{padding: 8px 50px;}
    input[type=text]{width: 100%;height: 40px;}
</style>