function checkScope() {
    "use strict";
    //let i = "Function Scope";
    if(true) {
        var i = "Block Scope";
        console.log("Block Scope i is:", i);
    }
    console.log("Function Scope i is: ", i);

    return i;

}

checkScope();