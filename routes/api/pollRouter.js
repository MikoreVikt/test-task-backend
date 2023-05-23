const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { validation } = require("../../middlewares/validationMiddleware");

const { joiPollSchema } = require("../../models/pollModel");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const { postPollController } = require("../../controllers/pollController");

router.use(authMiddleware);

router.post(
  "/poll",
  validation(joiPollSchema),
  asyncWrapper(postPollController)
);

module.exports = {
  pollRouter: router,
};
