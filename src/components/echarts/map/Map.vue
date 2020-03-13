<template>
  <div class="map-chart" :style="{ height: clientHeight }">
    <div class="box">
      <button class="backBtn" @click="back()">返回上级</button>
      <span
        ><i class="el-icon-arrow-right"></i
        ><span class="chart-title">{{ title }}师生人口分布：</span>
      </span>
      <div id="map-container" class="chart"></div>
    </div>
  </div>
</template>

<script>
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;
import echarts from "echarts";
import optionMapFun from "./optionMap.js";
import bus from "../../../../public/eventBus.js";
import cityMap from "@/js/china-main-city-map.js";
import optionPublicFun from "../../../utils/optionPublic.js";
//记录父级ID、Name
var mapStack = [];
var parentId = null;
var parentName = null;
export default {
  name: "map-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      title: null,
      id: 100000,
      name: "china",
      jsonData: null,
      cityName: "china",
      dataAli: [
        {
          name: "措勤县",
          value: 0,
          student: 0,
          teacher: 0
        },
        {
          name: "噶尔县",
          value: 54,
          student: 0,
          teacher: 0
        },
        {
          name: "改则县",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "革吉县",
          value: 40,
          student: 0,
          teacher: 0
        },
        {
          name: "普兰县",
          value: 75,
          student: 0,
          teacher: 0
        },
        {
          name: "日土县",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "札达县",
          value: 83,
          student: 0,
          teacher: 0
        }
      ],
      dataXizang: [
        {
          name: "拉萨市",
          value: 0,
          student: 0,
          teacher: 0
        },
        {
          name: "日喀则市",
          value: 54,
          student: 0,
          teacher: 0
        },
        {
          name: "昌都市",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "山南市",
          value: 40,
          student: 0,
          teacher: 0
        },
        {
          name: "那曲地区",
          value: 75,
          student: 0,
          teacher: 0
        },
        {
          name: "阿里地区",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "林芝市",
          value: 83,
          student: 0,
          teacher: 0
        }
      ],
      dataChina: [
        {
          name: "南海诸岛",
          value: 0,
          student: 0,
          teacher: 0
        },
        {
          name: "北京",
          value: 54,
          student: 0,
          teacher: 0
        },
        {
          name: "天津",
          cityName: "tianjin",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "上海",
          cityName: "shanghai",
          value: 40,
          student: 0,
          teacher: 0
        },
        {
          name: "重庆",
          cityName: "chongqing",
          value: 75,
          student: 0,
          teacher: 0
        },
        {
          name: "河北",
          cityName: "hebei",
          value: 13,
          student: 0,
          teacher: 0
        },
        {
          name: "河南",
          cityName: "henan",
          value: 83,
          student: 0,
          teacher: 0
        },
        {
          name: "云南",
          cityName: "yunnan",
          value: 11,
          student: 0,
          teacher: 0
        },
        {
          name: "辽宁",
          cityName: "liaoning",
          value: 19,
          student: 0,
          teacher: 0
        },
        {
          name: "黑龙江",
          value: 15,
          student: 0,
          teacher: 0
        },
        {
          name: "湖南",
          value: 69,
          student: 0,
          teacher: 0
        },
        {
          name: "安徽",
          value: 60,
          student: 0,
          teacher: 0
        },
        {
          name: "山东",
          value: 39,
          student: 0,
          teacher: 0
        },
        {
          name: "新疆",
          value: 4,
          student: 0,
          teacher: 0
        },
        {
          name: "江苏",
          value: 31,
          student: 0,
          teacher: 0
        },
        {
          name: "浙江",
          value: 104,
          student: 0,
          teacher: 0
        },
        {
          name: "江西",
          value: 36,
          student: 0,
          teacher: 0
        },
        {
          name: "湖北",
          value: 1052,
          student: 0,
          teacher: 0
        },
        {
          name: "广西",
          value: 33,
          student: 0,
          teacher: 0
        },
        {
          name: "甘肃",
          value: 7,
          student: 0,
          teacher: 0
        },
        {
          name: "山西",
          value: 9,
          student: 0,
          teacher: 0
        },
        {
          name: "内蒙古",
          value: 7,
          student: 0,
          teacher: 0
        },
        {
          name: "陕西",
          value: 22,
          student: 0,
          teacher: 0
        },
        {
          name: "吉林",
          value: 4,
          student: 0,
          teacher: 0
        },
        {
          name: "福建",
          value: 18,
          student: 0,
          teacher: 0
        },
        {
          name: "贵州",
          value: 5,
          student: 0,
          teacher: 0
        },
        {
          name: "广东",
          value: 98,
          student: 0,
          teacher: 0
        },
        {
          name: "青海",
          value: 1,
          student: 0,
          teacher: 0
        },
        {
          name: "西藏",
          id: "0",
          citys: "xizang",
          value: 0,
          student: 0,
          teacher: 0
        },
        {
          name: "四川",
          value: 44,
          student: 0,
          teacher: 0
        },
        {
          name: "宁夏",
          value: 4,
          student: 0,
          teacher: 0
        },
        {
          name: "海南",
          value: 22,
          student: 0,
          teacher: 0
        },
        {
          name: "台湾",
          value: 3,
          student: 0,
          teacher: 0
        },
        {
          name: "香港",
          value: 5,
          student: 0,
          teacher: 0
        },
        {
          name: "澳门",
          value: 5,
          student: 0,
          teacher: 0
        }
      ],
      data: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.title = "全国各省";
      this.name = this.$route.params.name;
      this.mapCharts(this.dataChina);
    });
  },
  methods: {
    back() {
      if (mapStack.length != 0) {
        //如果有上级目录则执行
        let map = mapStack.pop();
        axios
          .get("http://127.0.0.1:8083/js/" + map.mapId + ".json", {})
          .then(response => {
            bus.$emit("cityName", map.mapName);
            if (map.mapName == "china") {
              this.title = "全国各省";
            } else {
              this.title = map.mapName;
            }
            this.jsonData = response.data;
            this.data = this.dataChina;
            registerAndsetOption(
              this.myChart,
              map.mapId,
              map.mapName,
              this.jsonData,
              this.dataChina,
              false
            );
            //返回上一级后，父级的ID、Name随之改变
            parentId = map.mapId;
            parentName = map.mapName;
          });
      }
    },
    change() {
      this.data = this.dataXizang;
    },
    mapCharts(data) {
      let that = this;
      bus.$emit("cityName", this.cityName);
      this.myChart = new optionPublicFun().init("map-container");
      axios
        .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
        .then(response => {
          that.mapJson = response.data;
          that.jsonData = that.mapJson;
          parentId = that.id;
          parentName = "china";
          that.request(false, data);
          that.myChart.on("click", params => {
            that.name = params.name;
            that.cityName = that.name;
            bus.$emit("cityName", that.cityName);
            if (that.id) {
              this.title = params.name + "省各市";
              that.id = cityMap[params.name];
              that.change();
              that.request(true, that.data);
            } else {
              mapStack = [];
              parentId = that.id;
              parentName = that.name;
              this.$message({
                showClose: true,
                message: "已经到底了",
                type: "warning"
              });
            }
          });
        });
    },
    request(flag, data) {
      let that = this;
      axios
        .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
        .then(response => {
          that.mapJson = response.data;
          that.jsonData = that.mapJson;
          registerAndsetOption(
            that.myChart,
            that.id,
            that.name,
            that.mapJson,
            data,
            flag
          );
        });
    }
  }
};
/**
 *
 * @param {*} myChart
 * @param {*} id        省市县Id
 * @param {*} name      省市县名称
 * @param {*} mapJson   地图Json数据
 * @param {*} flag      是否往mapStack里添加parentId，parentName
 */
function registerAndsetOption(myChart, id, name, mapJson, data, flag) {
  echarts.registerMap(name, mapJson);
  console.log("map-container", name);
  myChart.setOption({
    tooltip: new optionMapFun().mapTooltip(),
    visualMap: new optionMapFun().mapVisualMap(),
    geo: new optionMapFun().mapGeo(name),
    series: new optionMapFun().mapSeries(data)
  });
  if (flag) {
    //往mapStack里添加parentId，parentName,返回上一级使用
    mapStack.push({
      mapId: parentId,
      mapName: parentName
    });
    parentId = id;
    parentName = name;
  }
}
</script>

<style scoped lang="scss">
.map-chart {
  .box {
    width: 100%;
    height: 90%;
  }
  .chart {
    position: relative;
    height: 100%;
    top: 10%;
  }
  .backBtn {
    position: absolute;
    top: 8%;
    left: 2%;
    background-color: #00c298;
    border: 0;
    color: #fff;
    height: 27px;
    font-family: Microsoft Yahei;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    z-index: 99;
  }
  #map-container {
    width: 100%;
    height: 95%;
  }
}
</style>
