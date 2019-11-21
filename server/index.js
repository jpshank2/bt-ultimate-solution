const express    = require("express");
const cors       = require("cors");
const bodyParser = require("body-parser");
const app        = express();
const PORT       = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log(`You are listening on port ${PORT}`);
});