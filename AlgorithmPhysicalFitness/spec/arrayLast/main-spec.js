const arrayLast = require("../../main/arrayLast/arrayLast");

describe("将数组中所包含的某个元素找出，并放在数组后面", function () {
    it("测试一：", function () {
        let nums = [0, 1, 0, 3, 12];
        let target = 0;
        let result = arrayLast(nums,target);
        let data = [1, 3, 12, 0, 0];
        expect(result).toEqual(data);
    });



});
