<template>
  <div class="message" :style="{ height: clientHeight }">
    <div class="border-container show-view show-radio">
      <TempLine></TempLine>
      <span class="top-left border-span"></span>
      <span class="top-right border-span"></span>
      <span class="bottom-left border-span"></span>
      <span class="bottom-right border-span"></span>
    </div>
    <!-- 录入情况饼图模块 -->
    <div class="border-container show-view show-input">
      <InputPie></InputPie>
      <span class="top-left border-span"></span>
      <span class="top-right border-span"></span>
      <span class="bottom-left border-span"></span>
      <span class="bottom-right border-span"></span>
    </div>
  </div>
</template>

<script>
let TempLine = () => import("../../../components/echarts/line/TempLine.vue");
let InputPie = () => import("../../../components/echarts/pie/InputPie.vue");
export default {
  name: "Message",
  components: {
    TempLine,
    InputPie
  },
  data() {
    return {
      clientHeight: "100%"
    };
  },
  created() {
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

<style lang="scss">
a:link,
a:visited,
a:active {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  width: 4px;
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.cascader-style {
  width: 30%;
}
.index-menu,
.index-menu:hover {
  display: inline-block !important;
  margin: 0 10px;
  .el-input__inner {
    background-color: #111739;
    border: 1px solid #60c1de;
    color: #fff;
  }
  .el-input__inner:hover {
    border: 1px solid #60c1de;
  }
  .menu-name {
    font-size: 13px;
    color: #60c1de;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.border-container {
  position: relative;
  margin-top: 15px;
  padding: 5px 5px 0 5px;
  border: 1px solid #54dcf2;
  span.border-span {
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
  }
  span.top-left {
    top: -4px;
    left: -4px;
    border-top: 3px solid #54dcf2;
    border-left: 3px solid #54dcf2;
  }
  span.top-right {
    top: -4px;
    right: -4px;
    border-top: 3px solid #54dcf2;
    border-right: 3px solid #54dcf2;
  }
  span.bottom-left {
    bottom: -4px;
    left: -4px;
    border-bottom: 3px solid #54dcf2;
    border-left: 3px solid #54dcf2;
  }
  span.bottom-right {
    bottom: -4px;
    right: -4px;
    border-bottom: 3px solid #54dcf2;
    border-right: 3px solid #54dcf2;
  }
}
.message {
  .show-view {
    float: left;
    color: #00ffff;
    margin: 1%;
    overflow: inherit;
  }
  .show-radio {
    width: 48%;
    height: 100%;
  }
  .show-input {
    width: 48%;
    height: 100%;
  }
}
</style>
