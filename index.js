// class Animal {
//     age;
//     constructor (name , birthDate, gender) {

//         this.name= name
//         this.birthDate = birthDate
//         this.gender = gender
//         this.age = this.getAge();
//     }
// getAge(){
//     return new Date().getFullYear-this.birthDate;
// }
// }
// class Cat extends Animal {constructor (name, birthDate, gender, weight, color){
//     super(name, gender, birthDate);
//     this.weight=weight;
//     this.color=color;
// }
// getInfo() {
//   return `name is ${this.name}, birthDate is ${this.birthDate}, color is ${this.color}`  
// }
// }

// const cat = new Cat("garfield", 2017, "male", "6.7kq", "orange");
// const animal = new Animal("garfield", 2017, "female");

// console.log(cat);
// console.log(cat.getInfo());
// // console.log(cat.getAge());






// properties

// name, birdthDay, gender;
// getAge(currentYear);

// class Cat {}





class Human {
   constructor (name, surname, age, gender, natioanlity){
    this.name=name ;
    this.surname=surname ;
    this.age=age;
    this.natioanlity=natioanlity;

   }
getFullName(){
    return `${this.name} ${this.surname}   `
}

getBirthDate(){
    return new Date().getFullYear() - this.age;
}
}


class User extends Human{
    constructor (name, surname, age, gender, natioanlity,Username,email,isAdmin,isLogged,password,bio){
    super(name, surname, age, gender, natioanlity);
    this.Username= Username;
    this.email=email;
    this.isAdmin=isAdmin;
    this.isLogged=isLogged;
    this.bio=bio;

    }

currentPass=1234
newPass=123456879


changePassword(currentPass,newPass){
  if(currentPass==this,password){
    this.password==currentPass;
  }else{
    window.alert("Yanlis parol");
  }
}

email(User,email){
    if (User.email == this.email) {
        console.log("Bu email artiq movcuddur , basqa eamiln daxil edin")
        return email;
    }else {
        this.email=email
    }
}

}


        //    Seymur



// const seymur = new User(
//     "seymur",
//     "hesenzade",
//     "male",
//     "azerbaijan",
//     "seymur@code.edu.az",
//     true,
//     "12345678",
//     "lorem ipsum dolor",
//     21)


// console.log(seymur);
// console.log(seymur.getBirthYear());





let users = [
    new User(
      "John",
      "Doe",
      "Male",
      "American",
      "johndoe",
      "john.doe@example.com",
      false,
      "password123",
      "A bit about John.",
      30
    ),
    new User(
      "Jane",
      "Doe",
      "Female",
      "British",
      "janedoe",
      "jane.doe@example.com",
      true,
      "securepassword",
      "Jane's bio goes here.",
      28
    ),
    new User(
      "Alex",
      "Smith",
      "Non-binary",
      "Canadian",
      "alexsmith",
      "alex.smith@example.com",
      false,
      "alexspassword",
      "All about Alex.",
      35
    ),
    new User(
      "Emily",
      "Clark",
      "Female",
      "Australian",
      "emilyclark",
      "emily.clark@example.com",
      false,
      "emilyspassword",
      "Explorer and photographer.",
      26
    ),
    new User(
      "Michael",
      "Brown",
      "Male",
      "German",
      "michaelbrown",
      "michael.brown@example.com",
      true,
      "michaelspass",
      "Coffee enthusiast. Avid reader.",
      32
    ),
    new User(
      "Luis",
      "Gomez",
      "Male",
      "Spanish",
      "luisgomez",
      "luis.gomez@example.com",
      false,
      "luispassword",
      "Music lover, Guitar player.",
      29
    ),
    new User(
      "Sophia",
      "Lopez",
      "Female",
      "Mexican",
      "sophialopez",
      "sophia.lopez@example.com",
      true,
      "sophiaspassword",
      "Digital marketer and content creator.",
      31
    )
  ]