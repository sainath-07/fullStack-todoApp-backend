const todomodel = require('../model/todomodel')
const todoModel = require('../model/todomodel')


const getTodo = async (req, res) => {

    const todo = await todomodel.find()
    res.send(todo)

}

const saveTodo = async (req, res) => {
    const { text } = req.body;

    todoModel.create( {text} )
        .then((data) => {
            console.log(data+'added successfully')
            res.send(data)
        })
}

const updateTodo = async (req, res) => {
    const { _id, text } = req.body

   let data=  await todomodel.findByIdAndUpdate(_id, { text },{new : true})
        // .then((x) => {
            res.json({
                status: "updated Successfully",
                data: data
            })
        // }).catch((x) => {
        //     res.json({
        //         data: x.message
        //     })
        // })
}
const deleteTodo = async (req, res) => {
    const { _id } = req.body

    todomodel.findByIdAndDelete(_id)
        .then((x) => {
            res.json({
                status: "deleted Successfully",
                data: x
            })
        }).catch((x) => {
            res.json({
                data: x.message
            })
        })
}

module.exports = {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
}