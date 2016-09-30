'use strict';
const request = require('request');
const Promise = require('bluebird');

class DiverseUI {
  constructor() {}

  get(gender, count) {
    const url = 'http://www.diverseui.com/images';
    let params = {};

    if (gender) {
      params.gender = gender;
    }

    if (count) {
      params.count = count;
    }

    return new Promise((resolve, reject) => {
      request({url: url, qs: params}, (error, response, body) => {
        if (error) {
          reject(error);
        }

        if (!error && response.statusCode === 200) {
          const people = JSON.parse(body);

          if (count === 1) {
            resolve(people[0]);
          } else {
            resolve(people);
          }
        }
      });
    });
  }

  getAll(gender) {
    return this.get(gender);
  }

  getRandom(gender) {
    return this.get(gender, 1);
  }

  getSpecific(slug) {
    return new Promise((resolve,reject)=> {
      let getPeople = this.get();
      getPeople.then((people)=> {
        if (slug !== undefined) {
          let filterSlug = slug;
          let removeIndex = people.map((item)=> {
            if((item.url).indexOf(filterSlug) == -1) {
              delete item.gender;
              delete item.url;
            }
          });
          resolve(JSON.parse(cleanArray(people)));
        }
      });
    });
  }

}

module.exports = DiverseUI;

// Clean an array of empty objects
function cleanArray(originalArray){
  return JSON.stringify(originalArray.filter(function(el) { return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;}));
}
