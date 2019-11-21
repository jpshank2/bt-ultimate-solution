const express = require("express");
const posts   = require("../../employer.json");
const router  = express.Router();
const Employer  = require("./employers")

router.get("/", (req, res) => {
    res.send(posts);
})

router.post("/", (req, res) => {
    let post = req.body;
    post.id = posts.nextid;
    Employer.postIt(post)
    res.sendStatus(200);
})

// router.put("/", (req, res) => {
//     Poster.editPost(req.body.id, req.body.text)
// })

// router.delete("/", (req, res) => {
//     Poster.deletePost(req.body.id)
// }) 

module.exports = router;