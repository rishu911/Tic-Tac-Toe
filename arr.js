// // // // // // // let marks=[12,78,98,56];
// // // // // // // // console.log(marks.length);
// // // // // // // // for(let i=0;i <marks.length;i++){
// // // // // // // //     console.log(marks[i]);
// // // // // // // // }
// // // // // // // for(let mark of marks){
// // // // // // //     console.log(mark); 
// // // // // // // }
// // // // // // let cities=["delhi","muzaffarpur","patna","pune"];
// // // // // // for(let city of cities){
// // // // // //     console.log(city.toUpperCase());
// // // // // // }
// // // // // let marks=[85,97,44,37,76,60];
// // // // // sum=-0;

// // // // // for(let val of marks){
// // // // // sum=val+sum;
// // // // // }
// // // // // let average = (sum/marks.length);
// // // // // console.log(`average of marks is  ${average}`);
// // // // let price=[250,645,300,900,50];
// // // // let offer;
// // // // for(let val of price){
// // // // offer=(val/10);
// // // // val=val-offer;
// // // // }
// // // // console.log(val);
// // // let item=[250,645,300,900,50];
// // // // for(let i=0;i<item.length;i++){
// // // //     let offer=item[i]/10;
// // // //     item[i]-=offer;
// // // // }
// // // // console.log(item);
// // // for(let i=0;i<item.length;i++){
// // //       let offer=item[i]/10;
// // //       item[i]=item[i]-offer;
// // // }
// // // console.log(item);
// // let foodItems=["litchi","guava","chips","potato"];
// // foodItems.pop();
// // console.log(foodItems.toString());
// let marks=[45,67,55,66];
// // let marks2=[34,67,87,34];
// // let hero=["shaktiman","marvel"];
// // hero.shift();
// // console.log(marks.slice(0,3)); 
// marks.splice(1,2,99,34);
// console.log(marks);
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 companies.shift();
companies.splice(2,1,"ola");
companies.push("amazon");
console.log(companies);
