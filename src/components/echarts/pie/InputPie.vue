<template>
  <div class="input-pie-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">统计{{ role }}{{ state }}情况：</span>
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
export default {
  name: "input-pie-chart",
  data() {
    return {
      data: null,
      role: null,
      state: null,
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
      dataDepartment: [
        { value: 5, name: "计算机学院(软件学院)" },
        { value: 116, name: "新闻与传播学院" },
        { value: 51, name: "信息工程学院" },
        { value: 6, name: "化学与环境工程学院" },
        { value: 85, name: "教师教育学院" },
        { value: 10, name: "电气与自动化学院" }
      ],
      checkedVal: [0]
    };
  },
  created() {
    this.$nextTick(() => {
      this.state = "录入";
      this.data = this.dataSchool;
      this.role = this.allIndexs[this.checkedVal[0]].label;
      this.inputPieCharts(this.data);
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
      });
      // 饼图重新渲染
      this.myChart.on("click", params => {
        this.state = "未录入";
        if (params.name == "未录" || params.name == "已录") {
          this.data = this.dataDepartment;
          this.inputPieCharts(this.data);
        } else {
          if (this.role == "学生") {
            this.$router.push({
              path: "/whole/uninputStudentPie/" + params.name
            });
          } else if (this.role == "教师") {
            this.$router.push({
              path: "/whole/teacherInfo/" + params.name + "/true"
            });
          }
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
.input-pie-chart {
  width: 100%;
  height: 100%;
  #input-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
