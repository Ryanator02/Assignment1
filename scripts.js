
$(function() {
   //Get 
   $('#get-button').on('click', function() {
        //TODO: get all users' IDs & display it
        $.ajax({
          url: '/tweets',
          contentType: 'application/json',
          success: function(response) {
            var namebodyEl = $('#namebody');

            namebodyEl.html('');

            response.tweetinfo.forEach(function(tweet)
            {
              namebodyEl.append('\
                <tr>\
                    <td <class="id">' + tweet.user.id_str + '</td>\
                    <td>' + tweet.user.screen_name + '</td>\
                    <td <class="id">' + tweet.user.name + '</td>\
                <tr>\
                ');
            });
          }
        });
    });


    //Get tweets
    $('#get-tweets-button').on('click', function(){
        //TODO: get tweet info and display it
        $.ajax({
          url: '/tweetinfo',
          contentType: 'application.json',
          success: function(response) {
            console.log(response);

            var tweetbodyEl = $('#tweetbody');

            tweetbodyEl.html('');

            response.tweetinfo.forEach(function(tweet)
            {
              tweetbodyEl.append('\
                <tr>\
                    <td <class="id">' + tweet.id_str + '</td>\
                    <td> ' + tweet.text + '</td>\
                    <td <class="id">' + tweet.created_at + '</td>\
                <tr>\
                ');
            });
          }

        });
    });

    //Get searched tweets
    $('#get-searched-tweets').on('click', function() {
        //TODO: get a searched tweet(s) & display it
    });


  //CREATE
  $('#create-form').on('submit', function(event){
        event.preventDefault();

        var createInput = $('#create-input');

        //TODO: creat a tweet
        $.ajax({
            url: '/tweetinfo',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text: createInput.val() }),
            success: function(response) {
                console.log(response);
                createInput.val('');
                $('#get-button').click();
            }
        });
  });

    //Create searched tweets
  $('#search-form').on('submit', function(event){
    event.preventDefault();
    var userID = $('#search-input');
    
    //TODO: search a tweet and display it.

  });

  //UPDATE/PUT
  $("#update-user").on('submit', function(event){
      event.preventDefault();
    var updateInput = $('#update-input');
    var inputString = updateInput.val();

    const parsedStrings = inputString.split(';');

    var name = parsedStrings[0];
    var newName = parsedStrings[1];
    
    //TODO: update a tweet
     $.ajax({
            url: '/tweets/' + name,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newName: newName }),
            success: function(response) {
                console.log(response);
                $('#update-user').click();
            }
        });
  });


  //DELETE
  $("#delete-form").on('submit', function() {
    var id = $('#delete-input')
    event.preventDefault();

    //TODO: delete a tweet
    $.ajax({
          url: '/tweetinfo/' + id ,
          method: 'DELETE',
          contentType: 'application/json',
          data: JSON.stringify({id: id}),
          success: function(response) {
            console.log(response);
            $('#get-button').click();
          }
        });

  });


});


                    
   