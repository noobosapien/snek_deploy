const express = require('express');

const app = express();

app.use(express.static('./static'));

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to port 5000");
});