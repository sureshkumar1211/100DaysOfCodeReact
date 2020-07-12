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
let user: string;
user = "suresh";
// user = 10 ;

//number
let userId: number;
userId = 1;
// userId = "10" ;

//boolean
let hasArrear: boolean;
hasArrear = false;
// hasArrear = "true" ;

//function as types
//funtion declaration
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
//function expression
const multiplyFnExpression = (value1: number, value2: number): number => {
	return value1 * value2;
};
// console.log(multiplyFnExpression(10, 20));

//objects
type UserObject = { name: string; id: number; hasArrear: boolean; printName: () => string; associatedCustomers: object[] };
let userObject: UserObject = {
	name: "suresh",
	id: 1,
	hasArrear: false,
	printName: function () {
		return this.name;
	},
	associatedCustomers: [{ name: "jhon" }, { name: "mike" }],
};
// console.log(userObject);
