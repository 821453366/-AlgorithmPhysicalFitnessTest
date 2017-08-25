let question = require('cli-interact').question;
let STUDENT_INFO = '请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：';
let STUDENT_INFO_ERR = '请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：';
let MAIN_MENU = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
let STUDENT_NO_ARRAY = '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
let STUDENT_NO_ARRAY_ERR = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
let allStudentAchievement = [];
let selectStudentInfo = [];

function reportCard() {
    let getNumber = require('cli-interact').getNumber;
    let answer = question(MAIN_MENU);

    switch (answer) {
        case '1':
            addStudent(STUDENT_INFO);
            break;
        case '2':
            studentInfoPrint(STUDENT_NO_ARRAY);
            break;
        case '3':
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
}

function addStudent(Info) {
    let info = question(Info);
    let infoArray = info.split(",");

    if (infoArray.length < 4) {
        addStudent(STUDENT_INFO_ERR);
    } else if (infoArray.length >= 4) {
        studentAchievement(infoArray);
        addStudentsSuccess(infoArray);
        console.log(allStudentAchievement);
    }

    reportCard();
}

function addStudentsSuccess(infoArray) {
    console.log(`学生${infoArray[0]}的成绩被添加`);
}

function studentAchievement(infoArray) {
    if (!allStudentAchievement.find(element => element.no === infoArray[1])) {
        allStudentAchievement.push({
            name: infoArray[0],
            no: infoArray[1],
            class: infoArray[2],
            subject_a: infoArray[3],
            subject_b: infoArray[4],
            subject_c: infoArray[5],
            subject_d: infoArray[6],
            Average: 0,
            totalScore: 0
        });
    }
}

function studentInfoPrint(studentNoTitle) {
    let studentNo = question(studentNoTitle);
    let studentNoArray = studentNo.split(",");
    if (studentNoArray.length <= 0) {
        studentInfoPrint(STUDENT_NO_ARRAY_ERR);
    } else {
        selectStudentInfo = allStudentAchievement.filter(item => (studentNoArray.filter(data => data === item.no)).length > 0);
        console.log(selectStudentInfo);
        printeportCard();
    }
}

function printeportCard() {
    let str ='';
    let AverageArray = [];
    let totalScoreArray = [];
    str +=`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================`;
    selectStudentInfo.forEach(item => {
         let Average =  (parseInt((item.subject_a).split(":")[1])+parseInt((item.subject_b).split(":")[1])+parseInt((item.subject_c).split(":")[1])+parseInt((item.subject_d).split(":")[1]))/4;
        AverageArray.push(Average);
         let totalScore =  parseInt((item.subject_a).split(":")[1])+parseInt((item.subject_b).split(":")[1])+parseInt((item.subject_c).split(":")[1])+parseInt((item.subject_d).split(":")[1]);
        totalScoreArray.push(totalScoreArray);
        str +=`${item.name}|${(item.subject_a).split(":")[1]}|${(item.subject_b).split(":")[1]}|${(item.subject_c).split(":")[1]}|${(item.subject_d).split(":")[1]}|${Average}|${totalScore}`;
    })
    

str += `========================
全班总分平均数：${AverageArray[0]+AverageArray[1]}
全班总分中位数：${totalScoreArray[0]+totalScoreArray[1]}`;

    console.log(str);
}
reportCard();
module.exports = reportCard;
