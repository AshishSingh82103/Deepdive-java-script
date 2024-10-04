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
    console.log("hey there user how are you doing") // output-printed
    // screen uhhh something went wrong
   
}

}

let result = sum(10, 20);
console.log(result); // 30

let myFunc = function(newValue1, newValue2) {
    let userId = "832109";
    let password = "singh@82103";
    let login = true;
    if(userId == "832109") {
        console.log("userdefined");
    } else if(password == "singh@82103") {
        console.log("password created");
    } else if(login == true) {
        console.log('login is true');
    } else {
        console.log('settings default');
    }
    throw Error("some message printed");
    let result = newValue1 + newValue2;
    return result;
}

let result1 = myFunc(10, 3);
console.log(result1);

let promise = new Promise((resolve, reject)=> {{
    setInterval(() => {
        let id = null;
        setInterval(() => {
            if(id === null) {
                console.log('System did not put out of the report from the user');
            } else {
                console.log('user not login into on it!')
            }
        }, 4000);
    }, 2000);
}});
promise
.then((user) => {
    console.log("user", user);
})
.catch((error) =>{
    console.log(error, "error")
})
.finally((resolve) =>{
    console.log("resolve", resolve)
})
