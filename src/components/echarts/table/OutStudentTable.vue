<template>
  <div class="student-outer-table" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ date }} 所有外出{{role}}信息表：</span>
    </div>
    <el-table
      :data="studentInfo"
      border
      style="width: 100%"
      class="person-info"
      @row-click="detailInfo"
      :cell-class-name="addClass"
    >
      <el-table-column prop="id" label="学号" width="160"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="out" label="是否外出" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="classNo" label="班级" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="dormitoryNum" label="宿舍号" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="住址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="school" label="是否返平" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tel" label="联系电话" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "student-outer-table",
  data() {
    return {
      role: null,
      date: null,
      clientHeight: "100%",
      studentInfo: [
        {
          id: 17121011,
          out: "是",
          name: "王小虎",
          classNo: "17学前一班",
          address: "上海市普陀区金沙江路 1518 弄",
          dormitoryNum: "3331",
          school: "否",
          tel: 13155443325
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
    detailInfo(row, column) {
      if (column.property == "id") {
        this.$router.push({
          path: "/whole/outerInfo/" + row.name
        });
      }else if(column.property == "dormitoryNum"){
        this.$router.push({
          path: "/whole/dormitoryInfo/" + row[column.property]
        });
      }else if (column.property == "classNo") {
        this.$router.push({
          path: "/whole/classStuInfo/" + row[column.property]
        });
      }
    },
    // eslint-disable-next-line no-unused-vars
    addClass({row,column,rowIndex,columnIndex}){
      if(columnIndex===0||columnIndex===3||columnIndex===4){
        return 'click_enter'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.student-outer-table::-webkit-scrollbar {
  width: 4px;
}
.student-outer-table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.student-outer-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.student-outer-table {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .person-info {
    margin-top: 18px;
  }
}
</style>
