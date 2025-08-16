const router = require('express').Router();
const ctrl = require('../controllers/propertyController');

router.get('/', ctrl.getProperties);
router.post('/', ctrl.createProperty);

module.exports = router;
