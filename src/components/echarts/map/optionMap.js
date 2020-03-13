import optionPublicFun from '../../../utils/optionPublic.js'
class optionMapFun {
  /**
   * @namespace mapTooltip
   * @author he
   * create in 2020-1-11
   */
  mapTooltip() {
    let tooltip = {
      trigger: 'item',
      formatter: function (e) {
        return .5 == e.value ? e.name + "：有疑似病例" : e.name + "<br />" + "学生总人数：" + e.data.student + "<br/>" + "教师总人数：" + e.data.teacher + "<br/>" + "总人数：" + e.value;
      },
      textStyle: new optionPublicFun().textStyle("normal"),
    }
    return tooltip;
  }
   /**
   * @namespace mapVisualMap
   */
  mapVisualMap() {
    let visualMap = {
      min: 0,
      max: 500,
      left: 0,
      bottom: 10,
      showLabel: !0,
      text: ["高", "低"],
      pieces: [{
          gt: 500,
          label: "> 500 人",
          color: "#7f1100"
        },
        {
          gte: 100,
          lte: 300,
          label: "10 - 100 人",
          color: "#ff5428"
        },
        {
          gte: 1,
          lt: 100,
          label: "1 - 9 人",
          color: "#ff8c71"
        },
        {
          value: 0,
          color: "lightgreen"
        }
      ],
      show: true,
      textStyle: {
        fontSize: "10",
        color: "white"
      }
    }
    return visualMap;
  }
  /**
   * @namespace mapGeo
   * @param {展示地图省市名} mapName 
   * @param {排名各地市数据} barData 
   */
  mapGeo(mapName){
    let geo = {
      map: mapName,
      zoom: 1.25,
      label: {
        normal: {
          show: true,
          fontSize: "12",
          color: "rgba(0,0,0,0.7)"
        }
      },
      itemStyle: {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          areaColor: "#f2d5ad",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    }
    return geo;
  }
  /**
   * @namespace mapSeries
   * @param {数据} data
   */
  mapSeries(data){
    let series = [
      {
        type: "map",
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          emphasis: {
            color: "red"
          }
        },
        geoIndex: 0,
        data: data
      }
    ]
    return series;
  }
  /**
   * @namespace mapCountySeries
   * @param {展示地图省市名} name 
   * @param {县数据} data 
   */
  mapCountySeries(name, data){
    let series = [
      {
        type: "map",
        mapType: name /* // 自定义扩展图表类型 */,
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 0.2 /* //区域边框宽度 */,
            borderColor: "#009fe8" /* //区域边框颜色 */,
            areaColor: "#ffefd5"
          },
          emphasis: {
            areaColor: "#FFFFFF"
          }
        },
        showLegendSymbol: true,
        data: data
      }
    ]
    return series;
  }
}
export default optionMapFun;