<template>
  <div class="class-student-info" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ classNo }}成员信息详情：</span>
    </div>
    <el-table
      :data="classStuInfo"
      border
      style="width: 100%"
      class="student-info"
      @row-click="getInfo"
      :cell-class-name="addClass"
    >
      <el-table-column prop="id" label="学号" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="dormitoryNum" label="宿舍" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tel" label="联系方式" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "class-student-info",
  data() {
    return {
      clientHeight: "100%",
      dormitoryNum: null,
      classStuInfo: [
        {
          id: 171210111,
          name: "王小虎",
          dormitoryNum: 3301,
          tel: 13155443325
        },
        {
          id: 171210111,
          name: "王小虎",
          dormitoryNum: 3301,
          tel: 13155443325
        },
        {
          id: 171210111,
          name: "王小虎",
          dormitoryNum: 3301,
          tel: 13155443325
        }
      ]
    };
  },
  created() {
    this.classNo = this.$route.params.classNo;
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
    },
    getInfo(row, column) {
      if (column.property == "dormitoryNum") {
        this.$router.push({
          path: "/whole/dormitoryInfo/" + row[column.property]
        });
      }
    },
    addClass({columnIndex }) {
      if (columnIndex === 2) {
        return "click_enter";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.class-student-info::-webkit-scrollbar {
  width: 4px;
}
.class-student-info::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.class-student-info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.class-student-info {
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
