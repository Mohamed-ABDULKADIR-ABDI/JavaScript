// The Example Of The Global Scope:
var globalVar = "I am global";

function sayHello() {
    console.log(globalVar); // ✅ Works
}

sayHello();
console.log(globalVar);



// The Example Of The Fuction Scope:
// function myFunction() {
//     var functionVar = "I am inside a function";

//     console.log(functionVar); // ✅ Works
// }

// myFunction();


