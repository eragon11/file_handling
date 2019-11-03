var fs = require('fs'),
FP = require('filepath'),

oldFileName = 're-name-me.txt',
newFileName = 'ive-been-renamed.txt',

fpFolder = FP.newPath() + '/',

fpFile = FP.newPath(oldFileName),
oldFilePath = fpFolder + (fs.existsSync(fpFolder + fpFile) ? oldFileName : newFileName),
newFilePath = fpFolder + (fs.existsSync(fpFolder + fpFile) ? newFileName : oldFileName);
 
fs.rename(oldFilePath, newFilePath, function (err) {
if (err) {console.log(err); return; }
 
console.log('The file has been re-named to: ' + newFilePath);
});