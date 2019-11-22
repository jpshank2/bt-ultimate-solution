const express = require("express");
const posts = require("../../employer.json");
const router = express.Router();
const Employer = require("./employers")

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "me",
//     password: "secret",
//     database: "Hackathon Challenge 2 Best Titanium: Database"
// });
// connection.connect();

router.get("/", (req, res) => {
    res.send(posts);
})

router.post("/", (req, res) => {
    let post = req.body;
    post.id = posts.nextid;
    Employer.postIt(post)
    res.sendStatus(200);
    // connection.query({
    //     sql: "INSERT INTO tblCompany (CompanyName)",
    //     values: [req.body.company]
    // },
    //     function (error, results, fields) {
    //         if (error) throw error;
    //     }
    // );
    // connection.query({
    //     sql: "INSERT INTO tblInteraction (InteractionName)",
    //     values: [req.body.contact]
    // },
    //     function (error, results, fields) {
    //         if (error) throw error;
    //     }
    // );
    // connection.query({
    //     sql: "INSERT INTO tblInteraction (InteractionManner)",
    //     values: [req.body.method]
    // },
    //     function (error, results, fields) {
    //         if (error) throw error;
    //     }
    // );
    // connection.query({
    //     sql: "INSERT INTO tblInteraction (InteractionDate)",
    //     values: [req.body.date]
    // },
    //     function (error, results, fields) {
    //         if (error) throw error;
    //     }
    // );
})

// router.put("/", (req, res) => {
//     Poster.editPost(req.body.id, req.body.text)
// })

// router.delete("/", (req, res) => {
//     Poster.deletePost(req.body.id)
// }) 

module.exports = router;