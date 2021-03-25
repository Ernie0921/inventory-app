const express = require('express');//importing express
const dotenv = require('dotenv');//import dotenv, to seperate sensative information
const morgan = require('morgan'); //lets your log a request whenever you make a request
const bodyparser = require('body-parser');
const path = require('path');//inbuild in node application /no need to npm install

const app = express();

dotenv.config({path:'config.env'}) //use the config PORT VARIABLE in the env file
const PORT = process.env.PORT || 8080

//log request on terminal
app.use(morgan('tiny'))
 
//parse POST data to the server so it can be read . 
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine", "ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))   //this is how you find the path to you ejs file if you created folder called ejsin the views folder

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css"))) // find path to assets /css
app.use('/img', express.static(path.resolve(__dirname,"assets/img"))) // find path to assets /img
app.use('/js', express.static(path.resolve(__dirname,"assets/js"))) // find path to assets /js


app.get('/', (req, res) => {  // route to index.ejs file 
    //res.send('Hello test ')  
    res.render('index');
})

app.get('/add-user', (req, res) => {  //route to new user 
    //res.send('Hello test ')  
    res.render('add_user');
})

app.get('/update-user', (req, res) => {  //route to new user 
    //res.send('Hello test ')  
    res.render('update_user');
})
  
app.listen(PORT, () => { //message to show terminal when running server
    console.log(`Server running on http://localhost:${PORT}`)
});