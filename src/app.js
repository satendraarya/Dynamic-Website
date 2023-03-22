const express = require("express");
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const routes = require("./routes/main")
const Detail = require("./models/detail")
const Slider = require("./models/slider")
const Service = require("./models/Service");
// /static/css/style.css
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use("/static", express.static("public"))
app.use('', routes)

//(template engine)

app.set("view engine", "hbs")
app.set("views", "views")
hbs.registerPartials("views/partials")

// db connection
// mongoose.connect("mongodb://localhost/website_tut", () => {
//     console.log("db connected")
mongoose.connect("mongodb+srv://satendraaurangabad:mZ6XYOuLOHNCKCrD@cluster0.aylec31.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("db connected")


    // Service.create([
    //     {
    //         icon: "fab fa-accusoft",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps our students in learning and placement.",
    //         linkText: "https://www.learncodewitharya.com",
    //         link: "Check"
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: "Learn Projects",
    //         description: "We provide courses that helps our students in learning and placement.",
    //         linkText: "https://www.learncodewitharya.com",
    //         link: "Learn"
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: "Learn Projects",
    //         description: "We provide courses that helps our students in learning and placement.",
    //         linkText: "https://www.learncodewitharya.com",
    //         link: "Learn"
    //     }
    // ])


    // Slider.create([
    //     {
    //         title: "Learn java in very easy manner",
    //         subTitle: "java is one of the most popular prgramming langauge.",
    //         imageUrl: "/static/images/s1.jpg"
    //     },
    //     {
    //         title: "What is Django in python?",
    //         subTitle: "Django is most famous web framework of python prgramming langauge.",
    //         imageUrl: "/static/images/s2.jpg"
    //     },
    //     {
    //         title: "What about node js ?",
    //         subTitle: "Node js is runtime environment to execute javascript outside browser.",
    //         imageUrl: "/static/images/s3.jpg"
    //     },
    // ])



    // Detail.create({
    //     brandName: "Arya Technical Solution",
    //     brandIconUrl: "https://seeklogo.com/images/W/web-design-logo-68A234849B-seeklogo.com.png",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact-us"
    //         },
    //     ]
    // })
})

app.listen(process.env.PORT | 3000, () => {
    console.log("server started");
});