const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  getUsersController,
  checkPollController,
} = require("../../controllers/adminController");

router.use(authMiddleware);

router.get("/userscheck", asyncWrapper(getUsersController));
router.get("/pollcheck/:pollNumber", asyncWrapper(checkPollController));

module.exports = {
  adminRouter: router,
};
