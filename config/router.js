import express from 'express'
import auth from '../controllers/auth.js'
// import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

export default router
