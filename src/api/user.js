import axios from '../control/filter/http.js'

/**
 * @namespace getUser 获取用户及其角色
 * @author he
 * create in 2019-12-15
 */
let getUser = async function () {
  return await axios
  .get(
    "/dianyeAutho/rest/CrudServlet/getJsonAllUserAndRole"
  )
}

/**
 * @namespace addUser 新增用户
 * @param {新增用户信息} body {"username":"zhao","password":"123456","phone":"456789","email":"456@","name":"yan"}
 */
let addUser = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/addUser",body
  )
}

/**
 * @namespace delUser 删除单个用户
 * @param {要删除的用户id} body {"user_id":88}
 */
let delUser = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/delUserById",body
  )
}

/**
 * @namespace updateUser 修个单个用户信息
 * @param {修改后的用户信息} body {"id":88,"username":"a","password":"123456","phone":"456789","email":"456@","name":"yan"}
 */
let updateUser = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/updateUser",body
  )
}

/**
 * @namespace getRole 获取所有角色
 */
let getRole = async function () {
  return await axios
  .get(
    "/dianyeAutho/rest/CrudServlet/getAllRoles"
  )
}

/**
 * @namespace addRolesToUser
 * @param {需要添加角色的用户id跟角色id} body {"user_id":60,"roles":"[2,3]"}
 */
let addRolesToUser = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/setUserRoles",body
  )
}

/**
 * @namespace updateRoleToUser
 * @param {需要添加角色的用户id跟角色id} body {"user_id":60,"roles":"[3]"}
 */
let updateRoleToUser = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/updateUserRoles",body
  )
}

/**
 * @namespace findUserRoleInfo
 * @param {需要添加角色的用户id跟角色id} body {"user_id":30}
 */
let findUserRoleInfo = async function (body) {
  return await axios
  .post(
    "/dianyeAutho/rest/CrudServlet/getJSonOneUserAndRole?token",body
  )
}

let requestUser = {
  getUser,
  addUser,
  delUser,
  updateUser,
  getRole,
  addRolesToUser,
  updateRoleToUser,
  findUserRoleInfo
}
export default requestUser;