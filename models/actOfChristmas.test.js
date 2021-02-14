const { ActOfChristmas, validateActOfChristmas } = require("./actOfChristmas");

describe("the validateActOfChristmas function", () => {
  test("returns a properly structured object when inputs are valid", () => {
    const actOfChristmas = {
      latitude: 37.8614,
      longitude: -122.256815,
      description: "Another nuther Test",
      name: "Postman nuther nuther nuther test",
    };
    expect(validateActOfChristmas(actOfChristmas)).toMatchObject({
      value: {
        latitude: 37.8614,
        longitude: -122.256815,
        description: "Another nuther Test",
        name: "Postman nuther nuther nuther test",
      },
    });
  });
  test("returns an object with an error property when latitude or longitude number is a string", () => {
    const badActOfChristmas = {
      latitude: 37.8614,
      longitude: "-12m2.256815",
      description: "Another nuther Test",
      name: "Postman nuther nuther nuther test",
    };

    expect(validateActOfChristmas(badActOfChristmas)).toHaveProperty("error");
  });

  test("returns an object with an error property when required field is missing", () => {
    const badActOfChristmas = {
      latitude: 37.8614,
      longitude: -122.256815,
      description: "Another nuther Test",
    };

    expect(validateActOfChristmas(badActOfChristmas)).toHaveProperty("error");
  });
});
