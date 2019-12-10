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
  /*
    Note: While this is the solution to what this particular exercise
    is asking, using Object.setPrototypeOf is currenlty considered bad
    for performance in most browsers. Do not use Object.setPrototypeOf
    in production code. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
  */
  const admin = userFactory(name, score);
  admin.type = 'Admin';
  Object.setPrototypeOf(admin, adminFunctionStore);
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