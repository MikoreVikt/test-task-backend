const { postPoll } = require("../services/pollServices");

const postPollController = async (req, res) => {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await postPoll(body, owner);

  res.status(201).json({
    message: `Poll successful send!`,
    status: "created",
    code: "201",
    result,
  });
};

module.exports = {
  postPollController,
};
