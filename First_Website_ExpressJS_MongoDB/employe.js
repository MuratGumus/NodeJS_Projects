let sayName = function (name) {
    console.log(`My name is ${name}`);
};

let sayAge = function(age){
    console.log(`My age is ${age}}`);
}

module.exports ={
    sayName : sayName,
    sayAge : sayAge
}