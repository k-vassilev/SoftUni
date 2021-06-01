const lookupChar = require("./charLookUp.js");
const {expect} = require("chai");

describe("", () => {
    it("First Test", () =>{
        expect(lookupChar("asd", 2)).to.be.equal("d");
    })

    it("FirstChar undefined", () => {
        expect(lookupChar(5, 3)).to.be.equal(undefined);
    })

    it("Second Param undefined", () => {
        expect(lookupChar("qwerty", "n")).to.be.equal(undefined);
    })
    it("Incorrect index length", () => {
        expect(lookupChar("asd", 30)).to.be.equal("Incorrect index");
    })
    it("Correct string and index", () => {

        expect(lookupChar("qwertyuiop", 5)).to.be.equal("y");
    })
    it("String type", () => {
        expect(lookupChar("asd", 3.2234324)).to.be.equal(undefined);
    })
    it("Negative test", () => {
        expect(lookupChar("qwerty", -3234)).to.be.equal("Incorrect index")
    })
})
