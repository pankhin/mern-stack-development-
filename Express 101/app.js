//console.log("app is running")


const express = require('express');
var morgan = require('morgan')

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static('public'))


// let logger = (env)=> {
//     (req,res,next) => {
//         if(env == 'dev') {
//             console.log(`${req.method} ${req.originalUrl} --`);
//         }
       
//         next();
//     }
// }

// app.use(logger('dev'));

// app.use((req,res,next) => {
//     console.log(`${req.method} ${req.originalUrl} --`);
//     next();
// })

//package name - morgan 
// app.use(morgan('dev'))

// app.use((req,res,next) => {
//     console.log('second middleware is running');
//     next();
// })


app.get('/', (req,res) => {

    let blogs = [
        { title : 'Blog title 1', intro : 'this is blog intro 1'},
        { title : 'Blog title 2', intro : 'this is blog intro 2'},
        { title : 'Blog title 3', intro : 'this is blog intro 3'},
    ]

    res.render('home', {
        // name : 'mgmg',
        // age : 23

        //blogs : blogs
        blogs,
        title: "Home"
    })
    // res.write('hello world');

    //res.send('<h1> Hello World </h1>');

    //res.sendFile('./view/home.html', {root: __dirname})

});

app.get('/about', (req,res) => {
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', {
    title: "About"
    })
})

// app.use((req,res,next) => {
//     console.log('second middleware is running');
//     next();
// })


// app.get('/about-us', (req,res) => {
//     res.redirect('/about');

// })

app.get('/contact', (req,res) => {
    //res.sendFile('./views/contact.html', {root: __dirname})
    res.render('contact', {
        title: "Contact"
        })
})

// app.get('/about', (req,res) => {
// //res.write('hello world');

// res.send('<h1> About </h1>');
//  res.end();
// })

app.use((req,res) => {
    res.status(404).render('404',{
title: "404"
    })
    
    //res.sendFile('./views/404.html', {root: __dirname})
    //res.render('404');
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})
