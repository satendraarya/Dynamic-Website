const { response } = require('express');
const express = require('express');
const { route } = require("express/lib/application");
const async = require("hbs/lib/async");
const Contact = require('../models/Contact');

const Detail = require("../models/detail");
const Service = require("../models/Service");
const slider = require('../models/slider');

const routes = express.Router();

routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ _id: "64183eac6c39ef42288670d3" })
    const slides = await slider.find()
    // console.log(slides)
    // console.log(details)

    const services = await Service.find()

    res.render("index", {
        details: details,
        slides: slides,
        services: services
    });
});

routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id": "64183eac6c39ef42288670d3" })
    res.render("gallery", {
        details: details
    });
});

//Process contact form 
routes.post("/process-contact-form", async (request, response) => {
    console.log("form is submitted")
    console.log(request.body)
    //save the data to db
    try {

        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    } catch (e) {
        console.log(e)
        response.redirect("/")
    }
})

module.exports = routes;
