const express = require('express');
const {User} = require('./model');
const { response, raw } = require('express');
const app = express();

app.listen(4000);

app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
});

// 获取所有数据
app.get('/getAll',function(req,res){
    User.find(function(err,docs){
        if(err){
            res.send({status:'ERROR',data:null});
            return;
        }
        res.send({status:'SUCCESS',data:docs});
    });
});

// 添加数据
app.get('/add',function(req,res){
    let emp = req.query.emp;
    let o = new User(emp);
    o.save(function(err,docs){
        if(err){
            res.send({status:'ERROR'});
            return;
        }
        res.send({status:'SUCCESS'});
    });
});

// 删除数据
app.get('/del',function(req,respose){
    let id = req.query.id;
    User.deleteOne({empId:id},function(err,result){
        if(err){
            console.log(err);
            respose.send({status:'ERROR'});
            return;
        }
        respose.send({status:'SUCCESS'});
    });
});

// 修改数据
app.get('/alter',function(req,respose){
    let id = req.query.id;
    let alter = req.query.alter;
    User.updateOne({empId:id},{$set:alter},function(err,result){
        if(err){
            console.log(err);
            respose.send({status:'ERROR'});
            return;
        }
        respose.send({status:'SUCCESS'}); 
    });     
});








