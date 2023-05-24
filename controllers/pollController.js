const { postPoll } = require("../services/pollServices");
const { currentUser } = require("../services/authServices");

const postPollController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postPoll(body, owner);

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
  postPollController,
};
