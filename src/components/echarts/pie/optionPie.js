import optionPublicFun from '../../../utils/optionPublic.js'
// import dataPieFun from './dataPie.js';

class optionPieFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace pieTooltip
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {饼图级别} type
   * @author yqf
   * created in 19-11-24
   */
  pieTooltip() {
    let toolTip = {
      trigger: 'item',
      textStyle: new optionPublicFun().textStyle("normal", 12),
      formatter: "{b} : {c} 人 ({d}%)"
    }
    return toolTip;
  }
  /**
   * @namespace pieLegend
   * @param {排列方式} type 
   * @param {右边} right 
   * @param {顶部} top 
   */
  pieLegend(type, right, top) {
    let legend = null;
    let verticalLegend = {
      orient: "vertical",
      right: right,
      top: top,
      textStyle: new optionPublicFun().textStyle("normal", 12)
    };
    let horizontalLegend = {
      orient: "horizontal",
      type: 'scroll',
      right: right,
      top: top,
      textStyle: new optionPublicFun().textStyle("normal", 12)
    }
    if(type == "vertical") {
      legend = verticalLegend;
    }else if(type == "horizontal"){
      legend = horizontalLegend;
    }
    return legend;
  }
  /**
   * @namespace pieSeries
   * @param {判断饼图类型} type 
   */
  pieSeries(radius, centerX, centerY, data) {
    let result = [{
      type: 'pie',
      radius: radius,
      center: [centerX, centerY],
      data: data,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
    return result;
  }
}
export default optionPieFun;