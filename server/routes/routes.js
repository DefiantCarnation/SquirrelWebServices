var rp = require('request-promise');

module.exports = function(app) {

  app.post('/signup', function(req, res, next){
    console.log(req.body.username, req.body.password, 'yololz must be here right?');
    var options = {
      method: 'POST',
        uri: 'http://db:8888/signup',
        body: {
            username: req.body.username,
            password: req.body.password,
        },
        json: true // Automatically stringifies the body to JSON 
      };

    rp(options)
    .then(function(data){
      console.log('what data do i get after signing in?', data);
      res.send(data);
    })
    .catch(function(err){
      console.log('or am in the 404 block?');
      res.sendStatus(404);
    })

  });

  app.get('/links/:userid', function(req, res, next){
    // console.log(req.params.userid, "what are the params");
    rp('http://db:8888/links/' + req.params.userid)
    .then(function(data){
      res.send(data)
    })
    .catch(function(err){
      console.log(err, 'squirrel web services get/links/:userid route error');
    });
  });

  app.get('/friends/nameonly/:userid', function(req, res, next){
    rp('http://db:8888/friends/nameonly/' + req.params.userid)
    .then(function(data){
      res.send(data)
    })
    .catch(function(err){
      console.log(err, 'squirrel web services get/friend/nameonly/:userid route error');
    });
  });

  app.put('/links/friends/:friendid/:userid', function(req, res, next){
    
    var url = req.body.link;
    
    var options = {
      method: 'PUT',
      uri: 'http://db:8888/links/friends/' + req.params.friendid + '/' + req.params.userid,
      body: {
          link: url,
      },
      json: true // Automatically stringifies the body to JSON 
    };
    
    rp(options)
    .then(function(data){
      console.log(data, 'MWONG');
      res.send(data)
    })
    .catch(function(err){
      console.log(err, 'squirrel web services put links/friends/friendid/userid route error');
    });
  });

  app.get('/friends/:userid', function(req, res, next){
    console.log('goodbye damien');
    var userid = req.params.userid;

    rp('http://db:8888/friends/' + userid)
    .then(function(data){
      res.send(data)
    })
    .catch(function(err){
      console.log(err, 'squirrel web services get/friend/:userid route error');
    });
  });

  app.put('/friends/:userid', function(req, res, next){
    var userID = req.params.userid;
    var friendID = req.body.friend;

    var options = {
      method: 'PUT',
        uri: 'http://db:8888/friends/' + userID,
        body: {
          friend: friendID,
        },
        json: true // Automatically stringifies the body to JSON 
      };

    rp(options)
    .then(function(data){
      console.log('added new friend');
      res.send(data);
    })
    .catch(function(err){
      console.log('add friend web service route error');
      res.sendStatus(404);
    })
  });

  app.get('/search/:friend', function(req, res, next){
    var friend = req.params.friend;
    rp('http://db:8888/search/' + friend)
    .then(function(data){
      res.send(data);
    })
    .catch(function(err){
      res.send(err);
    })

  });

  app.get('/links/friends/:friendid', function(req, res, next){
    rp('http://db:8888/links/friends/' + req.params.friendid)
    .then(function(data){
      res.send(data);
    })
    .catch(function(err){
      res.send(err);
    })
  });

   app.get('/getMostRecent', function(req, res, next) {
    rp('http://dbredis:3333/getMostRecent')
    .then(function(data){
      res.send(data);
    })
    .catch(function(err){
      res.send(err);
    })
   })
}