<template>
  <div class="outer-line-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">统计{{ role }}外出情况：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allIndexs"
        size="small"
        class="cascader-style"
      ></el-cascader>
    </div>
    <div id="outer-line-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/line");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/dataZoom");
require("echarts/lib/component/legendScroll");
import optionLineFun from "./optionLine.js";
import optionPublicFun from "../../../utils/optionPublic.js";
const colors = ["#3893E5", "#FF4343"];
export default {
  name: "outer-line-chart",
  data() {
    return {
      role: null,
      myChart: {},
      clientHeight: "100%",
      outerData: [10, 20, 11, 15, 17, 19, 51],
      enterData: [22, 70, 111, 571, 440, 360, 10],
      dates: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"],
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
      checkedVal: [0],
    };
  },
  created() {
    this.$nextTick(() => {
      this.role = this.allIndexs[this.checkedVal[0]].label;
      this.tempLineCharts();
    });
  },
  methods: {
    tempLineCharts() {
      let that = this;
      let opLineFnc = new optionLineFun();
      this.myChart = new optionPublicFun().init("outer-line-container");
      let option = {
        tooltip: opLineFnc.lineTooltip("normal", 12, "人"),
        color: colors,
        legend: {
          right: 10,
          top: 8,
          textStyle: new optionPublicFun().textStyle("normal", 12)
        },
        dataZoom: opLineFnc.lineDataZoom(20, 10),
        xAxis: opLineFnc.lineXaxis("normal", 12, that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("normal", 12, "人数"),
        series: opLineFnc.lineSeries(
          that.outerData, 
          "外出",
          that.enterData,
          "非外出"
        )
      };
      this.myChart.setOption(option);
      this.myChart.on("click", params => {
        if (this.role == "学生") {
          this.$router.push({
            path: "/whole/outStudentTable/" + params.name + "/" + this.role
          });
        } else if (this.role == "教师") {
          this.$router.push({
            path: "/whole/outTeacherTable/" + params.name + "/" + this.role
          });
        }
      });
    },
    addClass({columnIndex}){
      if(columnIndex===2){
        return 'click_enter'
      }
    }
  },
  watch: {
    checkedVal: {
      handler: function(val) {
        this.role = this.allIndexs[val[0]].label;
        console.log(val);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.outer-line-chart {
  width: 100%;
  height: 100%;
  .cascader-style {
    width: 30%;
  }
  #outer-line-container {
    width: 100%;
    height: 90%;
  }
}
</style>
