import axios from '../control/filter/http.js'
/**
 * @namespace getPower 获取所有权限
 * @author he
 * create in 2020-1-5
 */
let getPower = async function () {
  return await axios
  .get(
    "/dianyeAutho/rest/CrudServlet/getAllAuthoritys"
  )
}

/**
 * @namespace addPower 添加权限
 * @param {新增权限信息} body {"authorityName":"qq","authorityDescribe":"vv"}
 */
let addPower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/addAuthority",body
  )
}

/**
 * @namespace delPower 删除单个权限
 * @param {要删除的用户id} body   {"authority_id":10}
 */
let delPower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/delAuthorityById",body
  )
}

/**
 * @namespace updatePower 修个单个权限信息
 * @param {修改后的用户信息} body {"authorityId":"3","authorityName":"qq","authorityDescribe":"vv"}
 */
let updatePower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/updateAuthority",body
  )
}

let requestPower = {
  getPower,
  addPower,
  delPower,
  updatePower
}
export default requestPower;