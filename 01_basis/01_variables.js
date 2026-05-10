const accountId=144552
let accountEmail="anamikaydv29@gmail.com"
var accountPassword="12346"
accountCity="Kanpur"
let accountState;

//accountId=2 // not allowed

accountEmail="anadv@gmail.com"
accountPassword="243"
accountCity="Lucknow"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])