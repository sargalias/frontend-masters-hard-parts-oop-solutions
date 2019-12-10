/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.name = name;
  user.score = score;
  user.type = 'User';
  return user;
}

const adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  const admin = Object.create(adminFunctionStore);
  admin.name = name;
  admin.score = score;
  admin.type = 'Admin';
  return admin;
}

/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function sharePublicMessage() {
  console.log('Welcom users!');
}

const adminFromFactory = adminFactory("Eva", 5);

/********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"