const express = require ('express')

const event = require ('./Controller/usercontroller');

const router = express.Router();

router.get('/event',getevent);
router.post('/event',createevent);

module.exports = router;