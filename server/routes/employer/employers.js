const fs        = require("fs");
const jsontoxml = require('jsontoxml')
let employer = JSON.parse(fs.readFileSync("./employer.json"));

let writePost = () => {
    fs.writeFileSync("./employer.json", JSON.stringify(employer))
    fs.writeFileSync("./employer.xml", jsontoxml(JSON.stringify(employer)))
}

let postIt = (post) => {
    employer.nextid++
    employer.data.push(post)
    writePost()
}

let editPost = (id, post) => {
    employer.data[id].text = post
    writePost()
}

let deletePost = id => {
    employer.data.splice(id, 1);
    writePost()
}

module.exports = {
    postIt: postIt,
    editPost: editPost,
    deletePost: deletePost
}