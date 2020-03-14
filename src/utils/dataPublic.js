class dataPublicFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace getModuleName 获取指标名称
   * @author yqf、he
   * created in 19-11-26
   */
  getModuleName() {
    let result = this.data.indexInfo.indexName;
    if (result == null || result == undefined)
      throw new Error("moduleName is couldn't find");
    return result;
  }
  /**
   * @namespace getUnit 获取指标单位
   * @author yqf、he
   * created in 19-11-26
   */
  getUnit() {
    let result = this.data.indexInfo.unit;
    if (result == null || result == undefined)
      throw new Error("index unit is couldn't find");
    return result;
  }
  /**
   * @namespace 最高分
   */
  maxScore() {
    let allCityScore = this.data.cityScore;
    let maxScore = this.data.cityScore[18].datas;
    if (allCityScore.length <= 0)
      throw new Error("The number of cities score of 0");
    return maxScore;
  }
  /**
   * @minScore 最低分
   */
  minScore() {
    let allCityScore = this.data.cityScore;
    let minScore = Math.floor(this.data.cityScore[19].datas);
    if (allCityScore.length <= 0)
      throw new Error("The number of cities score of 0");
    return minScore;
  }
  /**
   * @namespace getAllIndexs 获取所有的指标(柱形图包括所有季度)
   * @param {图表类型} type 
   * @param {指标所有季度} times 
   */
  getAllIndexs(type, times) {
    let allIndexs = []; // 所有指标数组
    let indexObj; // 一个指标对象
    let indexs = this.data.Allindexs; // 获取从后台请求过来的所有指标
    let status = {
      "bar": (indexid, indexName, times) => {
        return {
          value: indexid,
          label: indexName,
          children: times
        }
      },
      "line": (indexid, indexName) => {
        return {
          value: indexid,
          label: indexName
        }
      },
      "pie": (indexid, indexName, times) => {
        return {
          value: indexid,
          label: indexName,
          children: times
        }
      }
    }
    if (type === "pie") {
      indexs = this.data;
    }
    if (indexs.length <= 0)
        throw new Error("The number of indexs of 0");
      for (let i = 0; i < indexs.length; i++) {
        let indexid = indexs[i].iid;
        let indexName = indexs[i].indexName;
        if (status[type])
          indexObj = status[type](indexid, indexName, times);
        else
          throw new Error("The type is couldn't find");
        allIndexs.push(indexObj);
      }
    return allIndexs
  }
  /**
   * @namespace getAllTimes 获取所有的季度
   */
  getAllTimes() {
    let allTimes = [];
    let times = this.data.Alltime;
    if (times.length <= 0)
      throw new Error("The number of times of 0");
    for (let i = 0; i < times.length; i++) {
      let timeid = times[i].tid;
      let timeName = times[i].time;
      let timeValue = {
        value: timeid,
        label: timeName,
      }
      allTimes.push(timeValue);
    }
    return allTimes
  }
}
export default dataPublicFun;