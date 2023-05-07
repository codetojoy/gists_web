define(["sandbox/utils"], function (utils) {
  describe("utils", function () {
    describe("responseAdapter", function () {
      it("handle v1 boolean", function () {
        const data = true;
        // test
        const result = utils.responseAdapter(data);

        expect(result).toBeTrue();
      });

      it("handle v2 fields", function () {
        const data = {field1: true, field2: false};

        // test
        const {value1, value2} = utils.responseAdapter(data);

        expect(value1).toBeTrue();
        expect(value2).toBeFalse();
      });
    });
  });
});
