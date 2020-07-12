//TYPES
/**
 * string
 * number
 * boolean
 * null
 * undefined
 * enum
 * any
 * objects
 * variable type assign syntax
 * let,var,const followed by variable name ":" followed by type
 */
//string
var user;
user = "suresh";
// user = 10 ;
//number
var userId;
userId = 1;
// userId = "10" ;
//boolean
var hasArrear;
hasArrear = false;
// hasArrear = "true" ;
//function as types
//funtion declaration
function multiply(value1, value2) {
    return value1 * value2;
}
//function expression
var multiplyFnExpression = function (value1, value2) {
    return value1 * value2;
};
var userObject = {
    name: "suresh",
    id: 1,
    hasArrear: false,
    printName: function () {
        return this.name;
    },
    associatedCustomers: [{ name: "jhon" }, { name: "mike" }]
};
console.log(userObject);
