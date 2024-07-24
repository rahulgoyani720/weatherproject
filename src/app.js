const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const hbs = require("hbs")

const static_path = path.join(__dirname,"../public")
const templetes_path = path.join(__dirname,"../templetes/views")
const partials_path = path.join(__dirname,"../templetes/partials")



app.set("view engine","hbs");
app.set("views",templetes_path);
hbs.registerPartials(partials_path)



//public static path
app.use(express.static(static_path));


//routing
app.get("/",(req,res) => {
    res.render("index")
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/weather",(req,res) => {
    res.render("weather")
})
app.get("*",(req,res) => {
    res.render("404error",{
        errmsg : 'Oops ! page not found'
    })
})
app.listen(port,() => {
    console.log(`server is running in port is ${port}`);
})