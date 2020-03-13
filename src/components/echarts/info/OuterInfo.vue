<template>
  <div class="outer-info" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ name }}同学最近出入信息：</span>
    </div>
    <el-table :data="outerInfo" border style="width: 100%" class="outerInfo">
      <el-table-column prop="date" label="日期" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="temperature" label="体温/℃" show-overflow-tooltip>
      </el-table-column
      ><el-table-column
        prop="outAddress"
        label="外出地点"
        width="200"
      >
      </el-table-column
      ><el-table-column prop="tel" label="联系电话" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "outer-info",
  data() {
    return {
      clientHeight: "100%",
      name: "王小虎",
      outerInfo: [
        {
          date: "2020-3-4",
          temperature: "38.5",
          outAddress: "上海市普陀区金沙江路",
          tel: 13155443325
        }
      ]
    };
  },
  mounted() {
    this.setClient();
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.outer-info::-webkit-scrollbar {
  width: 4px;
}
.outer-info::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.outer-info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.outer-info {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .outerInfo {
    margin-top: 18px;
  }
}
</style>
