// npm i node-cmd
var nodeCmd = require('node-cmd');
nodeCmd.get('dir', (err, data, stderr) => console.log(data));