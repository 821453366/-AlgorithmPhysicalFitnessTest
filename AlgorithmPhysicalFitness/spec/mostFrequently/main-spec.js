const mostFrequently = require("../../main/mostFrequently/mostFrequently");

describe("111", function () {
    it("222", function () {
        let result = mostFrequently("abcsbaddbizdbas");
        var data = {b: 4};
        expect(result).toEqual(data);
    });

    it("222", function () {
        let result = mostFrequently("aaaaabbdbdbb");
        var data = {a: 5, b: 5};
        expect(result).toEqual(data);
    });
});
