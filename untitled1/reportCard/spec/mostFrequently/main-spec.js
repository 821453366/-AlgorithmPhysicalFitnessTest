const reportCard = require("../../main/reportCard/reportCard");

describe("111", function () {
    it("222", function () {
        let result = reportCard();
        var data = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
        expect(result).toEqual(data);
    });
});
