const express = require('express');
const router = express.Router();
const blogControlls = require('../controller/blogControlls')


router.get("/create", (req, res) => {
    res.render("create.ejs")
});

router.get("/", blogControlls.getBlogs);

router.get("/blogs/:id", blogControlls.blogCont);

router.post("/", blogControlls.newBlog);

module.exports = router;