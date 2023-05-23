const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const joiPollSchema = Joi.object({
  firstQuestion: Joi.string().min(5).alphanum().required(),
  secondQuestion: Joi.string().min(5).alphanum().required(),
  thirdQuestion: Joi.string().min(5).alphanum().required(),
  number: Joi.string(),
});

const pollSchema = new Schema(
  {
    firstQuestion: {
      type: String,
      required: [true, "The answer is required"],
    },
    secondQuestion: {
      type: String,
      required: [true, "The answer is required"],
    },
    thirdQuestion: {
      type: String,
      required: [true, "The answer is required"],
    },
    number: {
      type: String,
      enum: ["first", "second"],
      default: "first",
    },
    status: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Poll = model("poll", pollSchema);

module.exports = {
  Poll,
  joiPollSchema,
};
