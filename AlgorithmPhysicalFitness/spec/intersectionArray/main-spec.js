const intersectionArray = require("../../main/intersectionArray/intersectionArray");

describe("计算两个数组的交数组", function () {
    it("测试数据：nums1 = [1, 2, 2, 1], nums2 = [2, 2]", function () {
        let result = intersectionArray([1, 2, 2, 1,2],[2, 2]);
        let data = [2, 2];
        expect(result).toEqual(data);
    });

});
