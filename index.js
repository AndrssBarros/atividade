//Elabore scripts usando a função prompt que:
//Leia um valor e imprima os resultados: “É maior que 
//10” ou “Não é maior que 10” ou ainda “É igual a 10”
var x = prompt("X","");
if (x > 10) {
alert("Maior que 10!");
} else {
alert("Menor que 10!");
}

//Some dois valores lidos e imprima o resultado
var x = prompt("X","");
var y = prompt("Y","");
var res = parseInt(x) + parseInt(y);
alert(res);

//Leia 2 valores e a operação a ser realizada (+, -, * ou /) 
//e imprima o resultado (use um switch)
var x  = prompt("X","");
var y  = prompt("Y","");
var op = prompt("Operação:");
switch(op){
case('+'):
alert(parseInt(x) + parseInt(y));        
break;
        
case('-'):
alert(parseInt(x) - parseInt(y));
break;
        
case('*'):
alert(parseInt(x) * parseInt(y));
break;
        
case('/'):
alert(parseInt(x) / parseInt(y));
break;
        
default:
alert("Escolha uma operação valida");
break;
}

//Leia um nome e um valor n e imprima o nome n vezes 
//usando o laço for

