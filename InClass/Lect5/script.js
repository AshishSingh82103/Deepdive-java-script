var a = 12;
var b = 13;

function abc() {
    var a = 100;
    console.log(a); // 100
    console.log(b); // 13
}

abc();
console.log(a); // 12
console.log(b); // 13