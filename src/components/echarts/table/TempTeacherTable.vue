<template>
  <div class="temp-teacher-table" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ date }}温度异常{{role}}信息表：</span>
    </div>
    <el-table
      :data="teacherTable"
      border
      style="width: 100%"
      class="student-temp-info"
      @row-click="getTeacherInfo"
    >
      <el-table-column prop="id" label="教师工号" width="140"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="temperature" label="体温/℃" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="住址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="outDoor" label="是否外出" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="tel" label="本人电话" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "temp-teacher-table",
  data() {
    return {
      role: null,
      date: null,
      clientHeight: "100%",
      teacherTable: [
        {
          id: 171210111,
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          outDoor: "否",
          tel: 13155443325,
        }
      ]
    };
  },
  created() {
    this.role = this.$route.params.role;
    this.date = "2020-" + this.$route.params.time;
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
    getTeacherInfo(row, column) {
      if (column.property == "name") {
        this.$router.push({
          path: "/whole/studentTempLine/" + row.name + "/" + this.role
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.temp-teacher-table::-webkit-scrollbar {
  width: 4px;
}
.temp-teacher-table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.temp-teacher-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.temp-teacher-table {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .student-temp-info {
    margin-top: 18px;
  }
}
</style>
