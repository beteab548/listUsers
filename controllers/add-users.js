const userlists = require("../models/users");
const express = require("express");
const app = express();
exports.addProducts = (req, res, next) => {
  const title = "add-product";
  res.render("add-users", { title: title });
};
exports.users = (req, res, next) => {
  const title = "users";
  app.use(express.urlencoded({ extended: false }));
  const users = req.addedUsers;
  const listUsers = new userlists(users);
  listUsers.saveFile();
  res.render("users", { title: title, users: listUsers.fetchAll() });
};
