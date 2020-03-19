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
    import getMap from "../../../utils/getMap";
    import Vue from "vue";
    import Vuex from "vuex";
    import axios from "axios";

    Vue.use(Vuex);
    Vue.prototype.$ajax = axios;
    import echarts from "echarts";
    import optionMapFun from "./optionMap.js";
    import bus from "../../../../public/eventBus.js";
    import cityMap from "../../../js/china-main-city-map";
    import optionPublicFun from "../../../utils/optionPublic.js";
    import dataByChina from "../../../json/map/dataByChina";
    import dataXiZang from "../../../json/map/dataXiZang";
    import dataXian from "../../../json/map/dataXian";
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
                dataAli: dataXian,
                dataXizang: dataXiZang,
                dataChina: dataByChina,
                data: null
            };
        },
        created() {
            this.$nextTick(() => {
                this.title = "全国各省";
                this.name = this.$route.params.name;
                this.myChart = new optionPublicFun().init("map-container");
                this.myChart.on('click', params => {
                  console.log(params)
                  this.nextClick(params)
                });
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
                            console.log(response)
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
            nextClick(params) {
                this.name = params.name;
                this.cityName = this.name;
                bus.$emit("cityName", this.cityName);
                if (this.id) {
                    this.title = params.name + "省各市";
                    this.id = cityMap[params.name];
                    this.change();
                    this.commitData(true, this.data);
                } else {
                    mapStack = [];
                    parentId = this.id;
                    parentName = this.name;
                    this.$message({
                        showClose: true,
                        message: "已经到底了",
                        type: "warning"
                    });
                }
            },
            mapCharts(data) {//渲染数据
                this.mapJson = getMap(this.id);
                this.jsonData = this.mapJson;
                parentId = this.id;
                parentName = "china";
                this.commitData(false, data);
                bus.$emit("cityName", this.cityName);
            },
            commitData(flag, data) {
                let that = this;
                axios
                    .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
                    .then(response => {
                        console.log(response.data)
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
        },
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
