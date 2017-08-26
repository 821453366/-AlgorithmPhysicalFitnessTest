const divideExactly = require("../../main/divideExactly/divideExactly");

describe("按照下面的规则打印每个数", function () {
    it("测试一：", function () {

        let result = divideExactly(6);
        let data =  'fizz,buzz,fizz';
        expect(result).toEqual(data);
    });
    it("测试二：", function () {

        let result = divideExactly(10);
        let data =  'fizz,buzz,fizz,fizz,buzz';
        expect(result).toEqual(data);
    });
    it("测试三：", function () {

        let result = divideExactly(30);
        let data =  'fizz,buzz,fizz,fizz,buzz,fizz,fizz buzz,fizz,buzz,fizz,fizz,buzz,fizz,fizz buzz';
        expect(result).toEqual(data);
    });
});
