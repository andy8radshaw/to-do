import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const toDoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  }
}, {
  timestamps: true
})

toDoSchema.set('toJSON', { virtuals: true })

toDoSchema.plugin(uniqueValidator)

export default mongoose.model('ToDo', toDoSchema)