
const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
