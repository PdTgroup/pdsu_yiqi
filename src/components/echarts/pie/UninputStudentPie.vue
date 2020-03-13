<template>
  <div class="uninput-pie-chart" v-bind:style="{ height: clientHeight }">
    <i class="el-icon-arrow-right"></i
    ><span class="chart-title">统计{{ department }}学生未录入情况：</span>
    <div id="uninput-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPieFun from "./optionPie.js";
import optionPublicFun from "../../../utils/optionPublic.js";
export default {
  name: "uninput-pie-chart",
  data() {
    return {
      data: null,
      myChart: {},
      department: null,
      clientHeight: "100%",
      dataGrade: [
        { value: 5, name: "大四" },
        { value: 116, name: "大三" },
        { value: 51, name: "大二" },
        { value: 6, name: "大一" }
      ],
    };
  },
  created() {
    this.setClient();
    this.data = this.dataGrade;
    this.department = this.$route.params.department;
  },
  mounted() {
    this.uninputPieCharts(this.data);
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    // pie 数据渲染
    uninputPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("uninput-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend("vertical", "20%", "50%"),
        series: opPieFnc.pieSeries("87%", "50%", "56%", data)
      });
      // 饼图重新渲染
      let that = this;
      this.myChart.on("click", params => {
        this.$router.push({
          path: "/whole/uninputStuTable/" + that.department + "/" + params.name
        });
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.uninput-pie-chart {
  width: 100%;
  height: 100%;
  .cascader-style {
    width: 30%;
  }
  .chart-title {
    font-size: 20px;
  }
  #uninput-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
