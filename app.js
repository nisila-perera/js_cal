function calculate() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var operator = document.getElementById('operators').value;
    var result;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    
    document.getElementById('output').innerHTML = "Result: " + result;
}