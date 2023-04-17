const express = require('express');
const http = require('http');
const WebSocket = require('ws');
/*

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
let tempRes;
app.get("*", (req, res) => {
    tempRes = res



    let data = "This is a Heading"
    // res.send("Hello")
    // res.end();
    res.render('index',{"value":data});



   

});

*/
// const port = 3000;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      console.log("data",data)
    //   ws.sendUTF('Hello, client!');
      // document.getElementById('heading').innerHTML = data;
    //   tempRes.setHeader('Content-Type', 'text/html');
    //   tempRes.redirect("index",{"value":data})
    //   tempRes.redirect(301,"index")
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      })
    })
  })


// let port = 6969;
// app.listen(port, function() {
//     console.log(`Server is listening on ${port}!`)
//   })

port = 3000;
server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})
