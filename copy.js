var copyFile = (file, dir2)=>{
    var fs = require('fs');
    var path = require('path');

    var f = path.basename(file);
    var source = fs.createReadStream(file);
    var dest = fs.createWriteStream(path.resolve(dir2, f));
  
    source.pipe(dest);
    source.on('end', function() { console.log('Succesfully copied'); });
    source.on('error', function(err) { console.log(err); });
  };
  
  
  copyFile('./test/node_file.txt', './test1/');