// Operational Functions

// Addition

function Add(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) + Number(two);
    document.getElementById("result").value = sum;
}
// subtration
function Sub(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) - Number(two);
    document.getElementById("result").value = sum;
}
// Multiplication
function Mul(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) * Number(two);
    document.getElementById("result").value = sum;
}
// Division
function Div(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) / Number(two);
    document.getElementById("result").value = sum;
}
