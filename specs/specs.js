// describe("vowelReplacer", function () {
//   it("replaces vowels from a given string with dashes", function() {
//     expect(vowelReplacer("Hello there")).to.equal("H-ll- th-r-");
//   });
// });
describe("vowelReplacer", function () {
  it("when a string is entered, determines whether string contains vowels", function() {
    expect(vowelReplacer("hello")).to.equal("h e l l o");
  });
  // it("returns the letter as is if it is not a vowel", function() {
  //   expect(vowelReplacer("b")).to.equal("b");
  // });
});
