const fs = require("fs");
const usersList = class {
  constructor(addedUsers) {
    this.addedUsers = addedUsers;
  }
  saveFile() {
    fs.writeFileSync(
      "C:/Users/Super Pawn/Desktop/usersLists.txt",
      this.addedUsers
    );
  }
  fetchAll() {
    return fs.readFileSync("C:/Users/Super Pawn/Desktop/usersLists.txt");
  }
};
module.exports = usersList;
