//Classes
class UserModel {
  constructor(_first, _last, _email) {

    this.person = {
      first ; _first,
      last ; _last,
      email ; _email,

    }

  }
}

class TaskController extend UserModel {
//Defining static variable
//#timeStart = ''
  //Establish public methods for class
  constructor(_name, _category, _dline,) {
    super()
    this.listen()
  }

  listen(){
    console.log(this.person)
  }
}

//new UserModel
new TaskController('Joshua', 'Martinez', 'joshualmart@gmail.com')
