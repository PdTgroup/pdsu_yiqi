<template>
  <div class="dormitory-info" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{dormitoryNum}}宿舍信息详情：</span>
    </div>
    <el-table
      :data="studentInfo"
      border
      style="width: 100%"
      class="student-info"
    >
      <el-table-column prop="id" label="学号" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column
        prop="identity"
        label="身份"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="tel" label="联系方式" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "dormitory-info",
  data() {
    return {
      clientHeight: "100%",
      dormitoryNum: null,
      studentInfo: [
        {
          id: 171210111,
          name: "王小虎",
          identity: "寝室长",
          tel: 13155443325
        },{
          id: 171210112,
          name: "王小虎",
          identity: "舍员",
          tel: 13155443325
        },{
          id: 171210113,
          name: "王小虎",
          identity: "舍员",
          tel: 13155443325
        }
      ]
    };
  },
  created() {
    this.dormitoryNum = this.$route.params.dormitoryNum;
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
.dormitory-info::-webkit-scrollbar {
  width: 4px;
}
.dormitory-info::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.dormitory-info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.dormitory-info {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .student-info {
    margin-top: 18px;
  }
}
</style>
