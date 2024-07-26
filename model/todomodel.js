const mongoose=require('mongoose')

const todolist=new mongoose.Schema({
     text : {
         type : String,
         require : true
     }
})

module.exports=mongoose.model('Todo',todolist)