// THE receivesAFunction FUNCTION SHOULD:
// TAKE A CALLBACK FUNCTION AS AN ARGUMENT
// CALL THE CALLBACK FUNCTION 
// IT DOESN'T MATTER WHAT THIS FUNCTION RETURNS, SO LONG AS IT CALLS THE CALLBACK FUNCTION

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return () => {

    }
}

// // function returnsAnAnonymousFunction() {
//     return function() {

//     }
// }