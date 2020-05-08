//If-else
// Example 1:
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));

//Example 2:
 let x = 50;
  if (x > 50) {
    console.log("Mama always said dyin' was a part of life");
  } else if (x > 5) {
    console.log("I sure wish it wasn't.");
  } else {
    console.log("My name's Benjamin Buford Blue. People call me Bubba");
  }

  //Switch statement:

  let expr = 'Cherries';
  switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }