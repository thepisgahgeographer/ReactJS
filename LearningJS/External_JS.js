// //alert("Hello Yuri")
//
// let message = "Hello";
// alert(message);
//
//
// //Use of Constant Variables
// const myBirthday = "7/5/1984"
//
// //alert(myBirthday);
//
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
//
// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// //alert(color); // #FF7F00
//
// console.log(`The coloring is ${color}`);
//
// let testOne;
// console.log(typeof(COLOR_RED));
// //console.log(testOne);
// //prompt("Hello Yuri", 37);
// //
// console.log(4**(1/2));
//
//
// //
// // let value = true;
// // alert(typeof value); // boolean
// //
// // value = String(value); // now value is a string "true"
// // alert(typeof value); // string
//
// console.log(15%6);
//
//
//
// let apples = "2";
// let oranges = "3";
//
// // both values converted to numbers before the binary plus
// console.log(( +apples + +oranges )); // 5
//
// let elevation = 2200;
// //elevation += 100;
// ++elevation;
//
// // console.log(elevation);
// // console.log("" + 1 + 0);
// // console.log("" - 1 + 0);
// // console.log(true + false);
//
// // a = 0;
// // b = 1;
// // console.log(1 == false);
// //
// // if (a==0) {
// //     console.log("True");
// // }
// // else {
// //     console.log("False");
// // }
//
// let hibritenMtn = 2211;
//
// //let result = (hibritenMtn > 2200) ? console.log("True"): console.log("False");
//
//
// // //let eleTest = (hibritenMtn<=2211) ? console.log("2211"): console.log("Wrong");
// // let test2 = console.log(null || undefined || 2000);
// // alert( 1 && 2 && null && 3 );
//
// // let i = 0;
// // do {
// //   alert( i );
// //   i++;
// // } while (i < 3);
//
// // let test = 1;
// // // do {
// // //   console.log(test);
// // //   test++;
// // // } while (test <11);
// //
// // while(test <11){
// //   console.log(test);
// //   test++;
// // }
//
// // let sum = 0;
// //
// // while (true) {
// //   let value = +prompt("Enter a number", '');
// //   if (!value) break; // (*)
// //   sum += value;
// // }
// // alert( 'Sum: ' + sum );
// //
// // for (let i = 0; i < 10; i++) {
// //   if (i % 2 == 0) continue;
// //   console.log(i);
// //   console.log("Hello");
// // };
// //
// //
// // outer: for (let i = 0; i < 3; i++) {
// //   for (let j = 0; j < 3; j++) {
// //     let input = prompt(`Value at coords (${i},${j})`, '');
// //     // if an empty string or canceled, then break out of both loops
// //     if (!input) break outer; // (*)
// //     // do something with the value...
// //   }
// // }
// // alert('Done!');
//
// // console.log(`Yuri is a great\nperson`);
// //
// // console.log(1 + 1 == 2 && 10 * 10 > 50);
//
// let hibriten = 2211;
// let hen = 1890;
//
// let final = (hen > hibriten)? console.log("True"): console.log("False");
//
// console.log("5" - 1);
// let result = "5" + 1;
// console.log(typeof result);
//
// console.log(`Hibriten mtn is ${hibriten}`);
// console.log("Hibriten Mountain is", hibriten);
//
//
// const value = ()=>{
//   for (var i = 1; i < 11; i++) {
//       console.log(i);
//   }
// };
//
// // value();
// let n = 2;
// n *= 3 + 5;
// //console.log(n);
//
// let counterPre = 0;
// ++counterPre;
// console.log(counterPre);
//
// // let counterPost = 0;
// // // counterPost++;
// // // console.log(counterPost);
//
// let num = 1;
// let str = "1";
// console.log(num === str);

//mountain = prompt("What is the elevation");

// if (mountain>=2211) {
//   console.log("Hibriten Mountain");
// } else if (mountain<2211 & mountain>1950) {
//   console.log("Hen Mountain");
// } else {
//   console.log("Timbered Ridge");
// }
//
let mountainRange = new Object();
//let brushies = {};


mountainRange.name = "Brushy Mountains";
mountainRange.maxHeight = 2211;
mountainRange.minHeight = 1800;
mountainRange.elevation = () =>{
  return mountainRange.maxHeight - mountainRange.minHeight
};

// console.log(typeof mountainRange);
// console.log(mountainRange.name);
// console.log(mountainRange.elevation());

//
// let brushies = new Array();
// console.log(typeof brushies);
// console.log(window.screen.height);

// let test = (mountainRange.name == "Brushy Mountains") && (mountainRange.maxHeight<=2211)
// console.log(test);
//
// let mtnRange = ["Hibriten", "Hen", "Timbered Ridge"];
// console.log(mtnRange.length);
// console.log(mtnRange[2]);

let mountains = {
  name(){
    console.log("Hibriten Mtn");
  },
  height(){
    console.log(2211);
  }
};

console.log(mountains.name());

let arr = [ "1", "10", "100", "1000" ];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    // will run 3 times
};

//
//
//
// class Page {
//     constructor(text) {
//         this.text = text;
//     }
//     print() {
//         console.log(this.text);
//     }
// }
//
// class Notebook {
//     constructor() {
//         this.pages = [];
//     }
//     addPage(text) {
//         var page = new Page(text);
//         this.pages.push(page);
//     }
//     print() {
//         for (let page of this.pages) {
//             page.print();
//         }
//     }
// }
//
// var mathNotes = new Notebook();
// mathNotes.addPage("Arithmetic: + - * / ...");
// mathNotes.addPage("Trigonometry: sin cos tan ...");
//
// mathNotes.print();
// // ..
//
//
//
// class Publication {
//     constructor(title,author,pubDate) {
//         this.title = title;
//         this.author = author;
//         this.pubDate = pubDate;
//     }
//
//     print() {
//         console.log(`
//             Title: ${ this.title }
//             By: ${ this.author }
//             ${ this.pubDate }
//         `);
//     }
// }

var mountainTops = [1850, 2011, 2211];

for (val of mountainTops){
  console.log(val);
}

let mountainTopsTest = [...mountainTops];
console.log(mountainTopsTest);

let loopTest1 = "Brushy Mountains";
//loopTest2 = [...loopTest1];
for (val of loopTest1){
  console.log(val);
}



var buttonNames = new Map();
buttonNames.set(btn1,"Button 1");
buttonNames.set(btn2,"Button 2");

for (let [btn,btnName] of buttonNames) {
    btn.addEventListener("click",function onClick(){
        console.log(`Clicked ${ btnName }`);
    });
}








//X
