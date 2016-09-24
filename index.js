'use strict';
let request = require('request');
let cheerio = require('cheerio');
let Promise = require("bluebird");

class DiverseUI{
  constructor(){ }

  getAll(){
    return new Promise((resolve,reject)=>{
      request('http://diverseui.com',(error, response, body)=>{
        if (error){
          reject(error);
        }
        if(!error && response.statusCode == 200){
          let $ = cheerio.load(body);
          var text = $($('script')).text();
          var findAndClean = findTextAndReturnRemainder(text,"window.Data =");
          var results = JSON.parse(findAndClean);
          if (arguments[0] !== undefined){
            let filterGender = arguments[0];
            let removeIndex = results.map(function(item){
              if(item.gender !== filterGender){
                delete item.gender;
                delete item.url;
              }
            });
            results = JSON.parse(cleanArray(results));
            resolve(results);
          } else{
            resolve(results);
          }
        }
      });
    });
  }
  
  getRandom(){
    return new Promise((resolve,reject)=>{
      request('http://diverseui.com',(error, response, body)=>{
        if (error){
          reject(error);
        }
        if(!error && response.statusCode == 200){
          let $ = cheerio.load(body);
          let text = $($('script')).text();
          let findAndClean = findTextAndReturnRemainder(text,"window.Data =");
          let results = JSON.parse(findAndClean);
          if (arguments[0] !== undefined){
            let filterGender = arguments[0];
            let removeIndex = results.map(function(item){
              if(item.gender !== filterGender){
                delete item.gender;
                delete item.url;
              }
            });
            results = JSON.parse(cleanArray(results));
          }
          let result = results[Math.floor(Math.random()*results.length)];
          resolve(result);
        }
      });
    });
  }
}

// Allows for Grabbing a JS Variable from HTML Text
function findTextAndReturnRemainder(target, variable){
    var chopFront = target.substring(target.search(variable)+variable.length,target.length);
    var result = chopFront.substring(0,chopFront.search(";"));
    return result;
}
// Clean an array of empty objects
function cleanArray(originalArray){
  return JSON.stringify(originalArray.filter(function(el) { return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;}));
}

module.exports = DiverseUI;
