const { User } = require("../models/userModel");
const { Poll } = require("../models/pollModel");

const getUsers = async () => {
  return await User.find({});
};

const checkPoll = async (number) => {
  return await Poll.find({ number });
};

module.exports = {
  getUsers,
  checkPoll,
};
