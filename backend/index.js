require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const port=process.env.PORT||8080
require('./connection')
const path =require("path")
const server = http.createServer(app);
//const {Server} = require('socket.io');
//const io = new Server(server, {
 // cors: 'http://localhost:3000',
 // methods: ['GET', 'POST', 'PATCH', "DELETE"]
//})


const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');
const orderRoutes = require('./routes/orderRoutes')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);
app.use('/orders', orderRoutes);


app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
);

server.listen(port, ()=> {
  console.log(`server running at port${port}`)
})

//app.set('socketio', io);