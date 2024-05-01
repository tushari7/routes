var express = require('express');
var router = express.Router();
const blogsControllers = require('../controllers/blogsControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create-blogs', blogsControllers.createBlogs)
router.get('/all-blogs', blogsControllers.allBlogs)
router.post('/update-blog',blogsControllers.updateBlogs)
router.post('/delete-blog', blogsControllers.deleteBlogs)
module.exports = router;
