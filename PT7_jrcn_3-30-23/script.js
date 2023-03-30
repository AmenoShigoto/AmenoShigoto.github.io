//Input
let input1 = parseInt(prompt('Please type a number'));
let input2 = parseInt(prompt('Please type a number'));
let input3 = parseInt(prompt('Please type a number'));
let input4 = parseInt(prompt('Please type a number'));
let input5 = parseInt(prompt('Please type a number'));
let input6 = parseInt(prompt('Please type a number'));

let ogNumArr = [input1, input2, input3, input4, input5, input6];
let numArr = [input1, input2, input3, input4, input5, input6];
numArr.sort(function num(a,b){
    return b-a;
})
// setInterval(num(), 5000);    
document.getElementById("num1").innerHTML = ogNumArr;
document.getElementById("num2").innerHTML = numArr;

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }
  
//     return array;
//   }
  
//   var numbers = [12, 10, 15, 11, 14, 13, 16];
//   bubbleSort(numbers);
//   document.write(numbers);
  