
// ! ELi Yazan  OOP/



// class animal  {
// constructor (name,birthdate,gender){
//     this.name=name
//     this.birthdate=birthdate;
//     this.gender=gender;
//     this.age=this.getAge()
// }
//     getAge(){
//     return new Date().getFullYear() - this.birthdate;
//     }
// }

// class cat extends animal{
//     constructor(name,birthdate,gender,weight,color){
//         super(name,birthdate,gender)
//     this.weight=weight
//     this.color=color
//     // this.getinfo=getinfo
// }
// getInfo(){
//     return name is ${this.name}, birthdate is ${this.birthdate},color is ${this.color};
// }
// }
// const cat1 = new cat("Garfield",2020,"male","5kq","orange",)
// console.table(cat1)

class Human {
  constructor(name, surname, age, gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  getFullName() {
    return ${this.name} ${this.surname};
  }
  getBirthYear() {
    // return ${Date.now()}-${currentYear()};
  }
}
class User extends Human {
    
  constructor(
    name,
    surname,
    age,
    gender,
    nationality,
    username,
    email,
    isAdmin,
    password,
    bio
  ) {
    super(name, surname, age, gender, nationality);

    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;

    // this.password=password
    if (password.length < 5) {
      window.alert("axdi");
    } else {
      this.password = password;
    }

    // this.bio=bio
    if (bio.length > 30) {
      window.alert("saxla");
    } else {
      this.bio = bio;
    }

  }

  
  changePassword(currentPassword, newPassword) {
    if ((this.password = currentPassword)) {
      if (currentPassword === newPassword) {
        window.alert("eyni seydi");
      } else {
        this.password = newPassword;
      }
    }
  }
}

const monster = new User(
  "Ali",
  "Aliyev",
  21,
  "male",
  "Azerbaijan",
  "Monsterboy",
  "aliyev.ali@gmail.com",
  true,
  "12345",
  "Always be Happy"
);
console.log(monster)




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
    ),
  ];
// class animal  {
// constructor (name,birthdate,gender){
//     this.name=name
//     this.birthdate=birthdate;
//     this.gender=gender;
//     this.age=this.getAge()
// }
//     getAge(){
//     return new Date().getFullYear() - this.birthdate;
//     }
// }

// class cat extends animal{
//     constructor(name,birthdate,gender,weight,color){
//         super(name,birthdate,gender)
//     this.weight=weight
//     this.color=color
//     // this.getinfo=getinfo
// }
// getInfo(){
//     return name is ${this.name}, birthdate is ${this.birthdate},color is ${this.color};
// }
// }
// const cat1 = new cat("Garfield",2020,"male","5kq","orange",)
// console.table(cat1)

class Human {
  constructor(name, surname, age, gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  getFullName() {
    return ${this.name} ${this.surname};
  }
  getBirthYear() {
    // return ${Date.now()}-${currentYear()};
  }
}
class User extends Human {
    
  constructor(
    name,
    surname,
    age,
    gender,
    nationality,
    username,
    email,
    isAdmin,
    password,
    bio
  ) {
    super(name, surname, age, gender, nationality);

    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;

    // this.password=password
    if (password.length < 5) {
      window.alert("axdi");
    } else {
      this.password = password;
    }

    // this.bio=bio
    if (bio.length > 30) {
      window.alert("saxla");
    } else {
      this.bio = bio;
    }

  }

  
  changePassword(currentPassword, newPassword) {
    if ((this.password = currentPassword)) {
      if (currentPassword === newPassword) {
        window.alert("eyni seydi");
      } else {
        this.password = newPassword;
      }
    }
  }
}

const monster = new User(
  "Ali",
  "Aliyev",
  21,
  "male",
  "Azerbaijan",
  "Monsterboy",
  "aliyev.ali@gmail.com",
  true,
  "12345",
  "Always be Happy"
);
console.log(monster)




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
    ),
  ];




// ! Seymur yazan password oop/

class Human {
//    constructor (name, surname, age, gender, natioanlity){
//     this.name=name ;
//     this.surname=surname ;
//     this.age=age;
//     this.natioanlity=natioanlity;

//    }
// getFullName(){
//     return `${this.name} ${this.surname}   `
// }

// getBirthDate(){
//     return new Date().getFullYear() - this.age;
// }
// }


// class User extends Human{
//     constructor (name, surname, age, gender, natioanlity,Username,email,isAdmin,isLogged,password,bio){
//     super(name, surname, age, gender, natioanlity);
//     this.Username= Username;
//     this.email=email;
//     this.isAdmin=isAdmin;
//     this.isLogged=isLogged;
//     this.bio=bio;

//     }

// currentPass=1234
// newPass=123456879


// changePassword(currentPass,newPass){
//   if(currentPass==this,password){
//     this.password==currentPass;
//   }else{
//     window.alert("Yanlis parol");
//   }
// }

// email(User,email){
//     if (User.email == this.email) {
//         console.log("Bu email artiq movcuddur , basqa eamiln daxil edin")
//         return email;
//     }else {
//         this.email=email
//     }
// }

// }









