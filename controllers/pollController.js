const { postFirstPoll, postSecondPoll } = require("../services/pollServices");
const { currentUser } = require("../services/authServices");

const postFirstPollController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postFirstPoll(body, owner);

  if (result) {
    const guest = await currentUser(owner);
    await guest.ownPoll.push(result);
    await guest.save();
  }

  res.status(201).json({
    result,
  });
};

const postSecondPollController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postSecondPoll(body, owner);

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
  postFirstPollController,
  postSecondPollController,
};
