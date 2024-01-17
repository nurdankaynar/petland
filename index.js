const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const blogRouter = require('./router/blogRouter');

dotenv.config();

app.use(express.static("public"));
app.use(express.urlencoded ({extended: true}))
app.use(morgan("dev"));


app.use(blogRouter);

app.use((req, res) => {
  res.status(404).render("notFound.ejs");
})

// connect MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/petblogs';
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// start the server 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
