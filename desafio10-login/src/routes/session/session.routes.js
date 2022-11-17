const { Router } = require('express')
const { sesionGet, sessionLogout, sessionPostLogin } = require('../../controllers/session/session.controllers')
const { authMiddleware } = require('../../middleware/auth.middleware')

const router = Router()

// aca nuestras rutas
router.get('/', authMiddleware, sesionGet)
router.get('/logout', sessionLogout)
router.post('/login', sessionPostLogin)
   

module.exports = router
