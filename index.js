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
}

module.exports = DiverseUI;
