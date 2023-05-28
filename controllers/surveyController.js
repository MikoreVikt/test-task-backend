const {
  postFirstAnswer,
  postSecondAnswer,
} = require("../services/surveyServices");
const { currentUser } = require("../services/authServices");

const firstSurveyController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postFirstAnswer(body, owner);

  if (result) {
    const guest = await currentUser(owner);
    await guest.ownPoll.push(result);
    await guest.save();
  }

  res.status(201).json({
    result,
  });
};

const secondSurveyController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postSecondAnswer(body, owner);

  if (result) {
    const guest = await currentUser(owner);
    await guest.ownPoll.push(result);
    await guest.save();
  }

  res.status(201).json({
    result,
  });
};

module.exports = {
  firstSurveyController,
  secondSurveyController,
};
