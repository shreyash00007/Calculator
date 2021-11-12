function Add(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) + Number(two);
    document.getElementById("result").value = sum;
}
function Sub(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) - Number(two);
    document.getElementById("result").value = sum;
}
function Mul(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) * Number(two);
    document.getElementById("result").value = sum;
}
function Div(){
    var one = document.getElementById("A").value;
    var two = document.getElementById("B").value;
    var sum = Number(one) / Number(two);
    document.getElementById("result").value = sum;
}