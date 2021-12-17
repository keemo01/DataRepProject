const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blogs = require('../models/blog');

const blogRouter = express.Router();

blogRouter.use(express.json());

blogRouter.route('/')
.get((req,res,next) => {
    res.end('get') 
})
.post((req, res, next) => {
    res.end('post')
})
.put((req, res, next) => {
    res.end('put')
})
.delete((req, res, next) => {
    res.end('delete')
});


blogRouter.route('/create')
.get((_req,res,next) => {
    res.render('newblog.ejs', { title: 'Create a blog' });   
})

blogRouter.route('/create')
.post((req, res, next) => {
    console.log('creating')
    blogs.create(req.body)
    .then((blogcreated) => {
        blogs.find()
         .then((blogsfound) => {
             console.log(blogsfound)
                res.render('currentblogs',{'bloggerlist' : blogsfound, title:'All Blogs'} );
        }, (err) => next(err))
    .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
})

blogRouter.route('/create')
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /blogs/create');
})

blogRouter.route('/create')
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not  supported on /blogs/create');
    
});


blogRouter.route('/update')
.get((_req, res, next) => {
     console.log("in this code")
    blogs.find()
    .then((bloggerlist) => {
        console.log("in this code")
            res.render('bloggerlist.ejs',{'bloggerlist' : bloggerlist, title:'Modified Blogs'} );
    }, (err) => next(err))
})

blogRouter.route('/update/:id')
.get((req, res, next) => {
    console.log('here')
    theId = req.params.id  
    console.log(theId)
    blogs.findById(theId)
    .then((blog) => {
        console.log(blog)
            res.render('updateblog.ejs', { 'blog' : blog, title: 'Modify a Blog'});
    }, (err) => next(err))
})

blogRouter.route('/update/:id')
.post((req, res, next) => {
    console.log('here')
    theId = req.params.id  
    console.log(theId)
    blogs.findByIdAndUpdate(theId,req.body)
    .then((blog) => {
        blogs.find()
        .then((bloggerlist) => {
            res.render('bloggerlist.ejs',{'bloggerlist' : bloggerlist, title:'Modified Blogs'});
        }, (err) => next(err))
    }, (err) => next(err))

})

blogRouter.route('/delete')
.get((_req,res,_next) => {
    res.render('deleteblog.ejs', { title: 'Delete a blog' });   
})


blogRouter.route('/delete/:id')
.get((req, res, next) => {
    console.log('here')
    theId = req.params.id  
    console.log(theId)
    blogs.findById(theId)
    .then((blog) => {
        console.log(blog)
            res.render('deleteblog.ejs', { 'blog' : blog, title: 'Delete a Blog'});
    }, (err) => next(err))
})

blogRouter.route('/delete/:id')
.post((req, res, next) => {
    console.log('here')
    theId = req.params.id  
    console.log(theId)
    blogs.findByIdAndDelete(theId)
    .then((blog) => {
        console.log(blog)
        blogs.find()
        .then((bloggerlist) => {
            res.render('bloggerlist.ejs',{'bloggerlist' : bloggerlist, title:'Modified Blogs'});
        }, (err) => next(err))
    }, (err) => next(err))

})

/*blogRouter.route('/delete')
.delete((req, res, next) => {
    console.log('deleting ')
    theId = req.params.id  
        .then((bloggerlist) => {
            res.render('bloggerlist.ejs',{'bloggerlist' : bloggerlist, title:'Modified Blogs'});
        }, (err) => next(err))
})*/

blogRouter.route('/nav/search')
.get( (req, res, _next) => {
    console.log(req.params);
    res.render('/nav.ejs');
  });


blogRouter.route('/nav')
.get((req, res)=> {
    console.log('searching')
    res.render('nav.ejs')
});

blogRouter.route('blogs/nav')
.post((req, res, next) => {
    console.log('searching')
    blogs.find(req.body)
        .then((blogsfound) => {
        console.log(blogsfound)
        res.render('currentblogs',{'bloggerlist' : blogsfound, title:'All Blogs'} ); 
        }, (err) => next(err))
    }, (err) => next(err))

module.exports = blogRouter;