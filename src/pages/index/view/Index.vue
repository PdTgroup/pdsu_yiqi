<template>
  <div class="pd-index" :style="pageStyle">
    <el-container class="index-container">
      <!-- 侧边栏隐藏按钮 -->
      <i
        :class="classFlag?'el-icon-caret-left':'el-icon-caret-right'"
        @click="toggleAside"
        :style="btnStyle"
      ></i>
      <!-- 侧边栏 -->
      <el-aside :style="asideStyle">
        <IndexAside />
      </el-aside>
      <el-container class="container-right">
        <!-- 导航栏 -->
        <el-header class="right-nav">
          <IndexNav />
        </el-header>
        <!-- 主显示区域 -->
        <el-main class="right-main">
          <IndexMain :key="keys" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
let IndexAside = () => import("@/components/common/IndexAside.vue");
let IndexNav = () => import("@/components/common/IndexNav.vue");
let IndexMain = () => import("@/components/common/IndexMain.vue");
export default {
  name: "pd-index",
  components: {
    IndexAside,
    IndexNav,
    IndexMain
  },
  data() {
    return {
      //页面样式
      pageStyle: {
        width: "",
        height: ""
      },
      // 按钮样式
      btnStyle: {
        position: "absolute",
        "z-index": 100,
        "font-size": "23px",
        top: "50%",
        left: "10.5%"
      },
      // 侧边栏样式
      asideStyle: {
        width: "12%",
        height: "100%",
        "background-color": "#111739",
        display: "flex"
      },
      // 用途：判断加载哪个 icon 类
      classFlag: true,
      // 用途：显示/隐藏侧边栏，更改 keys 的值，来重新渲染页面
      keys: 0
    };
  },
  methods: {
    // 获取页面的可视宽高
    getClientHeight() {
      let clientWidth = document.documentElement
        ? document.documentElement.clientWidth
        : document.body.clientWidth;
      this.pageStyle.width = clientWidth + "px";
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.pageStyle.height = clientHeight + "px";
    },
    // 切换侧边栏的显示与隐藏
    toggleAside() {
      if (this.asideStyle.display == "none") {
        this.asideStyle.display = "block";
        this.classFlag = true;
        this.btnStyle.left = "10.5%";
      } else {
        this.asideStyle.display = "none";
        this.classFlag = false;
        this.btnStyle.left = "1%";
      }
      ++this.keys; // key的值发生变化，能够重新渲染对应组件
    }
  },
  mounted() {
    this.getClientHeight();
    let pd_this = this;
    // 监听浏览器窗口的变化
    window.onresize = function() {
      pd_this.getClientHeight();
    };
  }
};
</script>

<style lang="scss">
.pd-index {
  background: #0b0f2a;
  .index-container {
    width: 100%;
    height: 100%;
    display: flex;
    .container-right {
      width: 88%;
      height: 100%;
      .right-nav {
        width: 100%;
        background-color: #111739;
        line-height: 60px;
        border-left: 1px solid #848980;
      }
      .el-main {
        padding: 10px 10px 0 10px;
      }
      .right-main {
        width: 100%;
        height: 92%;
        display: flex;
      }
    }
  }

  .el-table {
    color: white !important;
  }
  .el-table td,
  .el-table th {
    text-align: center;
  }
  .el-table thead {
    color: white !important;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: #111739 !important;
  }
  .el-table th,
  .el-table tr {
    background-color: #111739 !important;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #585e80 !important;
  }
  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #585e80 !important;
  }
  .el-table--border,
  .el-table--group {
    border: 1px solid #585e80 !important;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #0b0f2a !important;
    // color: #2C9EF3;
  }
  .icon-control {
    margin: 0 5px;
  }
  .el-table__empty-block {
    background-color: #111739 !important;
  }
  .el-table__empty-text {
    color: white !important;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: #111739 !important;
  }
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 4px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .el-table__body-wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>