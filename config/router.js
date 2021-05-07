import express from 'express'
import toDos from '../controllers/toDos.js'
import auth from '../controllers/auth.js'
import users from '../controllers/users.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/todos')
  .get(secureRoute, toDos.index)
  .post(secureRoute, toDos.create)

router.route('/todos/:id')
  .put(secureRoute, toDos.update)
  .delete(secureRoute, toDos.delete)

router.route('/profile')
  .get(secureRoute, users.userProfile)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

export default router
