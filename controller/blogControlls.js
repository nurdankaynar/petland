const PetBlog = require('../models/petModel');

exports.blogCont = (req, res) => {
    const id = req.params.id;
    PetBlog.findById(id)
      .then(result => {
        res.render("blogContent.ejs", {blog: result});
      })
      .catch(error => {
        console.log(error);
      })
}

exports.getBlogs = (req, res) => {
    PetBlog.find()
    .then((result) => {
      res.render("index.ejs", {blogs: result})
    })
    .catch((error) => {
      console.log(error);
    })
}

exports.newBlog = (req, res) => {
    let blogDet = req.body
    const blog = new PetBlog(blogDet);
    blog.save()
      .then((result) => {
        res.redirect("/")
        console.log('Data saved succesfully.')
      })
      .catch((error) => {
        console.log(error);
      })
}