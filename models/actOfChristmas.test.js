const { ActOfChristmas, validateActOfChristmas } = require("./actOfChristmas");

describe("the validateActOfChristmas function", () => {
  test("returns a properly structured object when inputs are valid", () => {
    const actOfChristmas = {
      lat: 37.8614,
      long: -122.256815,
      description: "Another nuther Test",
      title: "Postman nuther nuther nuther test",
    };
    expect(validateActOfChristmas(actOfChristmas)).toMatchObject({
      value: {
        lat: 37.8614,
        long: -122.256815,
        description: "Another nuther Test",
        title: "Postman nuther nuther nuther test",
      },
    });
  });
  test("returns an object with an error property when lat or long number is a string", () => {
    const badActOfChristmas = {
      lat: 37.8614,
      long: "-12m2.256815",
      description: "Another nuther Test",
      title: "Postman nuther nuther nuther test",
    };

    expect(validateActOfChristmas(badActOfChristmas)).toHaveProperty("error");
  });

  test("returns an object with an error property when required field is missing", () => {
    const badActOfChristmas = {
      lat: 37.8614,
      long: -122.256815,
      description: "Another nuther Test",
    };

    expect(validateActOfChristmas(badActOfChristmas)).toHaveProperty("error");
  });
});
