
describe("utils suite", function() {
  describe("response-adapter", function () {
    it("should handle v1 boolean", function () {
      const data = true;

      // test
      const result = responseAdapter(data);

      expect(result).toBeTrue();
    });

    it("should handle v2 fields", function () {
      const data = {field1: true, field2: false};
  
      // test
      const {value1, value2} = responseAdapter(data);

      expect(value1).toBeTrue();
      expect(value2).toBeFalse();
    });

    it("should throw error on unknown schema", function () {
      const data = {foo: 'bogus'};

      // test
      expect(responseAdapter.bind(data)).toThrow(new Error("illegal type: unknown schema"));
    });
  });
});
