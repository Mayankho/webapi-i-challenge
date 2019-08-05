const express = require('express');

const server = express();

server.listen(4000, () => {
    console.log('server is listening in port 4000')
})