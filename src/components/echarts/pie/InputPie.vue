<template>
  <div class="input-pie-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">统计{{title}}{{ state}}情况：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allIndexs"
        size="small"
        class="cascader-style"
      ></el-cascader>
    </div>
    <div id="input-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPieFun from "./optionPie.js";
import optionPublicFun from "../../../utils/optionPublic.js";
import GradeController from "../../../control/gradeManagement/GradeController";
export default {
  name: "input-pie-chart",
  data() {
    return {
      data: null,
      title: null,
      state: null,
      gradeStatus:null,
      myChart: {},
      clientHeight: "100%",
      allIndexs: [
        {
          label: "学生",
          value: 0
        },
        {
          label: "教师",
          value: 1
        }
      ],
      dataSchool: [
        { value: 5, name: "已录" },
        { value: 16, name: "未录" }
      ],
      checkedVal: [0]
    };
  },
  created() {
    this.$nextTick(() => {
      this.state = "录入";
      this.data = this.dataSchool;
      this.title = this.allIndexs[this.checkedVal[0]].label;
      this.inputPieCharts(this.data);
      this.myChart.on("click",(params)=>{
        this.checkGrade(params)
      })
    });
  },
  methods: {
    // pie 数据渲染
    inputPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("input-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend("horizontal", "-5", "0"),
        series: opPieFnc.pieSeries("68%", "43%", "50%", data)
      },true);
    },
    checkGrade(params){
      let permissions
      if(params.name==="已录"||params.name==='未录'){
        permissions = GradeController.getPermissions(JSON.parse(localStorage.token));
      }else {
        permissions = GradeController.getPermissions(JSON.parse(localStorage.token),this.gradeStatus);
      }
      console.log(permissions);
      if(permissions.grade==4){
        this.$router.push({
          path: "/whole/dormitoryInfo/3331"
        });
      }
      if(permissions.value!==null){
        this.gradeStatus = permissions.grade;
        this.inputPieCharts(permissions.value.default)
      }

    }
  },
  watch: {
    title: {
      handler: function(val) {
        this.$nextTick(() => {
          this.title = val;

        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.input-pie-chart {
  width: 100%;
  height: 100%;
  #input-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
