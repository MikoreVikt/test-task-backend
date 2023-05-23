const { Poll } = require("../models/pollModel");

const postPoll = async (
  { firstQuestion, secondQuestion, thirdQuestion, number },
  owner
) => {
  const guest = await Poll.find({ owner });

  const correctNumber = guest.map(({ number }) =>
    number === "first" ? "second" : "first"
  );

  number = correctNumber[0];

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
  postPoll,
};
