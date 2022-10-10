var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

var fs = require('fs');


//global variable for tweet data
var tweetinfo = []

//load the input file
fs.readFile('favs.json', 'utf8', function readFileCallback(err,data ){
  if(err){
    req.log.info('cannot load a file:' + fileFolder + '/' + _file_name)
    throw err;
  }
  else{
    //TODO: store loaded data into a global variable for tweet data
    tweetinfo = JSON.parse(data);
  }
});
 


//Get functions
//Shows user info
app.get('/tweets', function(req, res) {
  //TODO: send all users' IDs
  res.send({tweetinfo: tweetinfo});
});

//Shows tweet info
app.get('/tweetinfo', function(req, res) {
  //TODO: send tweet info
  res.send({tweetinfo: tweetinfo});
});

//Shows searched tweets
app.get('/searchinfo', function(req, res){
  //TODO: send searched tweets

});

//Post functions
//Posts created tweets
app.post('/tweetinfo', function(req, res) {
  //TODO: create a tweet
    var tweetName = req.body.newText;
    console.log("before split");
    var array = tweetName.split(";");
    console.log("after split");
    var tweetid = array[0];
    var tweetText = array[1];
    var currentTime = new Date().toLocaleTimeString();

    tweetinfo.push({
        id: tweetid,
        text: tweetText,
        created_at: currentTime,

        user: {id: "na"},
        user: {name: "na"},
        user: {screen_name: "na"}
    });

    res.send('Successfully created tweet!');

});

//Posts searched tweets
app.post('/searchinfo', function(req, res) {
  //TODO: search a tweet
});

//Update
app.put('/tweets/:name', function(req, res) {
  //TODO: update tweets
  var oldName = req.params.name;
    var newName = req.body.newName;

    var found = false;

    tweetinfo.forEach(function(tweet, index) {
        if (!found && tweet.user.name === oldName) {
            tweet.user.screen_name = newName;
        }
    });

    res.send('Succesfully updated product!');
});

//Delete 
app.delete('/tweetinfo/:id', function(req, res) {
  //TODO: delete a tweet
  
   var id = req.params.id;
   var delId = req.body.id

    var found = false;

    tweetinfo.forEach(function(tweet, index) {
        if (!found && tweet.id === Number(delId)) {
            tweetinfo.splice(index, 1);
        }
    });

    res.send('Successfully deleted!');

});


app.listen(PORT, function() {
  console.log('Server listening on ' + PORT);
});