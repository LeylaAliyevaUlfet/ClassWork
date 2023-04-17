// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
function getUpper(anyArr) {
  return anyArr.map(
    (el) => el[0].toUpperCase() + el.slice(1, -1) + el.at(-1).toUpperCase()
  );
}
console.log(getUpper(arr1));
/////////// 2.String and Array
let text = "We are MERN-Stack developers";
// // 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
// console.log(text.replace("MERN-Stack", "Front-end"));
// // 2.Replace all 'e' with 'a'. //
// console.log(text.replaceAll("e", "a"));
// // 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
// let text2 = " in Microsoft";
// console.log(text.concat(text2));
// // 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
// let newArr = [];
// text.split("").map((el, index) => {
//   if (el.toLocaleLowerCase() === "r") {
//     newArr.push(index);
//   } else {
//     newArr;
//   }
// });
// console.log(newArr);
// // 5.Find index of first 'r' (excepting 'are').  // 9
// console.log(text.toLowerCase().indexOf("r", 5));
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
 let vowels = ['a', 'i', 'o', 'u', 'e'];
 


