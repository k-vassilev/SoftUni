const isOddOrEven = require("./isOddOrEven.js");
const {expect} = require("chai");

describe("", () => {
  it("String check", () => {
    expect(isOddOrEven("yes")).to.be.equal("odd");
  })

  it("Even check", () => {
      expect(isOddOrEven("no")).to.be.equal("even");
  });

  it("Undefined numeric", () => {
      expect(isOddOrEven(5)).to.be.equal(undefined);
  })

});
