const { Router } = require('express')
const router = Router()
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../controllers/todocontrollers')

router.get('/', getTodo)
    .post('/save', saveTodo)
    .post('/update', updateTodo)
    .post('/delete', deleteTodo)

module.exports = router

