// let display = document.getElementById("math");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let zero = document.getElementById("zero");

// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multiply = document.getElementById("multiply");
// let division = document.getElementById("division");

// let C = document.getElementById("C");
// let equal = document.getElementById("equal");
// let decimal = document.getElementById("decimal");
// let back = document.getElementById("back");



// function inputDisplay(letter){
//     letter.addEventListener('click', function(){      
//         display.innerText += letter.innerText;
        
//     })
// }

// one.addEventListener('click', inputDisplay(one))
// two.addEventListener('click', inputDisplay(two))
// three.addEventListener('click', inputDisplay(three))
// four.addEventListener('click', inputDisplay(four))
// five.addEventListener('click', inputDisplay(five))
// six.addEventListener('click', inputDisplay(six))
// seven.addEventListener('click', inputDisplay(seven))
// eight.addEventListener('click', inputDisplay(eight))
// nine.addEventListener('click', inputDisplay(nine))
// zero.addEventListener('click', inputDisplay(zero))


// plus.addEventListener('click', inputDisplay(plus))
// minus.addEventListener('click', inputDisplay(minus))
// multiply.addEventListener('click', inputDisplay(multiply))
// division.addEventListener('click', inputDisplay(division))
// back.addEventListener('click', function(){
//     console.log(typeof display.innerText);
//     display.innerText = display.innerText-1;
// })
// C.addEventListener('click', function(){
//     display.innerText = '';
// })
// equal.addEventListener('click', function(){

// })

// equal.addEventListener('click', function(){
    
// })

console.log("meow")
const display = document.getElementById("display1");

function appendToDisplay(input){
    console.log("meow")
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error!!!!";
    }
}

function back() {
    var value = display.value;
    display.value = value.substr(0, value.length - 1);
}