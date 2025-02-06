//function to check if number is a prime number
const is_prime = (number) =>{
    if (number < 2) return false
    if (number === 2) return true
    if (number % 2 === 0) return false
    for (let i =3; i <= Math.sqrt(number); i+=2) {
        if (number % i === 0) return false
    }
    return true
}

//function to check if number is perfect
const is_perfect = (number) => {
    let sum = 1
    if(number <= 1) return false
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            sum +=i
            if (i !== number / i) sum += number / i
        }
    }
    return sum === number 
}

//check if number is armstrong
const is_armstrong = (number) =>{
    if (number < 0) return false;
    const digits = number.toString().split('').map(Number)
    const power = digits.length
    return digits.reduce((sum, digit)=> sum + Math.pow(digit, power), 0) === number;
}

//get number properties
const getProperties = (number) => {
    let properties = []
    if(is_armstrong(number)) properties.push('armstrong')
    if(number % 2 === 0){
        properties.push('even')
    }else{
        properties.push('odd')
    }
    return properties
}

//get digit sun
const digit_sum = (number) =>{
    const digits = Math.abs(number).toString().split('')
    const sum = digits.reduce((sum, digit)=> sum + parseInt(digit), 0)
    return sum
}

//fun-fact gotten from numbers api
const getFunfact = async (number) => {
    const url = ` http://numbersapi.com/${number}/math?json`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.log(error, {message: 'error getting funfact'});
    }
}

module.exports = {
    is_prime,
    is_perfect,
    getProperties,
    digit_sum,
    getFunfact
}