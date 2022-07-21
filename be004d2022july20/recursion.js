function factorialNormal(number){
    var fact = 1
    for(var i = 2; i <= number; i ++){
        fact = fact * i
    }
    return fact
}

function factorial(number){
    if(number == 1) return 1
    return factorial(number - 1) * number
}
console.log(factorialNormal(10))
console.log(factorial(10))