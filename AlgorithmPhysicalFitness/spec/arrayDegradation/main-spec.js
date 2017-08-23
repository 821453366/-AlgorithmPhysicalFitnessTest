const arrayDegradation = require("../../main/arrayDegradation/arrayDegradation");

describe("给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组", function () {
    it("测试一", function () {
        let result = arrayDegradation([1,2,[1,2]]);
        let data =  [1,2,1,2];
        expect(result).toEqual(data);
    });

    it("测试一", function () {
        let result = arrayDegradation([1,2,[1,2],[3,4]]);
        let data =  [1,2,1,2,3,4];
        expect(result).toEqual(data);
    });

    it("测试一", function () {
        let result = arrayDegradation([4,[3,[2,[1]]]]);
        let data =  [4,3,2,1];
        expect(result).toEqual(data);
    });

});
