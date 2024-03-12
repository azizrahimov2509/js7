// uyga vazifa 73, 74, 83, 84, 86, 87, 94, 95, 97, 99 masalalarni yechish

/*73.Funksiya biron qutining olchamlari ma’lumotlarini object sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib bersin. Hajm = Balandlik * Eni * Uzunlik*/


// function volume(height,width,length){
//     this.height = height;
//     this.width = width;
//     this.lenght = length; 
// }

// let  result = new volume(4,5,8);
// let res =(result.height)*(result.width)*(result.lenght);

// console.log(result);
// console.log("Hajmi: ",res);
/////////////////////////////////////////////////////////////////////////////////////////////



/*74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu massivni ichidan son1dan katta va son2dan kichik sonlarni ajratib olib yangi massiv qsaytarin. Bunda son1 doim son2dan kichik.*/

// let number1 = 4;
// let number2 = 8;
// let array = [1,5,6,12,7,19];


// function separate(num1,num2,arr){
//   let newArray= [];
//   for(i=0; i<arr.length;i++){
//     if(arr[i]>num1 && arr[i]<num2){
//         newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// let result = separate(number1,number2,array);

// console.log(result);
////////////////////////////////////////////////////////////////////////////////////////////////////



/*83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta yoki kichik harflarda yozilgani ahamiyatsiz deb oling.
Namuna:
tengmi("hello", "hELLo") =>true
tengmi("motive", "emotive") => false
tengmi("venom", "VENOM") => true
tengmi("mask", "mAskinG") => false */

// let str1 = prompt(" 1-so'z kiriting:").toLowerCase();
// let str2 = prompt(" 2-so'z kiriting:").toLowerCase();

// function compare(x,y){
//    if(x===y){
//     return true
//    }else{
//      return false 
//    }
// }

// console.log(compare(str1,str2));
////////////////////////////////////////////////////////////////////////////////////////////////////////



/*84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta belgidan iborat ekanligini qaytarsin. Bunda string.length propertisizdan foydalanish mumkin emas !!!
*/

// let word = prompt("Biror narsa kiriting: ");

// function amountOfSimbols(str){
//     let count = 0;
//    for(let char of str){
//        count++;
//    } 
//    return count;
// }

// let quantity = amountOfSimbols(word);
// console.log("So'zning belgilari: ",quantity);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*86. 86.Quyidagi namunani kuzatgan holda funkisya yasang.
Namuna:
namuna([2, 5, 3]) => [4, 10, 6]
namuna([1, 86, -5]) => [2, 172, -10]
namuna([5, 382, 0]) => [10, 764, 0] */

// let arr = [4,6,8];
// let square = arr.map(function(element){
//     return element*2
// });
// console.log(square);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*87. Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
Namuna:
wordLengths(["hello", "world"]) => [5, 5]
*/

// let arr = ["Alphabet","Mandarinjon"];

// let index = arr.map(function(el){
//     return el.length;
// });

// console.log(index);
///////////////////////////////////////////////////////////////////////////////////////////////////////////



/*94. Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan katta bo’lgan elementlarni yig’indiisini qaytarsin.
Namuna:
namuna([1, 5, 20, 30, 4, 9, 18]) => 77*/


// let numbers = [1,3,4,5,6,7];
// console.log(numbers);

// function multiply(arr){
//     let multiply = 1;
//     if(arr.length>=5){
//         arr.forEach(element => {
//             multiply*=element
//         });
//         return multiply;
//     }else{
//         return "Elementlar soni 5dan kichkina"
//     }
// }

// console.log(multiply(numbers));
///////////////////////////////////////////////////////////////////////////////////////////////////////



/*95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin.
Namuna:
Namuna([2, 7, 4]) => 13
Namuna([45, 3, 0]) => 48
Namuna([-2, 84, 23]) => 105 */

// let arr = [12,4,5,6,7];
// let sum = 0;
// arr.forEach(myFunction);

// function myFunction(element){
//   sum+=element; 
// }

// console.log(sum);
///////////////////////////////////////////////////////////////////////////////////////////////////////////



/*97. Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa, funksiya Doston uyiga qaytishi uchun qancha masofa bosib o’tishini aytsin.
Namuna:
Namuna([2, 4, 2, 5]) => 13*/

// let distanceOfDoston = [12,-4,5,-6];
// let sum = 0;
// distanceOfDoston.forEach(myFunction);

// function myFunction(element){
//   sum+=element; 
// }

// console.log(sum);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son orasidagi sonlardan tuzilgan massivni ushbu funksiya qaytarsin.
Namuna:
Namuna(2, 4) => [3]
Namuna(5, 9) => [6, 7, 8]
Namuna(2, 11) => [3, 4, 5, 6, 7, 8, 9, 10]
*/


// let son1 = +prompt("1-sonni kiriting: ");
// let son2 = +prompt("2-sonni kiriting: ");

//  function otherNumbers(x,y){
//     let arr=[]
//     for(i=x+1;i<y;i++){
//      arr.push(i);
//     }
//     return arr;
//  }

//  console.log(otherNumbers(son1,son2));















 
