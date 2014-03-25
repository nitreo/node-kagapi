/**
 * Used modules
 */

var request = require('request'),
q = require('kew'),
util = require('util');

/**
 * URL Formats
 */



var base = 'https://api.kag2d.com',
  serversUrl = base+'/servers' ,
  serverStatusUrl = base + '/server/ip/%s/port/%s/status',
  playerInfoUrl =  base + '/player/%s/info',
  playerStatusUrl = base + '/player/%s/status';


function makeDeferredRequest(url){
  var deferred = q.defer();
  request({url: url, json: true }, function (error, response) {
    if(error) deferred.reject(error);
    else deferred.resolve(response);
  });
  return deferred.promise;
}

exports.getServers = function getServers(){
  return makeDeferredRequest(serversUrl);
};

exports.getServerStatus = function getServerStatus(ip,port){
  return makeDeferredRequest(util.format(serverStatusUrl,ip,port));
};

exports.getPlayerInfo = function getPlayerInfo(playerLogin){
  return makeDeferredRequest(util.format(playerInfoUrl,playerLogin));

};

exports.getPlayerStatus = function getPlayerStatus(playerLogin){
  return makeDeferredRequest(util.format(playerStatusUrl,playerLogin));
};