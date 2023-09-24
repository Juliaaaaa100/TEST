const mongoose = require('mongoose')
// const router = require('../controllers/todos')

const todoSchema = new mongoose.Schema( {
    title: {type: String, require: true}, 
    description: {type: String, require:true},
    completed: Boolean,  
    createdAt: {type: Date, default:Date.now},
    todoByDate: { type:Date, require:true }
    
})




const Todo = mongoose.model('toDo', todoSchema)

module.exports = Todo 