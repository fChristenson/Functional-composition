const headersAreValid = require("../headersAreValid.fpish");

describe("headersAreValid test", () => {
  it("has a module", () => {
    expect(headersAreValid).toBeDefined();
  });

  it("returns false for an empty object", () => {
    const expected = false;
    const actual = headersAreValid({});
    expect(actual).toEqual(expected);
  });

  it("returns false for empty input", () => {
    const expected = false;
    const actual = headersAreValid();
    expect(actual).toEqual(expected);
  });

  it("returns false for a number", () => {
    const expected = false;
    const actual = headersAreValid(1);
    expect(actual).toEqual(expected);
  });

  it("returns false for an array", () => {
    const expected = false;
    const actual = headersAreValid([]);
    expect(actual).toEqual(expected);
  });

  it("returns false for a string", () => {
    const expected = false;
    const actual = headersAreValid("foo");
    expect(actual).toEqual(expected);
  });

  it("returns true for X-token=valid", () => {
    const expected = true;
    const headers = { "X-token": "valid" };
    const actual = headersAreValid(headers);
    expect(actual).toEqual(expected);
  });

  it("returns true for x-TokeN=valid", () => {
    const expected = true;
    const headers = { "x-TokeN": "valid" };
    const actual = headersAreValid(headers);
    expect(actual).toEqual(expected);
  });

  it("returns false for x-TokeN=fail", () => {
    const expected = false;
    const headers = { "x-TokeN": "fail" };
    const actual = headersAreValid(headers);
    expect(actual).toEqual(expected);
  });

  it("returns true if X-Token=valid and X-Client=foo", () => {
    const expected = true;
    const headers = { "X-Token": "valid", "X-Client": "foo" };
    const actual = headersAreValid(headers);
    expect(actual).toEqual(expected);
  });

  it("returns false if X-Token=valid and X-Client=bar", () => {
    const expected = false;
    const headers = { "X-Token": "valid", "X-Client": "bar" };
    const actual = headersAreValid(headers);
    expect(actual).toEqual(expected);
  });
});
