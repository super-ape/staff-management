import {ajax} from 'jquery';

// 查
function getAllEmps(){
    return new Promise((resolve,reject)=>{
        ajax({
            url:'http://localhost:4000/getAll',
            success(result){
                if(result.status=="SUCCESS"){
                    resolve(result.data);
                }else{
                    reject('error');
                }
            },
            error(){
                reject('error');
            }
        });
    });
}

// 增
function addEmp(emp){
    return new Promise((resolve,reject)=>{
        ajax({
            url:'http://localhost:4000/add',
            data:{emp:emp},
            success(result){
                console.log(result);
                resolve(result);
            },
            error(){
                reject('error');
            }
        });
    });
}

// 删
function delEmp(id){
    return new Promise((resolve)=>{
        ajax({
            url:'http://localhost:4000/del',
            data: {id:id},
            success(result){
                console.log(result);
                resolve(result);
            },
        });
    });
}

// 改
function alterEmp(id,alter){
    return new Promise((resolve)=>{
        ajax({
            url:'http://localhost:4000/alter',
            data: {id:id,alter:alter},
            success(result){
                console.log(result);
                resolve(result);
            },
        });
    });
}

export default{
    getAllEmps,
    addEmp,
    delEmp,
    alterEmp
}