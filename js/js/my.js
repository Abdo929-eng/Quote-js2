//Asignment 1      Asignment 2 
//(Q1)

/*
var A=5;
console.log(A);
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//(Q2)

/*
var A=+window.prompt("Enter a number");
if(A % 3 == 0 && A % 4 == 0){
console.log(`yes`);
}
else{
console.log(`No`);
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q3)

/*
var A=+window.prompt("Enter a number1");
var B=+window.prompt("Enter a number2");
B > A ? console.log(B) : console.log(A);
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q4)

/*
var A=+window.prompt("Enter a number");
if(A>0){
console.log(`postive`);
}
if(A<0){
    console.log(`negative`);
}
else{
    console.log(`Zero`);
}
 */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q5)


/*
for(var i=0;i<3;i++){
    var x=+window.prompt("Enter a number")
    if(i==0){
        min=x;
        max=x;
    }
    else{
       if(x>max){
         max=x;
        }
        if(x<min){
        min=x;
        }
        }
}
console.log(`max number is ${max}`);
console.log(`min number is ${min}`);
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q6)

/*
for(var i=0;i<2;i++){
    var x=+window.prompt("Enter a number")
  if(x%2==0)
    console.log(`${x} is Even`);
  else
  console.log(`${x} is odd`);
}
 */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q7)

/*
var char=window.prompt("Enter a number")
switch(char){
    case"a":
    case"e":
    case"i":
    case"o":
    case"u":
    console.log(`char is vowel`);
    break;
    default:
    console.log(`char is consonant`);
}
    */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q8)

/*
var x=+window.prompt("Enter a number");
for(i=1;i<=x;i++){
console.log(i);
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q9)

/*
var x=+window.prompt("Enter a number");
for(i=x;i<=x+55;i=i+5){
    console.log(i);
}

*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q10)

/*
var x=+window.prompt("Enter a number");
for(i=1;i<=x;i++){
    if(i%2==0){
        console.log(i);
    }
}
 */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q11)

/*
var x=+window.prompt("Enter a number");
var y=+window.prompt("Enter a number");
console.log(x**y);
for(i=1;i<=y;i++){
    console.log( `${x} *`);
    if(i==y){
    console.log( ` = ${x**y}`);
    }
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q12)

/*
var x=+window.prompt("Enter marks of Subject 1");
var y=+window.prompt("Enter marks of Subject 2");
var z=+window.prompt("Enter marks of Subject 3");
var d=+window.prompt("Enter marks of Subject 4");
var f=+window.prompt("Enter marks of Subject 5");
var total=x+y+z+d+f, N=5 ,avr=total/N ,prc=total/(N*100)*100;
console.log(`total marks = ${ total}`);
console.log(`Average marks = ${avr}`);
console.log(`Precantage marks = ${prc}`);
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


//(Q13)

/*
var mmonth_number=+window.prompt("Enter a Number of month :");
switch(mmonth_number){

case 1 :
console.log(`Days in Month : 31`);
break;
case 2 :
console.log(`Days in Month : 28`);
break;
case 3 :
console.log(`Days in Month : 31`);
break;
case 4 :
console.log(`Days in Month : 30`);
break;
case 5 :
console.log(`Days in Month : 31`);
break;
case 6 :
console.log(`Days in Month : 30`);
break;
case 7 :
console.log(`Days in Month : 31`);
break;
case 8 :
console.log(`Days in Month : 30`);
break;
case 9 :
console.log(`Days in Month : 31`);
break;
case 10 :
console.log(`Days in Month : 30`);
break;
case 11 :
console.log(`Days in Month : 31`);
break;
case 12 :
console.log(`Days in Month : 30`);
break;

}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q14)

/*
var Physics=+window.prompt("Enter marks of Subject 1");
var Chemistry=+window.prompt("Enter marks of Subject 2");
var Biology=+window.prompt("Enter marks of Subject 3");
var Computer=+window.prompt("Enter marks of Subject 4");
var Mathematics=+window.prompt("Enter marks of Subject 5");
var sum=Physics+Chemistry+Biology+Mathematics+Computer,N=5,G=100;
var Precantage=(sum/(N*G)*100);


if(Precantage>=90){
    console.log(`Grade A`);
}
else if(Precantage>=80 && Precantage<90){
    console.log(`Grade B`);
}
else if(Precantage>=70 && Precantage<80){
    console.log(`Grade C`);
}
else if(Precantage>=60 && Precantage<70){
    console.log(`Grade D`);
}

else if(Precantage>=40 && Precantage<50){
    console.log(`Grade E`);
}
else{
    console.log(`Grade F`);
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q15)

/*
var mmonth_number=+window.prompt("Enter a Number of month :");
switch(mmonth_number){

case 1 :
console.log(`Days in Month : 31`);
break;
case 2 :
console.log(`Days in Month : 28`);
break;
case 3 :
console.log(`Days in Month : 31`);
break;
case 4 :
console.log(`Days in Month : 30`);
break;
case 5 :
console.log(`Days in Month : 31`);
break;
case 6 :
console.log(`Days in Month : 30`);
break;
case 7 :
console.log(`Days in Month : 31`);
break;
case 8 :
console.log(`Days in Month : 30`);
break;
case 9 :
console.log(`Days in Month : 31`);
break;
case 10 :
console.log(`Days in Month : 30`);
break;
case 11 :
console.log(`Days in Month : 31`);
break;
case 12 :
console.log(`Days in Month : 30`);
break;

}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q16)

/*
var char=window.prompt("Enter a number")
switch(char){
    case"a":
    case"e":
    case"i":
    case"o":
    case"u":
    console.log(`char is vowel`);
    break;
    default:
    console.log(`char is consonant`);
}
    */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q17)

/*
var A=+window.prompt("Enter a number 1");
var B=+window.prompt("Enter a number 2");
switch(true){
    case (A>B):
        console.log(`A is the largest`);
        break;
        default:
            console.log(`B is the largest`);    
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q18)

/*
var A=+window.prompt("Enter a number");
if(A!=0){
    switch(true){
        case (A%2==0):
            console.log(` Even Number`);
            break;
            default:
                console.log(`Odd Number`);    
    }
}
else{
    console.log(` Neither Even Nor Odd`);
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q19)

/*
var A=+window.prompt("Enter a number");
if(A!=0){
    switch(true){
        case (A>0):
            console.log(` Postive Number`);
            break;
            default:
                console.log(`Negative Number`);    
    }
}
else{
    console.log(` Number is Zero`);
}
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//(Q20)

/*
var A = +window.prompt("Enter a number 1");
var O = window.prompt("Enter a Operator");
var B = +window.prompt("Enter a number 2");
switch(O){

case '+':
    console.log(`${A} + ${B} = ${A+B}`);
break;
case '-':
    console.log(`${A} - ${B} = ${A-B}`);
break;
case '*':
    console.log(`${A} * ${B} = ${A*B}`);
break;
case '/':
    console.log(`${A} / ${B} = ${A/B}`);
break;
case '**':
    console.log(`${A}^${B} = ${A**B}`);
break;
case '%':
    console.log(`${A} % ${B}= ${A%B}`);
break;
default:
    console.log('');

}
*/



/*
var email=document.getElementById("em").Value;
var pass=document.getElementById("pa").Value;
var butt=document.getElementById("bu");

butt.onclick=function(){

if(email==`ahmedmohamed` && pass==`01092349723`){

    console.log(`yes`);
}
    else{

    console.log(`No`);
}

}
*/

/*

function summ(n1,n2){
    var sum=n1+n2;
    return sum;
}
function avr(x,y){
  avr=summ(x,y)/2;
  console.log(avr);
}
avr(5,20);

*/
/*
var user={

name: `Abdelrhman`,
Age:25,
position: `CivilEngineer`,
site:`as`

}

console.log(user.name);
*/



// Asignment 2

let quoteL=document.getElementById("quote");
let pirsonL=document.getElementById("pirson");
let but=document.getElementById("bttn");
let quoteList=[

{  quote:"Be yourself; everyone else is already taken.",
    pirson:"― Oscar Wilde " },

{  quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
     pirson:"― Marilyn Monroe "   },

 {  quote:"So many books, so little time..",
  pirson:"― Oscar Wilde "   },

 {  quote:"Be yourself; everyone else is already taken.",
    pirson:"― Frank Zappa "   },

{  quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
      pirson:"―  Albert Einstein "   },

{  quote:"A room without books is like a body without a soul..",
     pirson:"―  Marcus Tullius Cicero "   },

 {  quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
      pirson:"― Bernard M. Baruch  "   },

  {  quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams",
      pirson:"―  Dr. Seuss  "   },

  {  quote:"Be the change that you wish to see in the world.",
     pirson:"―  Mahatma Gandhi  "   },

{  quote:"In three words I can sum up everything I've learned about life: it goes on.",
          pirson:"―  Robert Frost  "   },

 {  quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
         pirson:"― Albert Camus  "   },

  {  quote:"A friend is someone who knows all about you and still loves you.",
       pirson:"―  Elbert Hubbard  "   },





]

let number;
let stor=[];

but.onclick =function(){

if(stor.length===quoteList.length){
    stor=[];
}

do{
    number=Math.floor( Math.random() * quoteList.length);
}while(stor.indexOf(number)!==-1)

stor.push(number);
quoteL.innerHTML=quoteList[number].quote;
pirsonL.innerHTML=quoteList[number].pirson;

}


