const encodingAndDecoding = require("../../main/encodingAndDecoding/encodingAndDecoding");

describe("编码", function () {
    it("测试一：12", function () {
        let result = encodingAndDecoding(12);
        let data =  2;
        expect(result).toEqual(data);
    });

    it("测试二：66", function () {
        let result = encodingAndDecoding(66);
        let data =  1;
        expect(result).toEqual(data);
    });

    it("测试三：123", function () {
        let result = encodingAndDecoding(123);
        let data =  3;
        expect(result).toEqual(data);
    });

    it("测试三：123", function () {
        let result = encodingAndDecoding(120);
        let data =  1;
        expect(result).toEqual(data);
    });

});
