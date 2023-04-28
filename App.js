const fs = require('fs');
const csv =require('csv-parser');
const man_2 = require('./person.json');
/***
 * Case I . Create JSON file
 */
let person ={
    name: 'Sergey',
    age : 25,
    country: 'USA',
    married: 'Nope',
    speaker:'Russian native speaker'
};

fs.writeFile('person.json',JSON.stringify(person),(err) =>{
    if(err) console.log("Error");
});

/**
 * Case 2 . Read JSON file
 */
console.log(man_2);

