exports.homeRoutes = (req, res) => {  // render the index ejs and import it 
    res.render('index');
}


exports.add_user = (req, res) => {
    res.render('add_user')
}


exports.update_user = (req, res) =>{
    res.render('update_user');
}