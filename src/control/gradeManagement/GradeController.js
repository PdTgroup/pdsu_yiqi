let college = require("../../json/grading/college");
let gradeInfo = require("../../json/grading/grade");
let classInfo = require("../../json/grading/classInfo");
let dormitory = require('../../json/grading/dormitory');
let isInput = require('../../json/grading/isInput');
let gradeList = [
    {permission: isInput, nextGrade: 1},
    {permission: college, nextGrade: 2},
    {permission: gradeInfo, nextGrade: 3},
    {permission: classInfo, nextGrade: 4},
    {permission: dormitory, nextGrade: null},
    {permission: null, nextGrade: null},
];
let GradeController = {
    //获取权限列表渲染
    // eslint-disable-next-line no-unused-vars
    getPermissions(token, grade) {
        console.log(grade);
        if(grade!==0){
            return  this.checkInfo(token,grade);
        }else {
            return gradeList[0];
        }


    },
    //校验身份
    checkInfo(token,grade) {
        console.log(grade)
        if (token.role[0] === "admin" && grade!== undefined&&grade!==null&&grade<gradeList.length) {
            return gradeList[grade];
        } else {
            let nextGrade = this.resolvePermission(token);

            return {...gradeList[nextGrade],nextGrade:null};
        }
    },
    //解析权限
    resolvePermission(token){
        let resolveItem = {//等级划分
            '校级领导':1,
            '院系领导':2,
            '年级领导':3,
            "班级领导":4,
            "宿舍领导":5
        };
        return resolveItem[token.userName];
    }
};

export default GradeController;