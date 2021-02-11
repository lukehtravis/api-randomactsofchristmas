const { pool } = require("../startup/dbconfig");
const Joi = require("joi");
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

  const { name, lat, long, description } = request.body;

  pool.query(
    "INSERT INTO christmasacts (name, latitude, longitude, description) VALUES ($1, $2, $3, $4)",
    [name, lat, long, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Act of christmas added: ${results}`);
    }
  );
};

function validateActOfChristmas(newAct) {
  const schema = Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required(),
    description: Joi.string().required(),
    name: Joi.string().required(),
  });

  return schema.validate(newAct);
}

exports.validateActOfChristmas = validateActOfChristmas;
exports.actOfChristmas = getActs;
exports.createActOfChristmas = createActOfChristmas;
