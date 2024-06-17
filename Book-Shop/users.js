const express = require('express');
const router = express.Router();
const conn = require('../mariadb'); //routes폴더 밖으로 나가서 mariadb찾음
const {join, 
       login, 
       passwordResetRequest, 
       passwordReset}  = require('../controller/UserController');

router.use(express.json());
router.post('/join', join); 
router.post('/login', login);
router.post('/reset', passwordResetRequest);
router.put('/reset', passwordReset);


module.exports = router;