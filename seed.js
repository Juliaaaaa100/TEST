// import requiring modules 
const mongoose = require('mongoose')
const Todo = require('./models/todos')

const mongoURI = 'mongodb://127.0.0.1:27017/db2'
const db = mongoose.connection

// connect to the database
mongoose.connect(mongoURI)

Todos.create([
    {
      title: 'Buy groceries',
      description: 'Go to the supermarket and buy some groceries.',
      completed: false,
      createdAt: {type: Date, default:Date.now},
      todoByDate: { type:Date, require:true }
    },
    {
      title: 'Finish coding project',
      description: 'Complete the coding project and submit it.',
      completed: false,
      createdAt: {type: Date, default:Date.now},
      todoByDate: { type:Date, require:true }
    },
    
  ]).then((todo) => {
    console.log(todo)
    // close db
    db.close()
  })