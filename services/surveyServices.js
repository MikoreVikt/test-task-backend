const { FirstSurvey, SecondSurvey } = require("../models/surveyModel");

const postFirstAnswer = async ({ fullName, education, courses }, owner) => {
  const number = "first";
  const status = true;

  return await FirstSurvey.create({
    fullName,
    education,
    courses,
    number,
    status,
    owner,
  });
};

const postSecondAnswer = async ({ position, stack, salary }, owner) => {
  const number = "second";
  const status = true;

  return await SecondSurvey.create({
    position,
    stack,
    salary,
    number,
    status,
    owner,
  });
};

module.exports = {
  postFirstAnswer,
  postSecondAnswer,
};
