import optionPublicFun from '../../../utils/optionPublic.js'
// import dataLineFunc from './dataLine.js'
class optionLineFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace lineYaxis
   * @param {指标单位} indexUnit 
   */
  lineYaxis(weight, size, indexUnit) {
    let yaxis = {
      type: 'value',
      axisLabel: {
        formatter: '{value} '
      },
      axisLine: {
        lineStyle: new optionPublicFun().lineStyle("#fff", 1)
      },
      textStyle: new optionPublicFun().textStyle(weight, size),
      nameTextStyle: new optionPublicFun().textStyle(weight, size),
      name: indexUnit,
      splitLine: {
        show: true,
        lineStyle: new optionPublicFun().lineStyle("#1B283E", 1)
      }
    }
    return yaxis
  }
  /**
   * @namespace lineDataZoom
   * @param {zoomData 高度} zoomHeight 
   * @param {bottom 高度} bottom 
   */
  lineDataZoom(zoomHeight, bottom) {
    let result = [
      {
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        textStyle: { 
          color: '#fff'
        },
        height: zoomHeight,
        bottom: bottom
      },
      {
        type: 'inside'
      }
    ]
    return result;
  }
  /**
   * @namespace lineTooltip
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @author he
   * create in 19-11-27
   */
  lineTooltip(weight, size, unit) {
    let tooltip = {
      trigger: 'axis',
      textStyle: new optionPublicFun().textStyle(weight, size),
      formatter: '{b}<br />{a}: {c}' + unit
    };
    return tooltip;
  }
  /**
   * @namespace lineSeriesData
   * @param {进出方式} name 
   * @param {数据} data 
   */
  lineSeriesData(name, data) {
    let seriesData = 
    {
      name: name,
      type: "line",
      data: data
    }
    return seriesData;
  }
  /**
   * @namespace lineSeries
   * @param {进出方式} name 
   * @param {线条颜色} itemColor 
   * @param {数据} data 
   */
  lineSeries(data1, name1, data, name2 ) {
    let series = [
      this.lineSeriesData(name1,  data1),
      this.lineSeriesData(name2, data)
    ]
    return series;
  }
  /**
   * @namespace lineXaxis
   * @param {季度} cycle 
   * @param {18个地市同一季度的得分} indicatorValue 
   */
  lineXaxis(weight, size, indicatorValue, indexCycle) {
    let xaxis = {
      axisLine: {
        show: true,
        lineStyle: new optionPublicFun().lineStyle("#fff", 1)
      },
      axisLabel: {
        show: true,
        textStyle: new optionPublicFun().textStyle(weight, size),
        nameTextStyle: new optionPublicFun().textStyle(weight, size)
      },
      data: indicatorValue,//该指标的周期值（指标值）
      name: indexCycle
    }
    return xaxis;
  }
  /**
   * @namespace lineLegend
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {legend垂直/水平显示} orientData 
   * @param {选中城市} selectedCity 
   */
  lineLegend(weight, size, orientData, selectedCity) {
    let legend = {
      orient: orientData,
      type: 'scroll',
      right: 10,
      top: 8,
      selectedMode: 'multiple',
      selected: selectedCity,
      textStyle: new optionPublicFun().textStyle(weight, size)
    }
    return legend;
  }
}

export default optionLineFun;