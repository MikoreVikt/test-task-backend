const { User } = require("../models/userModel");
const { FirstSurvey } = require("../models/surveyModel");

const getUsers = async () => {
  return await User.find({});
};

const checkPoll = async (number) => {
  return await FirstSurvey.find({ number });
};

module.exports = {
  getUsers,
  checkPoll,
};
