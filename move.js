var moveFile = (file, dir2)=>{
    var fs = require('fs');
    var path = require('path');
  
    var f = path.basename(file);
    var dest = path.resolve(dir2, f);
  
    fs.rename(file, dest, (err)=>{
      if(err) throw err;
      else console.log('Successfully moved');
    });
  };
  
  moveFile('./test/node_file.txt', './test1/test_dir/second_file.txt');