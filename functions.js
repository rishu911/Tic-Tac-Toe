// // // // // // function myFunction(){
// // // // // //     console.log("hey!!!");
// // // // // //     console.log("i am learning js");
// // // // // // }
// // // // // // myFunction();
// // // // // function myFunction(number1,number2){
// // // // //     s=number1+number2;
// // // // //     return s;
// // // // // }
// // // // // let sum=myFunction(3,4);
// // // // // console.log(sum); 
// // // // const mul=(a,b)=>{
// // // //     // console.log(a*b);
// // // // return a*b;
// // // // };
// // // // // mul(4,5);

// // // function letters(word){
// // //     console.log()

// // // }
// // // let print=()=>{
// // //     console.log("hello");
// // // };
// // const arrowmul=(a,b)=>{
// // return a*b;
// // };
// // let vowel=[a,e,i,o,u];
// // for(let i=a;i<=z;i++){
// //     if(i=vowel){
// //         console.log(vowel.length);
// //     }
// // }
// let countVowels=(str)=>{
//    let count=0;
//     for(const char of str){
//         if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
// // console.log(count);
//  return count;
// }
let countVow=(str)=>{
    let count=0;
    for(let char of str){
       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
       }
       console.log(count);
    }

    }