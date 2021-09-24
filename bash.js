/*jshint esversion: 6 */
process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

const pwdModule = require('./pwd');
pwdModule();

const ls = require('./ls');
ls();

process.stdin.on('data', (data) => {
  const cat = require('./cat');
  const arg = data.toString().split(" ")[1].trim();
  cat(arg);
 });
