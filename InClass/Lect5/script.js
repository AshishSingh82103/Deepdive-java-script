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
    // console.log('hello');

// function sum(a, b) {

//     //  Do something 
//     // throw Error('Refernce Error due to non aligmnet'); 

    
//     try {
//         // do something
//         throw Error('Refernce Error due to non aligmnet'); 
//     let c = a + b;
//     return c;

//     } catch(error) {
//         // alert('Something there'); // error handeling gracefully
//         console.log(error)
//         console.log("hey there user how are you doing") // output-printed
//     // screen uhhh something went wrong
   
// }

// }


// let result = sum(10, 20);
// console.log(result); // 30

//  ==========function calcilator==============
function calculator(a, b, action) {
    try {
        // throw Error('refernce error due to non-alignment')
        let res;
        if(action === 'add') {
            // Google - server  google error add
            throw Error('google error add')
            res = a + b;
        } else if(action === 'sub') {
            // Microsoft - server  micro error sub
            // throw Error('micro error sub')
            res = a - b;
        } else if(action === 'multiplie') {
            // Digital - ocean server  digitalocean error multiplie
            // throw Error('digitalocean error multiplie')
            res = a * b;
        }
        return res;

    } catch(error) {
        console.log("error is here"); // error is here 
        console.log(error.message); // google error add

        if(error.message === 'google error add') {
            console.log('Google is giving error');
        } else if (error.message === 'micro error sub') {
            console.log('Micro error is given error')
        } else if(error.message === 'digitalocean error multiplie') {
            console.log('Digital ocean is giving error');
        }
    }
}

let result1 = calculator(1, 2, 'add');
console.log(result1, "add"); // Google is giving error

let result2 = calculator(1, 2, 'sub');
console.log(result2, 'sub'); // -1 sub

let result3 = calculator(1, 2, 'multiplie');
console.log(result3, 'multiplie'); // 2 multiplie

// console.log(result1, result2, result3);