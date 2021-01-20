const mongoose = require("mongoose");
const Joi = require("joi");

const actOfChristmasSchema = new mongoose.Schema({
  lat: Number,
  long: Number,
  description: String,
  title: String,
});

const ActOfChristmas = mongoose.model("ActOfChristmas", actOfChristmasSchema);

function validateActOfChristmas(newAct) {
  const schema = Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required(),
    description: Joi.string().required(),
    title: Joi.string().required(),
  });

  return schema.validate(newAct);
}

exports.validateActOfChristmas = validateActOfChristmas;
exports.ActOfChristmas = ActOfChristmas;
