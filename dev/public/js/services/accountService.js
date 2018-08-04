(function (app) {
  app.factory('accountService', accountService);
  accountService.$inject = ['$state', '$mdToast'];

  function accountService($state, Toast) {
    var accountUtil = {};
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // var abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
    // var VotingContract = web3.eth.contract(abi);
    // var contractInstance = VotingContract.at('0xb32e4fe0e103d9f77864112a1e29f30fd103dbef');
    
    accountUtil.accounts = function(){
      var accounts = web3.eth.accounts;
      console.log(accounts)
    }
    accountUtil.createAccount = function(password){
      return web3.eth.personal.newAccount(password);
    }
    return accountUtil;
  };

})(microchain);