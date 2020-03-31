var http = require('http')
const request = require('request')
var fs = require('fs')
const csvFilePath=('file.csv')
const csv=require('csvtojson')

request('http://api.openweathermap.org/data/2.5/f346ba540ca8b6bbbbee904563cd6efa}', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

getPosts (req,res){
    res.status(200).json(req.store.posts)
}
app.get('/posts' , (req,res) => {routes.posts.getPosts(req,res)})

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var jsonContent = JSON.stringify(jsonObj);
    fs.writeFile('arrayFile.json', jsonContent, 'utf8', function (err){
      if (err) throw err;
      console.log('Saved!');
    });
})
