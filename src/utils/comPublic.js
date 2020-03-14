/**
 * @namespace slashNum 获取路由中 / 的个数
 * @param data  当前路由地址
 * **/
let slashNum = function(data){
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if(data[i] == "/"){
      num = num+1;
    }
  }
  return num;
}


let comFunc ={//所有方法的集合
  slashNum, //获取路由中 / 的个数
}
export default comFunc;