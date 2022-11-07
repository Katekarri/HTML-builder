// const fs = require('fs');
// const path = require('path');
// const process = require('process')
// const { stdin, stdout } = process;

// const newLine = fs.createReadStream(path.join(__dirname, 'text.txt'));

// stdin.on('data', (part) => {
//   if (part.toString().trim() == 'exit') {
//     stdout.write("Hmm...that's interesting");
//     exit();
//   }
//   newLine.write(part);
// });

// process.on("SIGINT", function () {
//   stdout.write("Hmm...that's interesting");
//   exit();
// });


const fs = require('fs');
const path = require('path');
const process = require('process')
const { stdin, stdout } = process;

fs.open(
  path.join(__dirname, 'text.txt'), 
  'w',
  function(err) {
    if (err) throw err;
    console.log('ok, you created a new file');
  

    stdout.write('Write what you want');
    stdin.on('data', data => {
      fs.appendFile(
        path.join(__dirname, 'text.txt'),
        `${data}`,
        err => {
          if (err) throw err;
        }
      );

      if (data.toString().trim() === 'exit') {
        console.log("Hmm...that's interesting");
        process.exit();
      }

      process.on('SIGINT', () => {
        console.log("Hmm...that's interesting");
        process.exit();
      });
    });
  }
);