// F task

function findDoublers(x) {
  let newString = x.split("").sort().join("");

  for (let i = 0; i < x.length; i++) {
    if (newString[i] === newString[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(findDoublers("kalla"));

// E task

/*
function getReverse(x) {
  return x.split("").reverse().join("");
}
console.log(getReverse("va nihoyat e"));
*/



// D task

/*
const { checkCollectionName } = require("mongodb/lib/utils");

function checkContent(x, y) {
  let first = x.split("").sort().join("");
  let second = y.split("").sort().join("");
  if (first === second) {
    return true;
  } else {
    console.log("Please try again");
  }
}

let result = checkContent("nima", "mina");
console.log(result);
*/



// C task

/* const moment = require("moment");

class Shop {
  // state
  non;
  somsa;
  ayron;

  constructor(non, somsa, ayron) {
    this.non = non;
    this.somsa = somsa;
    this.ayron = ayron;
  }

  qoldiq() {
    console.log(
      `${moment().format("LT")}da ${this.non} non, ${this.somsa} somsa, ${
        this.ayron
      } ayron bor`
    );
  }

  sotish(addItem, amountItem) {
    if (addItem === "non") {
      this.non -= amountItem;
    } else if (addItem === "somsa") {
      this.somsa -= amountItem;
    } else if (addItem === "ayron") {
      this.ayron -= amountItem;
    }
  }

  qabul(receiveItem, amountItem) {
    if (receiveItem === "non") {
      this.non += amountItem;
    } else if (receiveItem === "somsa") {
      this.somsa += amountItem;
    } else if (receiveItem === "ayron") {
      this.ayron += amountItem;
    }
  }
}

const shop1 = new Shop(100, 100, 100);

shop1.sotish('non', 54);
shop1.qabul('ayron', 40);
shop1.qoldiq()
*/







// B task

/* function countDigits(x) {
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] >= "0" && x[i] <= "9") {
    count++;
    }
  }
  return count;
}

const count = countDigits("ad2a54y79wet0sfgb9");
console.log(count); */



// Task A

     /*function countLetter(letter,word){
        let count = 0;
        for(let i = 0; i<word.length; i++){
            if (word[i] === letter ) {
                count++
            }
        }
         return count;
     }
     console.log(countLetter("e","engineer"));*/



// Lesson 21 Callbacks

 /*console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", // 0–20
  "togri boshliq tanlang va koproq xato qiling", // 20–30
  "ozingizga ishlashingizni boshlang", // 30–40
  "siz kuchli bolgan narsalarni qiling", // 40–50
  "yoshlarga investitsiya qiling", // 50–60
  "endi dam oling, foydasi yoq endi", // >60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function()  {
        callback(null, list[5]);
    }, 5000);
    
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");*/


// Lesson 22 Asynchronous

/*async function maslahatBering(a, callback) {
       if (typeof a !== "number") throw new Error("Insert a number");
        else if (a <= 20) return list[0];
   else if (a > 20 && a <= 30) return list[1];
   else if (a > 30 && a <= 40) return list[2];
   else if (a > 40 && a <= 50) return list[3];
   else if (a > 50 && a <= 60) return list[4];
   else {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(list[5]);
       }, 10000);
     });
   }
 }

//then/catch
console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
     console.log("Javob", data);
   })
   .catch((err) => {
     console.log("Error", err);
   });
 console.log("Passed here 1");
 async - sinkron operationlar toliq amalga oshib bolgandan keyin async ishlab boshlaydi
 sonin uchun singlre threadimizmi band qilmaydi

//async/await
 async function run() {
   let javob = await maslahatBering(20);
   console.log("javob:", javob);
   javob = await maslahatBering(70);
   console.log("javob:", javob);
   javob = await maslahatBering(30);
   console.log("javob:", javob);
   javob = await maslahatBering(40);
   console.log("javob:", javob);
   javob = await maslahatBering(50);
   console.log("javob:", javob);
   javob = await maslahatBering(60);
   console.log("javob:", javob);
 }

 run();*/