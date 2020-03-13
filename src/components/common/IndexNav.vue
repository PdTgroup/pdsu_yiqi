<template>
  <div class="index-nav">
    <el-row type="flex" justify="end" class="nav-row">
<!--      &lt;!&ndash; 搜索框 &ndash;&gt;-->
<!--      <el-col :span="4">-->
<!--        <el-input-->
<!--          placeholder="请输入内容"-->
<!--          v-model="content"-->
<!--          clearable-->
<!--          @keyup.enter.native="searchContent"-->
<!--        >-->
<!--          <i class="el-icon-search el-input__icon" slot="suffix" @click="searchContent"></i>-->
<!--        </el-input>-->
<!--      </el-col>-->

      <el-col :span="2.5">
        <!-- 个人中心，包含下拉框内容 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user" style="font-size: 1.5em"></i>
            <span class="nav-user">{{userName}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">
              <i class="el-icon-postcard"></i>个人信息
            </el-dropdown-item>
            <el-dropdown-item command="b">
              <i class="el-icon-setting"></i>设置
            </el-dropdown-item>
            <el-dropdown-item command="c">
              <a class="el-icon-switch-button" href="/login"></a>退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index-nav",
  data() {
    return {
      userName: "admin",
      content: "" // 搜索框内容
    };
  },
  methods: {
    // 点击用户菜单内容事件
    getCommand(command) {
      this.$message("click on item " + command);
    },
    // 对 输入框的 内容进行判定
    searchContent() {
      let input_val = this.content;
      if (input_val.trim() == "") {
        this.$notify({
          title: "错误",
          message: "啊哦，你是不是忘记输入查询内容啦？",
          type: "error"
        });
      } else {
        this.$notify({
          title: "成功",
          message: "您要查询的内容是--" + input_val + "--",
          type: "success"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.index-nav {
  width: 100%;
  .el-icon-message {
    position: relative;
    top: -2px;
    color: #fff;
  }
  .el-icon-message:hover {
    color: #409eff;
  }
  .nav-row {
    text-align: center;
    .item {
      margin: 0 15px;
    }
    .nav-user {
      margin-left: 3px;
    }
    .el-badge__content.is-fixed {
      top: 15px;
    }
    .el-dropdown {
      color: #fff;
    }
    .el-dropdown:hover {
      color: #409eff;
    }
  }
}
</style>