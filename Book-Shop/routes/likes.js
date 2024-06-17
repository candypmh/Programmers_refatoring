const express = require('express');
const router = express.Router();
const { addLike, removeLike } = require('../controller/LikeController');

router.use(express.json());

//좋아요 추가
router.post('/:liked_book_id', addLike);
//좋아요 삭제
router.delete('/:liked_book_id', removeLike);

module.exports = router;