const express = require('express');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
if(process.env.NODE_ENV === 'production') {
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
            if (err) {
            res.status(500).send(err)
            }
        })
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});
