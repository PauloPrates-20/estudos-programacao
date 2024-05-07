var FIRST_NAME = "Paulo";
var ANOTHER_NAME = 1;
var X = true;
function greeting(name) {
    console.log("Ol\u00E1 ".concat(name));
}
greeting(FIRST_NAME);
// greeting(ANOTHER_NAME);
// greeting(X);
