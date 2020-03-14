import axios from '../control/filter/http.js'

/**
 * @namespace getAllRole 查询所有角色及其对应的权限
 * @author he
 * create in 2020-1-5
 */
let getAllRole = async function () {
  return await axios
  .get(
    "/dianyeAutho/rest/CrudServlet/getJsonAllRoleAndAut"
  )
}

/**
 * @namespace getAllPower 获取所有权限
 */
let getAllPower = async function () {
  return await axios
  .get(
    "/dianyeAutho/rest/CrudServlet/getAllAuthoritys"
  )
}

/**
 * @namespace addRole 添加角色
 * @param {添加角色的信息} body {"roleName":"hello","roleDescription":"nihao"}
 */
let addRole = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/addRole",body
  )
}

/**
 * @namespace updateRole 修改单个角色信息
 * @param {修改后的角色信息} body {"roleId":4,"roleName":"hello","roleDescription":"nihao"}
 */
let updateRole = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/updateRole",body
  )
}

/**
 * @namespace getRoleOfPower 获取某个角色对应的权限
 * @param {某个角色的id} body {"role_id":1}
 */
let getRoleOfPower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/getOneRoleAndAut",body
  )
}

/**
 * @namespace setPower  为角色赋予权限
 * @param {待赋予权限的角色id及要赋予的权限} body {"role_id":5,"authos":"[1,2]"}
 */
let setPower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/setRoleAuthos",body
  )
}

/**
 * @namespace updateRoleOfPrower 为某个角色修改权限
 * @param {待修改权限的角色id以及修改权限后的id} body {"role_id":5,"authos":"[1,3]"} 
 */
let updateRoleOfPrower = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/updateRoleAuthos",body
  )
}

/**
 * @namespace delRole  删除角色
 * @param {待删除角色信息} body {"role_id":5}
 */
let delRole = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/delRoleById",body
  )
}

let requestRole = {
  getAllRole,
  addRole,
  updateRole,
  getRoleOfPower,
  setPower,
  updateRoleOfPrower,
  delRole,
  getAllPower
}
export default requestRole;