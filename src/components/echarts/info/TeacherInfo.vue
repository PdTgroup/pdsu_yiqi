<template>
  <div class="uninput-teacher" :style="{ height: clientHeight }">
    <i class="el-icon-arrow-right"></i
    ><span class="chart-title" v-if="flag"
      >统计{{ department }}教师未录入情况：</span
    >
    <span class="chart-title" v-if="!flag">{{ department }}老师的信息</span>
    <el-table
      :data="uninputTeacherInfo"
      border
      style="width: 100%"
      class="uninput-teacher"
    >
      <el-table-column prop="id" label="教师工号" width="130">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="isInputTime" label="未录入时间" width="120"> </el-table-column>
      <el-table-column prop="adress" label="家庭地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tel" label="联系方式" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "uninput-teacher",
  data() {
    return {
      flag: null,
      department: null,
      clientHeight: "100%",
      uninputTeacherInfo: [
        {
          id: 110,
          name: "李冰",
          isInputTime:["早上,","中午"],
          adress: "福建省福清市",
          tel: 13155443325
        }
      ]
    };
  },
  created() {
    this.setClient();
    let flag = this.$route.params.flag;
    if (flag == "false") {
      this.flag = false;
    } else {
      this.flag = true;
    }
    this.department = this.$route.params.department;
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
.uninput-teacher::-webkit-scrollbar {
  width: 4px;
}
.uninput-teacher::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.uninput-teacher::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.uninput-teacher {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .chart-title {
    font-size: 20px;
  }
  .uninput-teacher {
    margin-top: 10px;
  }
}
</style>
