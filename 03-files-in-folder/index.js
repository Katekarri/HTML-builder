const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'secret-folder');

fs.readdir(dir, {withFileTypes: true}, function filesType(err, files) {
 
  if (err) {
    console.log(err);
  }
    files.forEach(file => {
      // file.name.slice(0, file.name.length - path.extname(file.name).length), '-', path.extname(file.name);
      
      if (file.isFile() === true ) {
        fs.stat(path.resolve(dir, file.name), (_, stats) => {
          // const size = stats.size / 1024;
          const elemPath  = path.join(dir, file.name);
          // console.log(childPath);
          const nameFile= path.parse(elemPath).name;
          const typeFile = path.extname(elemPath).slice(1);
          
          console.log(`${nameFile} - ${typeFile} - ${stats.size} byte\n`);
        })
      }  console.log(file)
      
    }) 
})

