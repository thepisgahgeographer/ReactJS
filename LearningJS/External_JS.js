// //alert("Hello Yuri");
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
mountainRange.elevation = () => {
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
  name() {
    console.log("Hibriten Mtn");
  },
  height() {
    console.log(2211);
  }
};

console.log(mountains.name());

let arr = ["1", "10", "100", "1000"];
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
// // }
//
// var mountainTops = [1850, 2011, 2211];
//
// // for (val of mountainTops){
// //   console.log(val);
// // }
//
// for ([idx, val] of mountainTops.entries()) {
//   console.log(idx, val);
// }
//
// for (vl of mountainTops.values()) {
//   console.log(vl);
// }
//
//
// // let mountainTopsTest = [...mountainTops];
// console.log(mountainTopsTest);
//
// let loopTest1 = "Brushy Mountains";
// //loopTest2 = [...loopTest1];
// for (val of loopTest1){
//   console.log(val);
// }



// var buttonNames = new Map();
// buttonNames.set(btn1,"Button 1");
// buttonNames.set(btn2,"Button 2");
//
// for (let [btn,btnName] of buttonNames) {
//     btn.addEventListener("click",function onClick(){
//         console.log(`Clicked ${ btnName }`);
//     });
// }
//
// let loopTest3 = [ 10, 20, 30 ];
// //
// // for (let [idx,val] of arr.entries()) {
// //     console.log(`[${ idx }]: ${ val }`);
// // }
//
// for([idx, val] of loopTest3.entries()){
//   console.log(idx, val);
// }

// function greeting(msg) {
//     return function who(name) {
//         console.log(`${ msg }, ${ name }!`);
//     };
// }
//
// var hello = greeting("Hello");
// var howdy = greeting("Howdy");
//
// hello("Kyle");
// // Hello, Kyle!
//
// hello("Sarah");
// // Hello, Sarah!
//
// howdy("Grant");
// Howdy, Grant!
//
//
// let increment = (inc)=>{
//   count = 0;
//   while (count<10) {
//     count = count + inc
//     console.log(inc);
//     count++;
//   }
// // };
//
// function counter(step = 1) {
//   var count = 0;
//   return function increaseCount() {
//     count = count + step;
//     return count;
//   };
// }
//
// console.log(counter(3));
//
//
// var wilsonCreek = {
//   hydro: "Wilson",
//   road: "Pineola",
//   trail: "Darkside Cliffs",
//   height: () => {
//     console.log(wilsonCreek.trail);
//   }
// };
//
// wilsonCreek.height();
// //console.log(wilsonCreek.toString());
//
// //
//
// var homework = {
//     study() {
//         console.log(`Please study ${ this.topic }`);
//     }
// };
//
// var jsHomework = Object.create(homework);
// jsHomework.topic = "JS";
// jsHomework.study();
// // Please study JS
//
// var mathHomework = Object.create(homework);
// mathHomework.topic = "Math";
// mathHomework.study();
// // Please study Math



//
//
// const dayStart = "07:30";
// const dayEnd = "17:45";
//
// function scheduleMeeting(startTime,durationMinutes) {
//     var [ , meetingStartHour, meetingStartMinutes ] =
//         startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
//
//     durationMinutes = Number(durationMinutes);
//
//     if (
//         typeof meetingStartHour == "string" &&
//         typeof meetingStartMinutes == "string"
//     ) {
//         let durationHours =
//             Math.floor(durationMinutes / 60);
//         durationMinutes =
//             durationMinutes - (durationHours * 60);
//         let meetingEndHour =
//             Number(meetingStartHour) + durationHours;
//         let meetingEndMinutes =
//             Number(meetingStartMinutes) +
//             durationMinutes;
//
//         if (meetingEndMinutes >= 60) {
//             meetingEndHour = meetingEndHour + 1;
//             meetingEndMinutes =
//                 meetingEndMinutes - 60;
//         }
//
//         // re-compose fully-qualified time strings
//         // (to make comparison easier)
//         let meetingStart = `${
//             meetingStartHour.padStart(2,"0")
//         }:${
//             meetingStartMinutes.padStart(2,"0")
//         }`;
//         let meetingEnd = `${
//             String(meetingEndHour).padStart(2,"0")
//         }:${
//             String(meetingEndMinutes).padStart(2,"0")
//         }`;
//
//         // NOTE: since expressions are all strings,
//         // comparisons here are alphabetic, but it's
//         // safe here since they're fully qualified
//         // time strings (ie, "07:15" < "07:30")
//         return (
//             meetingStart >= dayStart &&
//             meetingEnd <= dayEnd
//         );
//     }
//
//     return false;
// }
//
// scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false
// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false
//
//
// var today = new Date();
// var day = today.getDate();
// let content = document.getElementById("test").textContent = day;
// //content.textContent = day;
//
// var students = [{
//     id: 14,
//     name: "Kyle"
//   },
//   {
//     id: 73,
//     name: "Suzy"
//   },
//   {
//     id: 112,
//     name: "Frank"
//   },
//   {
//     id: 6,
//     name: "Sarah"
//   }
// ];
//
// function getStudentName(studentID) {
//   for (let student of students) {
//     if (student.id == studentID) {
//       return student.name;
//     }
//   }
// }
//
// var nextStudent = getStudentName(73);
//
// console.log(nextStudent);
// // Suzy
//



counter = 0;

let iterateFrom = (param) => {
  while (counter < 10) {
    counter = counter + param;
    console.log(counter);
    //param += counter;
  };


};

iterateFrom(4);

let brushyMtn = {
  Height: 2211,
  Peak: "Hibriten",
  Towers: true
};


for (val in brushyMtn) {
  console.log(Object.values(val));
}

// for (val in brushyMtn){
//   console.log(Object.entries(val));
// }

let str = "Hibriten Mountain";
let ary = [];

let test = str.includes("a");

for (val in str) {
  if (test == true) {
    ary.push(val);
  }
};


// console.log(ary);

let streams = {
  Harper: 45,
  Lost_Cove: 40,
  Wilson: 50
};

if (streams["Harper"] == 40) {
  console.log("Value Found");
} else {
  console.log("Value Not Present");
}

let check = (param) => {
  if (param >= 80 && param <= 120) {
    console.log(`${param} is ~ 100`);
  }
};

check(89);


let brushiesPeak = [{
    Name: "Hibriten",
    Height: 2211
  },
  {
    Name: "Hen",
    Height: 1925
  },
  {
    Name: "Timbered Ridge",
    Height: 1756
  }
];

const mountainPeak = (param) => {
  for (let peak of brushiesPeak) {
    if (peak.Name == param) {
      console.log(peak.Height);
    }
  }
};

mountainPeak("Hibriten");



var students = [{
    id: 14,
    name: "Kyle"
  },
  {
    id: 73,
    name: "Suzy"
  },
  {
    id: 112,
    name: "Frank"
  },
  {
    id: 6,
    name: "Sarah"
  }
];

function getStudentName(studentID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}

var nextStudent = getStudentName(73);

// console.log(students.id=14);

let text = "Brushy Mountains";
let n = text.search("Mountains");
// console.log(n);
//
// let re1 = new RegExp("brushy");
// console.log(re1);

let arry = ["True", "False", "True"];

counter = 0;
arry.forEach((val) => {
  if (val == "True") {
    counter++;
    console.log(counter);
  }
});


// console.log("This is the first line\nAnd this is the second");
// console.log("A newline character is written like \"\\n\".");
let testing1 = {};

// console.log(typeof testing1);
// console.log(1 + 1 == 2 && 10 * 10 > 50);

console.log((1>2) ? 0: 1);
let dummyVal = null;

if (!Number.isNaN(dummyVal)){
  console.log("False");
}


// testVal();
//
// let tst1 = new RegExp("abc");
// // console.log(tst1.test("abc"));
// console.log(tst1.exec("abc"));
//
// let tst2 = new RegExp("^Hi");
// console.log(tst2.test("Hibriten"));
//



// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// console.log(n);
//
// let tt = 2 + "2";
// console.log(typeof tt);
//

// X
