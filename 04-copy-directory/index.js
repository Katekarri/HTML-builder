const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'nuw-file'), err => {
  if (err) throw err;
  console.log('new folder created');
});

fs.readdir (
  path.resolve(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
    if (err) {
      console.log(err);
    }
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.copyFile( path.join(__dirname, 'files', file.name), path.join(__dirname, 'nuw-file', file.name), (err) => {
              if (err) console.log('Error' , err);
              console.log(`${file.name} copy created!`)
            })
        }
      })
    }
  }
)
