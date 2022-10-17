const express = require('express');
const server = express();

const cors = require('cors');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const dataRouter = require('./routes/data');
server.use('/data', dataRouter);

server.listen(5000, (req, res) => {
  console.log('데이터 통신 서버가 5000에서 작동 중');
});
