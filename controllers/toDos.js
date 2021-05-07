import ToDo from '../models/toDo.js'
// import { notFound, forbidden } from '../lib/errorHandler.js'

async function toDoIndex(req, res, next) {
  const currentUser = req.currentUser._id
  try {
    const toDos = await ToDo.find()
    const userToDos = toDos.filter(toDo => {
      console.log('todo id', typeof(toDo.owner.toString()))
      console.log('current user', typeof(currentUser.toString()))
      if (toDo.owner.toString() === currentUser.toString()) return toDo
      return
    })
    return res.status(200).json(userToDos)
  } catch (err) {
    next(err)
  }
}

async function toDoCreate(req, res, next) {
  try {
    const newToDoData = { ...req.body, owner: req.currentUser._id }
    const newToDo = await ToDo.create(newToDoData)
    return res.status(201).json(newToDo)
  } catch (err) {
    next(err)
  }
}

export default {
  index: toDoIndex,
  create: toDoCreate
}