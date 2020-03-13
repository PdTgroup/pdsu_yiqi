import axios from '../control/filter/http.js'

/**
 * @namespace getBarChart
 * @param {获取柱状图的指标参数和时间参数} body {timeid: 13, indexid: 106}
 */
let getBarChart =  function (body) {
  return new Promise((resolve, reject)=>{
    axios.post('/dianye/rest/JsonData/barChart', body)
        .then(data=>{
          if(data.status===200){
            //处理状态
            resolve(data.data);
          }else {
            reject(data.status)
          }
        })
  })
}
export default getBarChart;