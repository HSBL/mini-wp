const router = require('express').Router(),
    UserController = require('../controllers/user')

router.get('/', UserController.all)
router.post('/', UserController.create)
router.post('/login', UserController.login)

module.exports = router