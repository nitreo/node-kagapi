var should = require('should');
var kagapi = require('../index.js');

describe('kagapi',function(){
  describe('#getServers()',function(){
    it('should return list',function(done){
      kagapi.getServers().then(function(serverlist){
        console.log(serverlist);
        done();
      })
    })
  });
  describe('#getPlayerInfo()',function(){
    it('should return player info',function(done){
      kagapi.getPlayerInfo('sinitreo').then(function(serverlist){
        console.log(serverlist);
        done();
      })
    })
  });
  describe('#getPlayerStatus()',function(){
    it('should return player status',function(done){
      kagapi.getPlayerStatus('sinitreo').then(function(playerStatus){
        console.log(playerStatus);
        done();
      })
    })
  })
});