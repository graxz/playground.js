require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fdf7b54be46790f38497e8b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fdfda97a5db25b2acc28809').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})