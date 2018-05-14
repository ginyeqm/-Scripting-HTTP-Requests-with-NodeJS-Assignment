var https = require('https')

module.exports = function getHTML (options, callback) {
    /* Your code here */
https.get(options, function(response){
  response.setEncoding('utf8');

  var newData = "";
    response.on('data', function(data){
     newData += data;
  });

    response.on('end', function() {
      callback(newData);
    console.log("response completed")

  });

});

}



