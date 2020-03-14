<template>
  <div class="student-temp-line-chart" :style="{ height: clientHeight }">
    <i class="el-icon-arrow-right"></i
    ><span class="chart-title">{{ name }}{{ role }}最近温度变化情况：</span>
    <div id="student-temp-line-container"></div>
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
export default {
  name: "student-temp-line-chart",
  data() {
    return {
      role: null,
      name: null,
      myChart: {},
      clientHeight: "100%",
      tempData: [10, 20, 11, 15, 17, 19, 51],
      dates: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"]
    };
  },
  created() {
    this.setClient();
    this.role = this.$route.params.role;
    this.name = this.$route.params.name;
  },
  mounted() {
    this.tempLineCharts();
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    tempLineCharts() {
      let that = this;
      let opLineFnc = new optionLineFun();
      this.myChart = new optionPublicFun().init("student-temp-line-container");
      let option = {
        tooltip: opLineFnc.lineTooltip("normal", 14, "/℃"),
        legend: {
          right: "10%",
          top: 8,
          textStyle: new optionPublicFun().textStyle("normal", 14)
        },
        dataZoom: opLineFnc.lineDataZoom(30, 0),
        xAxis: opLineFnc.lineXaxis("bold", 12, that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("bold", 14, "/℃"),
        series: [
          {
            name: "温度",
            type: "line",
            data: that.tempData,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 37.5
                }
              ]
            }
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.student-temp-line-chart {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  #student-temp-line-container {
    width: 100%;
    height: 95%;
  }
}
</style>
