let college = require("../../json/grading/college");
let gradeInfo = require("../../json/grading/grade");
let classInfo = require("../../json/grading/classInfo");
let dormitory = require('../../json/grading/dormitory');
let gradeList = [
    {value: college, grade: 0},
    {value: gradeInfo, grade: 1},
    {value: classInfo, grade: 2},
    {value: dormitory, grade: 3},
    {value: null, grade: 4}
];
let GradeController = {
    //校验身份，获取权限列表渲染
    // eslint-disable-next-line no-unused-vars
    getPermissions(token, grade) {
        console.log(token);
        let permissions = {//等级划分
            'admin':gradeList[0],
            '校级领导':gradeList[0],
            '院系领导':gradeList[1],
            '年级领导':gradeList[2],
            "班级领导":gradeList[3],
            "宿舍领导":gradeList[4]
        };
        console.log(grade)
        if (token.role[0] === "admin" && grade!== undefined&&grade!==null&&grade<gradeList.length) {
            return gradeList[grade+1];
        } else {
            return permissions[token.userName];
        }
    },
};

export default GradeController;