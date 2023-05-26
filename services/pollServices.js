const { Poll } = require("../models/pollModel");

const postFirstPoll = async (
  { firstQuestion, secondQuestion, thirdQuestion },
  owner
) => {
  const number = "first";
  const status = true;

  return await Poll.create({
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    number,
    status,
    owner,
  });
};

const postSecondPoll = async (
  { firstQuestion, secondQuestion, thirdQuestion },
  owner
) => {
  const number = "second";
  const status = true;

  return await Poll.create({
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    number,
    status,
    owner,
  });
};

module.exports = {
  postFirstPoll,
  postSecondPoll,
};
