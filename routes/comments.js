const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

// POST /comments 创建一条留言
router.post('/', checkLogin, (req, res, next)=>{
    res.send('Create a comment')
})

// GET /comments/:commentId/remove 删除一条留言
router.get('/:commentID/remove', checkLogin, (req, res, next)=>{
    res.send('Delete a comment')
})

module.exports = router
