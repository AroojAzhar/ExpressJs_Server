const express = require('express'); // load express

const app =express();// initialize the express

const dotenv = require('dotenv');

const path = require('path');

dotenv.config({path : './config/config.env'});

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.get('/' , (request , response) => {
    response.send(`<h2>Welcome to Express Server</h2>`);
});

app.get('/home' , (request, response) => {
    response.sendFile(path.join(__dirname , 'index.html'));
});

//json response

let gitHubProfile = {
"sdcsd" : "sfszfds",
    "sdefcswf" : "wsedfcwsfc",
    "dfcswfc" : "swdfcfswfc"
};

app.get('/json' , (request , response) => {
    response.json(gitHubProfile);
});

//download a file from a server

 app.get('./down' , (request, response) => {
    response.download(path.join(__dirname , 'MyPost.pdf'));
 });

app.listen(port, hostname , () => {
   console.log(`Express server is started at http://${hostname}:${port}`);
});