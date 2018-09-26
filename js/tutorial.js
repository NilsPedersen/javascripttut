
document.write("<h1>Hello World!</h1>");

// var num = 42;  A number without decimals

var price = 55.55;
document.write(price);

var name = 'John';
var text = "My name is John Smith";
/* You can get double quotes inside of double quotes using the escape character like this: \" or \' inside of single quotes. */

var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
document.write(sayHello);
// use  \  to insert special characters into strings

var x = 10 + 5;
document.write(x);

// Outputs 15

var x = 10;
var y = x + 5 + 22 + 45 + 6548;
document.write(y);

//Outputs 6630

var x = 100 / 5;
document.write(x);

// Outputs 20

var myVariable = 26 % 6;

//myVariable equals 2





/* The Modulus Most explanations miss one important step, let's fill the gap using another example.

Given the following:

Dividend: 16
Divisor: 6

The modulus function looks like this:

16 % 6 = 4

Let's determine why this is.

First, perform integer division, which is similar to normal division, except any fractional number (a.k.a. remainder) is discarded:

16 / 6 = 2

Then, multiply the result of the above division (2) with our divisor (6):

2 * 6 = 12

Finally, subtract the result of the above multiplication (12) from our dividend (16):

16 - 12 = 4

The result of this subtraction, 4, the remainder, is the same result of our modulus above! */



var num = 10; 
// Comparison Operators  The equal to (==) operator   num == 8 will return false



var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
   alert("JavaScript is easy to learn.");
}

/*The if Statement

Very often when you write code, you want to perform different actions based on different conditions.
You can do this by using conditional statements in your code. */



if (expression) {
   // executed if condition is true
}
else {
   // executed if condition is false
}

/* The else Statement

Use the else statement to specify a block of code that will execute if the condition is false. */

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
   alert("This is my first condition");
}
else {
   alert("This is my second condition");
}

/* else if

You can use the else if statement to specify a new condition if the first condition is false.
The above code says:
- if course is equal to 1, output "HTML Tutorial";
- else, if course is equal to 2, output "CSS Tutorial";
- if none of the above condition is true, then output "JavaScript Tutorial"; 
The final else statement "ends" the else if statement and should be always written after the if and else if statements
The final else block will be executed when none of the conditions is true.  */



var day = 2;
switch (day) {
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
  case 3:
    document.write("Wednesday");
    break;
  default:
    document.write("Another day");
}
// Outputs "Tuesday"

/* Switch

In cases when you need to test for multiple conditions, writing if else statements for each condition might not be the best solution.
The switch statement is used to perform different actions based on different conditions. 

When JavaScript code reaches a break keyword, it breaks out of the switch block.
This will stop the execution of more code and case testing inside the block.
*/

var color ="yellow";
switch(color) {
   case "blue": 
     document.write("This is blue.");
     break;
   case "red": 
     document.write("This is red.");
     break;
   case "green": 
     document.write("This is green."); 
     break;
   case "orange": 
      document.write("This is orange."); 
      break;
   default: 
      document.write("Color not found.");
}
//Outputs "Color not found."

/* The default Keyword

The default keyword specifies the code to run if there is no case match. */




for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}

/* Loops

Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.

JavaScript has three types of loops: for, while, and do while.

The for loop is commonly used when creating a loop.

The syntax: for (statement 1; statement 2; statement 3) {
   code block to be executed
}

Statement 1 is executed before the loop (the code block) starts.
Statement 2 defines the condition for running the loop (the code block).
Statement 3 is executed each time after the loop (the code block) has been executed.

In this example, Statement 1 sets a variable before the loop starts (var i = 1).
Statement 2 defines the condition for the loop to run (i must be less than or equal to 5).
Statement 3 increases a value (i++) each time the code block in the loop has been executed.


Also, you can initiate more than one value in statement 1, using commas to separate them.

for (i=1, text=""; i<=5; i++) {
   text = i;
   document.write(i + "<br />");
}
*/




var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}
// This will output the values from 0 to 10. 

/* The While Loop
The while loop repeats through a block of code, as long as a specified condition is true.

If you forget to increase the variable used in the condition, the loop will never end. 

The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.
*/



var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 
// This prints out numbers from 20 to 25. 

/* The Do...While Loop

The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.

The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.
*/



for (i = 0; i <= 10; i++) {
   if (i == 5) {
     break; 
   }
   document.write(i + "<br />");
}
//Once i reaches 5, it will break out of the loop. 

/* Break

The break statement "jumps out" of a loop and continues executing the code after the loop.
*/



for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
   document.write(i + "<br />");
}
// The value 5 is not printed, because continue skips that iteration of the loop.

/* Continue

The continue statement breaks only one iteration in the loop, and continues with the next iteration.
*/




function myFunction() {
   alert("Calling a Function!");
 }
 
 myFunction();
 //Alerts "Calling a Function!"

/* Defining a Function

To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses ().

The code to be executed by the function is placed inside curly brackets {}.

To execute the function, you need to call it.
To call a function, start with the name of the function, then follow it with the arguments in parentheses.
*/


function sayHello(name) {
   alert("Hi, " + name);
}

sayHello("David");
//Alerts "Hi, David"

/* Function Parameters

Functions can take parameters.
Function parameters are the names listed in the function's definition.

functionName(param1, param2, param3) {
   // some code
}

*/


function sayHello(name, age) {
   document.write( name + " is " + age + " years old.");
}

/* Multiple Parameters

You can define multiple parameters for a function by comma-separating them. function myFunc(x, y) {
   // some code
}

When calling the function, provide the arguments in the same order in which you defined them.
*/




function myFunction(a, b) {
   return a * b;
}

var x = myFunction(5, 6); 
// Return value will end up in x
// x equals 30

function addNumbers(a, b) {
   var c = a+b;
   return c;
}
document.write( addNumbers(40, 2) );
//Outputs 42

/* Function Return

A function can have an optional return statement. It is used to return a value from the function.

This statement is useful when making calculations that require a result.
When JavaScript reaches a return statement, the function stops executing
*/


alert("Hello\nHow are you?");

/* The Alert Box

JavaScript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes.

Alert Box
An alert box is used when you want to ensure that information gets through to the user.
When an alert box pops up, the user must click OK to proceed.
The alert function takes a single parameter, which is the text displayed in the popup box.

To display line breaks within a popup box, use a backslash followed by the character n.

*/


var user = prompt("Please enter your name");
alert(user);

/* Prompt Box

A prompt box is often used to have the user input a value before entering a page.
When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

The prompt() method takes two parameters.
- The first is the label, which you want to display in the text box.
- The second is a default string to display in the text box (optional).
*/



var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

/* Confirm Box

A confirm box is often used to have the user verify or accept something.
When a confirm box pops up, the user must click either OK or Cancel to proceed.
If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.
*/


