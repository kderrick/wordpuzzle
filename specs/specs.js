describe("vowelReplacer", function () {
  it("replaces vowels from a given word with dashes", function() {
    expect(vowelReplacer("Hello")).to.equal("H-ll-");
  });
  it("replaces vowels from a given string with dashes", function() {
    expect(vowelReplacer("Hello there")).to.equal("H-ll- th-r-");
  });
});








// describe("vowelReplacer", function () {
//   it("when a string is entered, determines whether string contains vowels", function() {
//     expect(vowelReplacer("hello")).to.equal("found the vowels");
//   });
//   it("returns a new array with dashes instead of vowels", function() {
//     expect(vowelReplacer("hello")).to.equal("[h, e, l, l, o]");
//   });
// });
