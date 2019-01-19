
const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => {
    res.writeHead(200,{'Content-Type':'video/mp4'})
    console.log('waiwai')
    var rs = fs.createReadStream('assets/video.mp4');
    rs.pipe(res)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
