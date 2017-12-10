const testFolder = '.';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
	  var newFile = file.replace(/ /g, '_');
	  fs.rename(file, newFile, function(err) {
			if ( err ) console.log('ERROR: ' + err);
		});
	  var foo = `<a href="${newFile}" class="glightbox-demo" data-glightbox="title:Description Bottom; description: You can set the position of the desciption">
      <img src="${newFile}" alt="image">
      <div class="glightbox-desc">
        <p>Description here</p>
      </div>
    </a>`
    //.replace('$2',newFile);//.replace('$1', i).replace('$1', i++);
    console.log(foo);
  });
})
