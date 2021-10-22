import * as foo from "../../foo.js";

describe("Foo", function () {
  beforeEach(function () {});

  describe("append", function () {
    it("should be able to ... basic functionality", function () {
      // test
      const result = foo.append('evh5150');

      expect(result).toEqual("foo::bar::util::evh5150");
    });
  });
});
