
describe("service suite", function() {
  describe("foo service", function () {
    it("should handle basic", function () {
      const data = "5150";
      const barResult = "5151";
      const barService = jasmine.createSpy("BarService spy").and.returnValue(barResult);
      

      // test
      const result = fooService(data, barService);

      expect(result).toEqual("5151-5151");
      expect(barService).toHaveBeenCalledWith(data);
    });
  });
});
