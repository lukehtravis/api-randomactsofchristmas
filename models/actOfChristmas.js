const { pool } = require("../startup/dbconfig");
const Joi = require("joi");
const winston = require("winston");
const getActs = (request, response) => {
  pool.query("SELECT * FROM christmasacts", (error, results) => {
    if (error) {
      console.log(error, response);
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createActOfChristmas = (request, response) => {
  const { error } = validateActOfChristmas(request.body);
  if (error) {
    winston.error(error);
    return response.status(400).send(error.details[0].message);
  }

  const { name, latitude, longitude, description } = request.body;

  pool.query(
    "INSERT INTO christmasacts (name, latitude, longitude, description) VALUES ($1, $2, $3, $4)",
    [name, latitude, longitude, description],
    (error, results) => {
      if (error) {
        response.status(400).send(error);
        throw error;
      }
      response.status(201).send(`Act of christmas added: ${results}`);
    }
  );
};

function validateActOfChristmas(newAct) {
  const schema = Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    description: Joi.string().required(),
    name: Joi.string().required(),
  });

  return schema.validate(newAct);
}

exports.validateActOfChristmas = validateActOfChristmas;
exports.actOfChristmas = getActs;
exports.createActOfChristmas = createActOfChristmas;
