const express = require('express')
//const exec = require('child-process').exec;
const json = require('json');
const app = express()
const command = 'bitcoin-cli -regtest -datadir=. -rpcuser=username -rpcpassword=ikxFwWW2Qbc3N_rDsDvsfZ144QhVo71sqmViZwZH4Lo= -rpcport=8080 getblocktemplate'
const JSON = require('circular-json');
var tableify = require('tableify');
var shell = require('shelljs');

app.get('/', function (req, res) {
 // function puts(error, stdout, stderr) {}
  var result = shell.exec(command);
  var final = tableify(JSON.parse(result));
  res.send(final);
})

app.listen(3000, function () {
 // function puts(error, stdout, stderr) {}
 // var result = exec(command, puts);
  console.log('server start on: 3000');
 // console.log(result);
})
