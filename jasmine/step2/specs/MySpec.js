define(["knockout", "jquery"], function (ko, $) {

describe("MyTestSpec", function () {

    let viewmodel, data;

    beforeEach(function () {
        require(["knockout", "jquery"], function(ko, $){
             const tvm = require('testViewModel');
             viewmodel = tvm();
        });
    });

    it("should be able to connect to View Model file", function () {        
        expect(viewmodel.Id).toBe(1);
    });
});
});
