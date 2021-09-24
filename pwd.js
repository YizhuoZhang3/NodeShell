// process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim();
//   // process.stdout.write('You typed: ' + cmd);
//   const dire = process.cwd();
//   process.stdout.write(dire);
//   process.stdout.write('\nprompt > ');
// });

module.exports = function() {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if(input === 'pwd'){
      const path = process.cwd();
      process.stdout.write(path);
      process.stdout.write("\nprompt > ");
    }
  });
};
