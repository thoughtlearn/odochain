const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const { BlockChain } = require('./blockchain/blockchain');
const { Transaction } = require('./blockchain/transactions');
const cors = require('cors');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
let blockChain = new BlockChain();

const setHeaders = (res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin' +
      ', Accept' +
      ', X-Requested-With' +
      ', Content-Type' +
      ', Authorization',
  );
};

app.get('/ping', function (req, res) {
  setHeaders(res);
  return res.send('pong');
});

app.get('/blocks', function (req, res) {
  setHeaders(res);
  let blocks = blockChain.getBlocks();
  res.send(blocks);
});

app.post('/transaction', function(req, res) {
  setHeaders(res);
  try {
    let odoData = req.body;
    let transactionEntry = new Transaction(odoData.id, odoData.vin_number,
                      odoData.odo_value, odoData.timestamp);
    let transactionStatus = blockChain.addTransaction(transactionEntry);
    res.send({message: transactionStatus})
  } catch(e) {
    res.statusCode = 400;
    res.send({message: e});
  }
});

app.get('/pending-transactions', function(req, res) {
  res.send(blockChain.getPendingTransactions());
});

app.get('/check-odovalue', function(req, res) {
  let vinValue = req.query.vin;
  console.log("^^^^^^1")
  console.log(vinValue);
  console.log("^^^^^^12")
  let odoValue = blockChain.getLatestOdometerValue(vinValue);
  res.send({
    "odo_value": odoValue
  });
});

app.post('/mine-block', function(req, res) {
  try {
    let blockHash = blockChain.minePendingTransactions();
    res.send({
      message: "Block has been mined successfully",
      hash: blockHash
    })
  } catch(e) {
    res.statusCode = 400;
    res.send( {
      message: e.message
    });
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running in PORT 8080')
});