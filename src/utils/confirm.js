/**
 * @namespace slashNum 获取路由中 / 的个数
 * @param data  当前路由地址
 * **/
let confirm = async function(obj,tipTitle){
  console.log("confirm");
  return await obj.$confirm(tipTitle, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  });
}

let manageConfirm ={
  confirm, 
  // requestMessage
}
export default manageConfirm;