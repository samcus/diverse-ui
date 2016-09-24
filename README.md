# diverse-ui
## Node API for Diverse UI

Development in progress. Documentation and unit testing coming soon, please look at example.js for now.

[Diverse UI](http://diverseui.com)

Install with

```sh
npm install --save diverse-ui
```

Require as
```js
// ES5
var DiverseUI = require('diverse-ui');
var person = new DiverseUI;
person.getAll().then(function(data){
  console.log(data);
});
//ES6
let DiverseUI = require('diverse-ui');
let person = new DiverseUI;
person.getAll().then((data)=>{
  console.log(data);
});
```
