'use strict';
let request = require('request');
let Promise = require('bluebird');

class DiverseUI {
  constructor() {}

  getAll(gender) {
    const url = 'http://www.diverseui.com/images';
    const params = gender ? {gender: gender} : {};

    return new Promise((resolve, reject) => {
      request({url: url, qs: params}, (error, response, body) => {
        if (error) {
          reject(error);
        }

        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body));
        }
      });
    });
  }
  
  getRandom(gender) {
    return this.getAll(gender);
  }
}

module.exports = DiverseUI;
