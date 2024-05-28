const express = require('express');
const router = express.Router();

const controller = require('../controllers/people');

// router.get('/', controller.getPeople);
// router.post('/', controller.createPerson);
// router.put('/:id', controller.updatePerson);
// router.delete('/:id', controller.deletePerson);
// router.post('/postman', controller.createPersonPostman);

router.route('/')
    .get(controller.getPeople)
    .post(controller.createPerson);
router.route('/:id')
    .put(controller.updatePerson)
    .delete(controller.deletePerson);
router.route('/postman')
    .post(controller.createPersonPostman);

module.exports = router
