const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', (req, res, next) => {
    res.render('posts')
})

// POST /posts/create 发表一篇文章
router.post('/create', checkLogin, (req, res, next) => {
    res.send('publish artical')
})

// GET /posts/create 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
    res.send('publish Page')
})

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', checkLogin, (req, res, next) => {
    res.send('Artical info')
})

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, (req, res, next) => {
    res.send('Update artical Page')
})

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, (req, res, next) => {
    res.send('Update an artical')
})

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, (req, res, next) => {
    res.send('Artical Deleted')
})

module.exports = router
