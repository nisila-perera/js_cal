function calc(){
    let num1="";
    let num2="";
    let operator=document.getElementById("operaters").value;
    num1=new Number(document.getElementById("num 1").value);
    num2=new Number(document.getElementById("num 2").value); 
    let lblOutput=document.getElementById("output");
    let answer;
   
    switch(operator){
        case "+":answer=num1+num2;break;
        case "-":answer=num1-num2;break;
        case "*":answer=num1*num2;break;
        case "/":answer=num1/num2;break;
    }
    lblOutput.innerHTML=answer;
}