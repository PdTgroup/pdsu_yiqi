<template>
  <div class="temp-student-table" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ date }}温度异常{{role}}信息：</span>
    </div>
    <el-table
      :data="studentTable"
      border
      style="width: 100%"
      class="student-temp-info"
      @row-click="getStudentInfo"
      :cell-class-name="addClass"
    >
      <el-table-column prop="id" label="学号" width="140"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="temperature" label="体温/℃" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="住址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classNo" label="班级"  show-overflow-tooltip >
      </el-table-column>
      <el-table-column prop="dormitoryNum" label="宿舍号"   show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="outDoor" label="是否外出" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="tel" label="本人电话" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "temp-student-table",
  data() {
    return {
      role: null,
      date: null,
      clientHeight: "100%",
      studentTable: [
        {
          id: 171210111,
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          classNo: "17学前一班",
          dormitoryNum: 3331,
          outDoor: "否",
          tel: 13155443325
        }
      ]
    };
  },
  created() {
      console.log("object is ok");
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
    getStudentInfo(row, column) {
      if (column.property == "id") {
        this.$router.push({
          path: "/whole/studentTempLine/" + row.name + "/" + this.role
        });
      } else if (column.property == "dormitoryNum") {
        this.$router.push({
          path: "/whole/dormitoryInfo/" + row[column.property]
        });
      } else if (column.property == "classNo") {
        this.$router.push({
          path: "/whole/classStuInfo/" + row[column.property]
        });
      }
    },
    // eslint-disable-next-line no-unused-vars
    addClass({row,column,rowIndex,columnIndex}){
      if(columnIndex === 0||columnIndex === 4||columnIndex === 5){
        return 'click_enter'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.temp-student-table::-webkit-scrollbar {
  width: 4px;
}
.temp-student-table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.temp-student-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.temp-student-table {
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
