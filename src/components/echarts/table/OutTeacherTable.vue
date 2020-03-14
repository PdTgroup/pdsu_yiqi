<template>
  <div class="outer-teacher-table" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ date }} 所有外出{{role}}信息表：</span>
    </div>
    <el-table
      :data="outTeacherTable"
      border
      style="width: 100%"
      class="teacher-table"
      @row-click="teacherInfo"
    >
      <el-table-column prop="id" label="教师工号" width="160"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="130"> </el-table-column>
      <el-table-column prop="temperature" label="体温/℃" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tel" label="联系电话" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "outer-teacher-table",
  data() {
    return {
      role: null,
      date: null,
      clientHeight: "100%",
      outTeacherTable: [
        {
          id: 110,
          temperature: "38.5",
          name: "王小虎",
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
    teacherInfo(row) {
      this.$router.push({
        path: "/whole/teacherInfo/" + row.name + "/false"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.outer-teacher-table::-webkit-scrollbar {
  width: 4px;
}
.outer-teacher-table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.outer-teacher-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.outer-teacher-table {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .teacher-table {
    margin-top: 18px;
  }
}
</style>
