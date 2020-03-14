<template>
  <div id="whole">
    <!--头部-->
    <div class="header">
      平顶山学院疫情分析数据可视化展示
      <a href="javascript:history.back();" class="whole-back">
        <button class="button type1">返回</button>
      </a>
      <a href="/" class="whole-home">
        <button class="button type1"><i class="el-icon-s-home"></i>首页</button>
      </a>
    </div>
    <!--主体-->
    <div class="clearfix">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "whole"
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.el-icon-arrow-right {
  color: #e6a23c;
  font-weight: bold;
}
.chart-title {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.click_enter {
  text-decoration: underline;
  color: #4de2ff;
  cursor: pointer;
}
#whole {
  background: #111739;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
  }
  .header {
    height: 80px;
    position: relative;
    padding-top: 13px;
    font-size: 36px;
    color: #00ffff;
    text-align: center;
    background: url("./../../assets/images/bg.png") top center no-repeat;
    a.whole-back {
      position: absolute;
      right: 3%;
      top: -18%;
    }
    a.whole-home {
      position: absolute;
      left: 3%;
      top: -18%;
      .el-icon-s-home {
        padding-right: 5px;
      }
    }
  }
  .button {
    position: relative;
    padding: 0.5em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
  }
  .button.type1 {
    color: #00ffff;
  }
  .button.type1.type1::after,
  .button.type1.type1::before {
    content: "";
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  .button.type1.type1::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #566473;
    border-right-color: #566473;
  }
  .button.type1.type1::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #566473;
    border-left-color: #566473;
  }
  .button.type1.type1:hover:after,
  .button.type1.type1:hover:before {
    width: 100%;
    height: 100%;
  }
  .el-table {
    color: white;
  }
  .el-table td,
  .el-table th {
    text-align: center;
  }
  .el-table thead {
    color: white;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: #111739;
  }
  .el-table th,
  .el-table tr {
    background-color: #111739;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #585e80;
  }
  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #585e80;
  }
  .el-table--border,
  .el-table--group {
    border: 1px solid #585e80;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #0b0f2a;
  }
  .el-table__empty-block {
    background-color: #111739;
  }
  .el-table__empty-text {
    color: white;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: #111739;
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
