const express = require('express')
const router = express.Router()


// requiring the todo model
const Todo = require('../models/todo')

const bodyParser = require('body-parser')

// INDEX Route: displaying list of all to-dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 })
        res.render('index.ejs', { todos })
    } catch (err) {
        console.error('error', err)
        res.status(500).send('Error getting todos')
    }
})

// NEW ROUTE: render new.ejs  for creating a new to-do
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW ROUTE to render show.ejs
router.get('/:id', async (req, res) => {
    try {
        const foundTodo = await Todo.findById(req.params.id)
        
        res.render('show.ejs', 
        
        { todo: foundTodo })

    } catch (error) {
        console.error('error:  ', error)
        res.redirect('/todos')
    }
})

// EDIT ROUTE to render edit.ejs
router.get('/:id/edit', async (req, res) => {
    try {
        const foundTodo = await Todo.findById(req.params.id)
        res.render('edit.ejs',
        
        { todo: foundTodo })
    } catch (error) {
        console.error('Error fetching todo: ', error)
        res.redirect('/todos')
    }
})


// POST ROUTE 'create'
router.post('/', async (req, res) => {
    
    try {
        console.log('request body', req.body)

        // destructure properties
        const { title, description, todoByDate } = req.body 
        const newTodo = await Todo.create({
            title,
            description,
            todoByDate
        })
        res.redirect('/')
    } catch (err) {
        console.error('Error: ', err)
        res.status(500).send(err)
    }
})

// PUT ROUTE Edit/update a to-do
router.put('/:id', async (req, res) => {
    try {
        console.log( req.params.id);
        console.log( req.body)

        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                todoByDate: req.body.todoByDate
            },
            { new: true }
        )

        console.log('Updated Todo:', updatedTodo)

        res.redirect('/todos')

    } catch (err) {
        console.error( err)
        res.redirect('/todos')
    }
})



// DELETE Route 
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.redirect('/todos')
    } catch (err) {
        console.error('Error deleting todo: ', err)
        res.redirect('/todos')
    }
})

module.exports = router


