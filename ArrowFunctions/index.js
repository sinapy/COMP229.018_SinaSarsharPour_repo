// function hello(){
//     document.getElementById("demo").innerHTML += "Hello world!";
// }


// function hello(){
//     document.getElementById("demo").innerHTML += "Hello world!";
// }  

// var hello;
// hello = function(){
//   document.getElementById("demo").innerHTML += "Hello world!";
// }

//A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);

// document.getElementById("btn").addEventListener("click", () => {
//     document.getElementById("demo").innerHTML += "Hello world!";
// });

// ===========================================
// var numbers = [1,2,3,4,5];
// const squares = numbers.map(n => n * n);
// document.write(squares);

// document.write("<br>");

// var evens = new Array();
// numbers.forEach(n => {
//    if (n % 2 === 0) { 
//       evens.push(n);
//    }
// });
// document.write(evens);

// =============================================

const author = {
    fullName: "Bob Alice",
    books: ["Book 01","Book 02","Book 03"],
    
    printBooks() {
      this.books.forEach(book => document.write(book + ' by ' +this.fullName + '<br>'));
    },

    printBooks1() {
      function printValue(book) {      
         document.write(book + ' by ' +this.fullName + '<br>'); // Undefined expected for fullname
      }

      this.books.forEach(printValue);
    },
    
    printBooks2() {
      this.books.forEach(function(book){
        document.write(book + ' by ' +this.fullName + '<br>'); // Undefined expected for fullname
      });
    }
};


author.printBooks();
author.printBooks1();
author.printBooks2();

class Counter {
    constructor() {
      this.sum = 0;
      this.count = 0;
    }
    add(array) {
      // Only function expressions will have its own this binding
      array.forEach(function countEntry(entry) {
        this.sum += entry;
        ++this.count;
      }, array);
    }
  }
  
  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.count); // 3
  console.log(obj.sum); // 16