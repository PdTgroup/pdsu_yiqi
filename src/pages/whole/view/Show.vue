<template>
  <div id="show">
    <!--主体-->
    <div class="main clearfix">
      <div class="show-view left">
        <!-- 天气模块 -->
        <div class="border-container show-weather">
          <Weather></Weather>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container show-person-num">
          <!-- 全校师生分布地图模块 -->
          <OuterPerson></OuterPerson>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <!-- 地区人数折线模块 -->
        <div class="border-container show-line">
          <NumberLine></NumberLine>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
      <div class="show-view center">
        <div class="border-container show-map">
          <Map></Map>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
      <div class="show-view right">
        <!-- 今日体温测量表格 -->
        <div class="border-container show-table">
          <TodayTempTable></TodayTempTable>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <!-- 体温正/异常人数折线模块 -->
        <div class="border-container show-radio">
          <TempLine></TempLine>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <!-- 录入情况饼图模块 -->
        <div class="border-container show-input">
          <InputPie></InputPie>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Map = () => import("../../../components/echarts/map/Map.vue");
let TodayTempTable = () =>
  import("../../../components/echarts/table/TodayTempTable.vue");
let OuterPerson = () =>
  import("../../../components/echarts/line/OuterPerson.vue");
let InputPie = () => import("../../../components/echarts/pie/InputPie.vue");
let Weather = () => import("../../../components/echarts/other/Weather.vue");
let TempLine = () => import("../../../components/echarts/line/TempLine.vue");
let NumberLine = () =>
  import("../../../components/echarts/line/NumberLine.vue");
export default {
  name: "show",
  components: {
    Map,
    TodayTempTable,
    Weather,
    InputPie,
    TempLine,
    OuterPerson,
    NumberLine
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
#show {
  background: #111739;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
  }
  .main {
    padding: 0 20px 20px;
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
  }
  .show-view {
    float: left;
    color: #00ffff;
    margin: 1%;
    overflow: inherit;
  }
  .left {
    width: 29%;
    .show-weather {
      width: 100%;
      height: 6rem;
    }
    .show-line {
      width: 100%;
      height: 20.5rem;
    }
    .show-person-num {
      width: 100%;
      height: 20rem;
    }
  }
  .center {
    width: 39%;
    .show-map {
      width: 100%;
      height: 48.2rem;
    }
  }
  .right {
    width: 26%;
    .show-table {
      width: 100%;
      height: 15.5rem;
    }
    .show-radio {
      width: 100%;
      height: 15.5rem;
    }
    .show-input {
      width: 100%;
      height: 15.3rem;
    }
  }
}
</style>
