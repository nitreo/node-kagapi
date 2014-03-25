node-kagapi
===========

Simple module which makes requests to the King Arthurs Gold game API

Usage:

    var kagapi = require('kagapi');
    
    kagapi.getServers()
      .then(function(serverlist)({
        console.dir(servelist);
      })
      .fail(function(err){
        //handle errors here
      })
      
Available methods:      
      
    kagapi.getServerStatus('localhost',50301);
    kagapi.getPlayerInfo('sinitreo');
    kagapi.getPlayerStatue('sinitreo');
