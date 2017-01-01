/*function add (a,b) {
  return a+b;
}

console.log(add(3,1));

var toAdd = [9,3];

console.log(add(...toAdd));
*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hello (a,b) {
  console.log('Hi ' + a +'. You are ' + b);
};

hello(...person);
hello(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'Peruna'];

final.forEach(function (name) {
  console.log('Hi, ' +  name);
});
