/*
 *authored by Joshua Martinez guided by Omar Morales
 *referenced in index.html
*/

//Model declared as a class and will contain
class UserModel { //create a class object that will represent the model for user
  constructor(_first, _last, _email) { //specify the properties of the class using constructor function

    this.count = 0 //assigning count (type number) attribute to UserModel class
    //Created group variable for new array
    this.group = [] //assign group (type array) attribute to UserModel class
    //look up how to push an object into an array --Make sure its a class method 
    this.person = { //assign person (type object) attribute to UserModel class
      first : _first, //link person.first property to constructor property (_first)
      last : _last,   //link person.last property to constructor property (_last)
      email : _email, //link person.email property to constructor property (_email)
      id : null,      //assign id (type null) property to UserModel.person object
      get(value) {  //define and assign function get(v) to UserModel.person object --this is technically a method
        //determine the value of 'value' based on the function argument passed
        if (value === 'first') {     //validate value is a strict comparison of 'first'  and return it
          return first
        }
        else if (value === 'last') { //validate value is a strict comparison of 'last'  and return it
          return last
        }
        else if (value === 'email'){ //validate value is a strict comparison of 'email'  and return it
          return email
        }
        else {
          console.log("What you be talkin 'bout Willis?!") //log message if non of the conditional statements match
        }
      },
      set(value) { //define and assign function set(v) to UserModel.person object --this is technically a method

      }
    }

  }
}
//Controller is declared as a class and will execute coding logic between model and view
class UserController extends UserModel { //create a class object that will represent the controller for user extending properties from UserModel class
//Defining static variable
//#timeStart = '' //I believe this was the static variable we were going to use for start time of a task
  //Establish public methods for class
  constructor(...args) { //let properties of the class be any (...args) using constructor function
    super(...args) //assign properties from UserModel class to UserController using super function
    const {fname, lname, email} = [...args] //assign const variable (fname, lname, email) to empty array with any type
    //Push object into array using class method
    this.passuser() //invoke function UserController.passuser() --this is technically a method

    //console.log(...args)
    this.listen() //invoke function UserController.listen() --this is technically a method
  }
//define and assign function listen() to UserController object --this is technically a method
  listen(){
    //console.log(this.person)
  }
  //define and assign function passuser() to UserController object --this is technically a method
  passuser(){
    this.group.push(this.person) //push UserModel.person into UserModel.group array using the push method
    console.log(this.group) //log UserModel.group array
  }
}

//new UserModel
new UserController('Joshua', 'Martinez', 'joshualmart@gmail.com') //create a new instance of UserController class with extension of UserModel class properties

