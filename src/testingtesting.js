const f = require('fs');
dar = []
f.readFile('sidedata.json',(err,data) => {
    console.log(JSON.parse(data).categories[0].title);
});
var v = '1'+'usman';
console.log(v);