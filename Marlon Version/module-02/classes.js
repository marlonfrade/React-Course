class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

// Another example to print a name
// class Person {
//   constructor() {
//     this.name = "Marlon";
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// If you want to extends the class human to print a name and a gender
class Person extends Human {
  constructor() {
    // In this examples, if you're extends another class you need to call the super method like below
    super();
    this.name = "Marlon";
    // And of course, you can also change the gender into the person, even if you set above
    this.gender = "None";
  }

  printMyName() {
    console.log(this.name);
  }
}

// Using the example below to run the function
const person = new Person();
person.printMyName();
// By extends the human class we can also print the gender
person.printGender();

// ===============================================================
// ==================== THE NEW SINTAX JS ========================
// ===============================================================

class Human {
  // In the new sintax, don't need the constructor anymore, nor the this keyword to set the gender like below
  gender = "MALE";
  // But you'll need to make a arrow function to print your gender like below, also to use the this keyword
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "MARLON";
  gender = "IF YOU WANT TO CHANGE";

  printMyName = () => {
    console.log("name:", this.name);
    console.log("gender:", this.gender);
  };
}
