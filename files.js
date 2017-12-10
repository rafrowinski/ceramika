const testFolder = '.';
const fs = require('fs');

var temp = "<div class='tile'><img class='image' src='$2'/><div class='desc'>aaaaaa</div></div>";
//var i = 1;

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
	  var newFile = file.replace(/ /g, '_');
	  fs.rename(file, newFile, function(err) {
			if ( err ) console.log('ERROR: ' + err);
		});
	  var foo = temp.replace('$2',newFile);//.replace('$1', i).replace('$1', i++);
    console.log(foo);
  });
})