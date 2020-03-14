<template>
  <div class="temp-line-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">统计{{ role }}温度情况：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allIndexs"
        size="small"
        class="cascader-style"
      ></el-cascader>
    </div>
    <div id="temp-line-container"></div>
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
  name: "temp-line-chart",
  data() {
    return {
      role: null,
      myChart: {},
      clientHeight: "100%",
      unnormalData: [10, 20, 11, 15, 17, 19, 51],
      normalData: [22, 70, 111, 571, 440, 360, 10],
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
      this.myChart = new optionPublicFun().init("temp-line-container");
      let option = {
        tooltip: opLineFnc.lineTooltip("normal", 12, "人"),
        color: colors,
        legend: {
          right: 10,
          top: 8,
          textStyle: new optionPublicFun().textStyle("normal", 12)
        },
        dataZoom: opLineFnc.lineDataZoom(20),
        xAxis: opLineFnc.lineXaxis("normal", 12, that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("normal", 14, "人数"),
        series: opLineFnc.lineSeries(
          that.unnormalData,
          "温度异常",
          that.normalData,
          "温度正常",
        )
      };
      this.myChart.setOption(option);
      this.myChart.on("click", params => {
        if (this.role == "学生") {
          this.$router.push({
            path: "/whole/tempStudentTable/" + params.name + "/" + this.role
          });
        } else if (this.role == "教师") {
          this.$router.push({
            path: "/whole/tempTeacherTable/" + params.name + "/" + this.role
          });
        }
      });
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
.temp-line-chart {
  width: 100%;
  height: 100%;
  #temp-line-container {
    width: 100%;
    height: 90%;
  }
}
</style>
