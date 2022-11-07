const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'files-copy');


async function addFile() {
 await fs.promises.rm(dir, { recursive: true, force: true });
 await fs.promises.mkdir(dir);

fs.readdir (
  path.resolve(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
    if (err) {
      console.log(err);
    }
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.copyFile( path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
              if (err) console.log('Error' , err);
              console.log(`${file.name} copy created!`)
            })
        }
      })
    }
  }
)

 }

 addFile();


