// var a = 12;
// var b = 13;

// function abc() {
//     var a = 100;
//     console.log(a); // 100
//     console.log(b); // 13
// }

// abc();
// console.log(a); // 12
// console.log(b); // 13

// ============ try and catch(debugg the code) ========================>
    console.log('hello');

function sum(a, b) {
    //  Do something 
    // throw Error('Refernce Error due to non aligmnet'); 

    
    try {
        // do something
        throw Error('Refernce Error due to non aligmnet'); 
        let c = a + b;
        return c;

    } catch(error) {
    console.log("hey there user how are you doing")
    // screen uhhh something went wrong
   
}

}

let result = sum(10, 20);
console.log(result); // 30



let myFunction = function (newValue1, newValue2) {
    try {
        // Do some - thing
        // throw Error('somethig got missprinited');
        let result = newValue1 + newValue2;
        return result;
    } catch (error) {
        console.log('error caught by users');
    }
}
let finalResult = myFunction(20, 30);
console.log(finalResult); // 50

let insure1 = function(valueX, valueY) {
    try {
        // throw Error("Object creation");
        let result = valueX * valueY;
        return result;
    } catch(error) {
        console.log("remove from the list");
    }
}

let concived = insure1(30, 2);
console.log(concived);

let divisionValue = function(div1, div2) {
    try {
        // throw Error("some part is missing");
        let result = div1 / div2;
        return result;
    } catch(error) {
        console.log("error caught");
    }
}

let divResult = divisionValue(30, 2);
console.log(divResult); // 15

const promiseRestApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        let setLetGo = null;
        if(setLetGo === true) {
            console.log("set action is identfied");
            resolve("resolve issue");
        } else {
            console.log('set back login')
            reject(error);
        }
    },2000)
})

promiseRestApi
.then((user) => {
    
})
.catch((error) => {

})
.finally(() =>{
    
})