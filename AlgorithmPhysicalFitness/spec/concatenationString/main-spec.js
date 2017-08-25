const leftPad = require("../../main/concatenationString/concatenationString");

describe("实现一个left-pad函数", function () {
    it("测试一：", function () {

        let result = leftPad('hello',20,'1');
        let data =  '111111111111111hello';
        expect(result).toEqual(data);
    });
});
