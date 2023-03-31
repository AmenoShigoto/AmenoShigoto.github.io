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
document.getElementById("numm1").innerHTML = ogNumArr[0];
document.getElementById("numm2").innerHTML = ogNumArr[1];
document.getElementById("numm3").innerHTML = ogNumArr[2];
document.getElementById("numm4").innerHTML = ogNumArr[3];
document.getElementById("numm5").innerHTML = ogNumArr[4];
document.getElementById("numm6").innerHTML = ogNumArr[5];

document.getElementById("num1").innerHTML = numArr[0];
document.getElementById("num2").innerHTML = numArr[1];
document.getElementById("num3").innerHTML = numArr[2];
document.getElementById("num4").innerHTML = numArr[3];
document.getElementById("num5").innerHTML = numArr[4];
document.getElementById("num6").innerHTML = numArr[5];
// function bubbleSort(arr){
//     var i, j;
//     var len = arr.length;
//     var isSwapped = false;
//     for(i =0; i < len; i++){
//       isSwapped = false;
//       for(j = 0; j < len; j++){
//           if(arr[j] > arr[j + 1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//             isSwapped = true;
//           }
//       }
//       // IF no two elements were swapped by inner loop, then break
//       if(!isSwapped){
//         break;
//       }
//     }
//     // Print the array
//     document.getElementById('num3').innerHTML = (arr)
//   }
//   var arr = [input1, input2, input3, input4, input5, input6];
//   bubbleSort(arr);

