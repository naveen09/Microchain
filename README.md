# Microchain

```
gulp serve

$ npm install solc ganache-cli web3@0.20.0

$ node_modules/.bin/ganche-cli

$ node

Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts
code = fs.readFileSync('MicroBlock.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':MicroBlock'].interface)
microblock = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':MicroBlock'].bytecode
deployedContract = microblock.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
deployedContract.address
contractInstance = microblock.at(deployedContract.address)
contractInstance.createAccount.call('naveen', 1, '0x8130e96b4e7da31e10c050e9e20a184a1adcd85d')
contractInstance.getLender.call('naveen')
```
