// ------------ hoisting ------------

console.log(a);
var a = 25;

function calculator(a, b, action) {
    try {
        let res;
    if(action === 'add') {
        res = a + b;
    } else if(action === 'sub') {
        res = a - b;
    } else if(action === 'multiplie') {
        res = a * b;
    } else if(action === 'division') {
        res = a % b
    }
    return res;
    }catch(error) {
        
    }
}
let result1 = calculator(5, 10, 'add');
console.log(result1);
let result2 = calculator(10, 5, 'add');
console.log(result2);
let result3 = calculator(5, 10, 'add');
console.log(result3);
let result4 = calculator(10, 5, 'add');
console.log(result4);