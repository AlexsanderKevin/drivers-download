const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3004, () => {
    console.log('Running at port: 3004');
});
