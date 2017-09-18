function startCalculation()
{
	
}
var number;
var number2;
var result;
var operatorValue;
function clear()
{
	document.getElementById("textarea").innerHTML='';
}
function value(text)
{
	number=text;
	document.getElementById("textarea").innerHTML=number;
	
}

function operation(operator)
{
 	operatorValue=operator;
	document.getElementById("textarea").innerHTML=operatorValue;
	
}
function equals()
{
	calculate(number,number2,operatorValue);
}
function calculate(number,number2,operatorValue)
{
	if((number !==null)&&(number2!==null)&&(operatorValue!==null))
	{
		checkOperation();
	}
	else
	{
		alert("get suitable inputs");
	}
}
function checkOperation(number,number2,operatorValue)
{
	if(operatorValue==='+')
	{
		addition(number,number2);
	}
	else if(operatorValue==='-')
	{
		subtraction(number,number2);
	}
	else if(operatorValue==='*')
	{
		multiply(number,number2);
	}
	else if(operatorValue==='/')
	{
		division(number,number2);
	}
	else
	{
		modulous(number,number2);
	}
}
function addition(number,number2)
{
	result=number+number2;
	document.getElementById("textarea").innerHTML=result;
	
}
function subtraction(number,number2)
{
	result=number-number2;
	document.getElementById("textarea").innerHTML=result;
}
function multiply(number,number2)
{
	result=number*number2;
	document.getElementById("textarea").innerHTML=result;
}
function division(number,number2)
{
	result=number/number2;
	document.getElementById("textarea").innerHTML=result;
}
function modulous(number,number2)
{
	result=number%number2;
	document.getElementById("textarea").innerHTML=result;
}
	