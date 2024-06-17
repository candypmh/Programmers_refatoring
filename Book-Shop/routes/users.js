const express = require('express');
const router = express.Router();
const conn = require('../mariadb'); //routes폴더 밖으로 나가서 mariadb찾음
const {join, 
       login, 
       passwordResetRequest, 
       passwordReset}  = require('../controller/UserController');

router.use(express.json());

//회원가입
router.post('/join', join); //컨트롤러 자리
//로그인
router.post('/login', login);
//비밀번호 초기화 요청
router.post('/reset', passwordResetRequest);
//비밀번호 초기화 수정
router.put('/reset', passwordReset);


module.exports = router;