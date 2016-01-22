describe('conversion', function() {
//   it("populate a four digit array", function() {
// expect(conversion(44)).to.eql([4, 4]);
//   });
//
//   it("rejects numbers over 3,999", function() {
// expect(conversion(4000)).to.equal(false);
//   });
//
//   it("pads initial input until the array has four elements", function() {
// expect(conversion(4)).to.eql([0,0,0,4]);
//   });
//
//   it("determine index value in position zero", function() {
// expect(conversion(1000)).to.eql(["M"]);
//   });
//
//   it("determine index value in position zero", function() {
// expect(conversion(3000)).to.eql(["M", "M", "M"]);
//   });
//
//   it("determine index value in position zero", function() {
// expect(conversion(3000)).to.eql(["M", "M", "M"]);
//   });
//
  it("determine index value in position zero", function() {
expect(conversion(3944)).to.eql("MCD");
  });


});
