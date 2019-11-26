const { Block } = require('./block');
const { Transaction } = require('./transactions');

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.frameTransactions.bind(this);
  }

  createGenesisBlock() {
    return new Block(Date.parse('2019-11-24'), [], '0');
  }

  frameTransactions (transactions) {
    return transactions.map(tx => {
      return {
        "id": tx.id,
        "vin_number": tx.VIN,
        "odo_value": tx.odoValue,
        "timestamp": tx.timestamp
      }
    })
  }

  getBlocks() {
    return this.chain.map(block => {
      return {
        "hash": block.hash,
        "previous_hash": block.previousHash,
        "timestamp": block.timestamp,
        "nonce": block.nonce,
        "data": this.frameTransactions(block.transactions)
      }
    });
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions() {
    if (!this.pendingTransactions.length) {
      throw new Error('no transactions found')
    }
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    let blockHash = block.mineBlock(this.difficulty);

    this.chain.push(block);

    this.pendingTransactions = [];
    return blockHash;
  }


  addTransaction(transaction) {
    try {
      if (!transaction.VIN) {
        throw new Error('Transaction must include VIN Number');
      }
      if (this.getLatestOdometerValue(transaction.VIN) >= transaction.odoValue) {
        throw new Error('[Data Tamper Alert] Invalid Odometer Value')
      }

      if (transaction.odoValue <= 0) {
        throw new Error('Odometer value should be positive');
      }
      this.pendingTransactions.push(transaction);
    } catch (e) {
      console.log("----e");
      console.log(e);
      throw new Error(e.toString())
    }

    return true;
  }
  //TODO: Get Latest Odo Value

  getLatestOdometerValue(VIN) {
    let odometerValue = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.VIN === VIN) {
          odometerValue = trans.odoValue;
        }
      }
    }
    return odometerValue;
  }

  // getAllTransactionsForWallet(address) {
  //   const txs = [];
  //
  //   for (const block of this.chain) {
  //     for (const tx of block.transactions) {
  //       if (tx.fromAddress === address || tx.toAddress === address) {
  //         txs.push(tx);
  //       }
  //     }
  //   }
  //
  //   console.log('get transactions for wallet count: %s', txs.length);
  //   return txs;
  // }

  isChainValid() {
    // Check if the Genesis block hasn't been tampered with by comparing
    // the output of createGenesisBlock with the first block on our chain
    const realGenesis = JSON.stringify(this.createGenesisBlock());

    if (realGenesis !== JSON.stringify(this.chain[0])) {
      return false;
    }

    // Check the remaining blocks on the chain to see if there hashes and
    // signatures are correct
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];

      if (!currentBlock.hasValidTransactions()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
    }

    return true;
  }

  getPendingTransactions() {
    return this.pendingTransactions.map(tx => {
      return {
        "id": tx.id,
        "vin_number": tx.VIN,
        "odo_value": tx.odoValue,
        "timestamp": tx.timestamp
      }
    });
  }
}

module.exports.BlockChain = BlockChain;