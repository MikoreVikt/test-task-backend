const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { validation } = require("../../middlewares/validationMiddleware");

const { joiPollSchema } = require("../../models/pollModel");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  postFirstPollController,
  postSecondPollController,
} = require("../../controllers/pollController");

router.use(authMiddleware);

router.post(
  "/firstpoll",
  validation(joiPollSchema),
  asyncWrapper(postFirstPollController)
);
router.post(
  "/secondpoll",
  validation(joiPollSchema),
  asyncWrapper(postSecondPollController)
);

module.exports = {
  pollRouter: router,
};
