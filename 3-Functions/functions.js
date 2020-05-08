// Simple function with No argument:
function hello() {
  console.log("Hello World");
}

  //function call
  hello();

// Simple function with one argument:
function square(number) {
    console.log("square of "+number+" is: "+(number * number));
  }


  //function call
  square(10);


  //function with more than one arguments:
  function add(number1, number2) {
    console.log("sum: " + (number1 + number2));
  }

 //function call
  add(10,15);

   //function with n arguments:
  function foo() {
    console.log("arguments:");
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

  //function call
  foo(10,15,20,25,30,35,40);

  //functions with return
  function sum(number1, number2) {
    return "sum: " + (number1 + number2);
  }

   //function call
   console.log(sum(10,15));