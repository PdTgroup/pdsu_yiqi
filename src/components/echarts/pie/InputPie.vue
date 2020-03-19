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
      gradeStatus:0,
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
      dataSchool: "",
      checkedVal: [0]
    };
  },
  created() {
    this.$nextTick(() => {
      this.state = "录入";
      this.title = this.allIndexs[this.checkedVal[0]].label;
      this.initPieCharts(this.getNextData(this.gradeStatus));
      this.myChart.on("click",(params)=>{
        this.nextGrade(params)
      })
    });
  },
  methods: {
    // pie 数据渲染
    initPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("input-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend("horizontal", "-5", "0"),
        series: opPieFnc.pieSeries("68%", "43%", "50%", data)
      },true);
    },
    //获取下一步数据,并更新nextGrade
    getNextData(next){
      let {permission,nextGrade} =  GradeController.getPermissions(JSON.parse(localStorage.token),next);
      this.gradeStatus = nextGrade;
      if(permission){
        return permission.default;
      }else {
        return null;
      }
    },
    //饼图下一级跳转控制
    nextGrade(params){
      if(this.gradeStatus==null){
        this.$router.push({
          path: "/whole/dormitoryInfo/3331"
        });
        return;
      }
      //如果nextGrade 为null 就不需要请求
      let nextData = this.getNextData(this.gradeStatus);
      if(nextData==null){
        this.$router.push({
          path: "/whole/dormitoryInfo/3331"
        });
        return;
      }
      console.log(params)
      console.log(nextData);
      this.initPieCharts(nextData)
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
