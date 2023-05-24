const { getUsers, checkPoll } = require("../services/adminServices");

const getUsersController = async (req, res) => {
  const users = await getUsers();

  const guest = await users.filter((object) => object.status === "GUEST");

  res.status(200).json({ guest });
};

const checkPollController = async (req, res) => {
  const { pollNumber } = req.params;

  const result = await checkPoll(pollNumber);

  res.status(200).json({ result });
};

module.exports = {
  getUsersController,
  checkPollController,
};
