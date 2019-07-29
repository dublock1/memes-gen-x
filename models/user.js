
const mongoose = require("./connection.js");


const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});


const UserCollection = mongoose.model("User", UserSchema);


function getAllUsers() {
  return UserCollection.find();
}

function getUser(userId) {
  return UserCollection.findById(userId);
}

function addNewUser(userObject) {
  return UserCollection.create(userObject);
}

function updateUser(userId, updateUser) {
  return UserCollection.findByIdAndUpdate(userId, updateUser);
}

function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId);
}


module.exports = {
  getAllUsers,
  getUser,
  addNewUser,
  updateUser,
  deleteUser
};
