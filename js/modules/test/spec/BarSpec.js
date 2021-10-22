import * as bar from "../../bar.js";

describe("Bar", function () {
  beforeEach(function () {});

  describe("append", function () {
    it("should be able to ... basic functionality", function () {
      // test
      const result = bar.append('evh5150');

      expect(result).toEqual("bar::util::evh5150");
    });
  });
});
