const {UserController} = require('../controllers');

const {Router} = require('express');

const router = Router();

router.get('/',UserController.getAll)

router.put('/:id',UserController.put)

router.post('/',UserController.post)

router.patch('/',UserController.patch)

router.delete('/',UserController.delete)

module.exports = router;