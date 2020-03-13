<template>
  <div class="role">
    <el-row>
      <h1>角色管理</h1>
    </el-row>
    <el-row class="role-process">
      <el-button type="danger" icon="el-icon-delete" @click="batchDel">批量删除</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="updateDialog = true">添加角色</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="roleTable"
        style="width: 100%;"
        border
        ref="multipleSelection"
        max-height="500"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="roleName" label="角色名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="roleDescription" label="角色描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="authoString" label="角色对应权限名" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <i class="el-icon-edit-outline icon-control" @click="addPower(scope)"></i>
            <i class="el-icon-edit icon-control" @click="editRole(scope)"></i>
            <i class="el-icon-delete icon-control" @click="requestDelOneRole(scope.row.roleId)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog
      title="添加角色"
      :visible.sync="updateDialog"
      width="30%"
      v-dialogDrag
      :before-close="cancel"
    >
      <el-form ref="editMsg" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名" prop="roleName">
          <el-input v-model="editMsg.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDescription">
          <el-input v-model="editMsg.roleDescription"></el-input>
        </el-form-item>
        <el-row style="text-align: center;">
          <el-button type="success" size="small" @click="addChecked">确定</el-button>
          <el-button type="primary" size="small" @click="cancel">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog
      title="添加权限"
      :visible.sync="addDialog"
      width="30%"
      v-dialogDrag
      :before-close="cancel"
    >
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名" prop="roleName">
          <el-input v-model="powerMsg.roleName"></el-input>
        </el-form-item>
        <el-form-item label="赋予权限">
          <el-select v-model="powerMsg.authoString" multiple placeholder="请选择角色">
            <el-option
              v-for="(item,i) in allPowerTable"
              :label="item.authorityName"
              :value="item.authorityId"
              :key="i"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-row style="text-align: center;">
          <el-button type="success" size="small" @click="checkPower">确定</el-button>
          <el-button type="primary" size="small" @click="cancel">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import requestRole from "../../../api/role.js";
import manageConfirm from "../../../utils/confirm.js";
export default {
  data() {
    return {
      roleTable: [],
      allPowerTable: [],
      editMsg: {
        roleName: "",
        roleDescription: "",
        authoString: "",
        roleId: ""
      },
      powerMsg: {
        roleName: "",
        roleDescription: "",
        authoString: "",
        roleId: ""
      },
      multipleSelection: "",
      updateDialog: false,
      addDialog: false,
      upadateFlag: false
    };
  },
  created() {
    this.getAllRole();
    this.getAllPower();
  },
  methods: {
    /**
     * @namespace requestMsg
     * @param {后台返回的数据} data
     * @param {操作成功时返回的数据} responseData
     */
    requestMsg(data, responseData) {
      if (data === responseData) {
        this.getAllRole();
        this.$message.success("操作成功!");
      } else {
        this.$message.error("操作失败!");
      }
    },
    /**
     * @namespace 将editMsg对象内的所有数据清空
     */
    initEditMsg() {
      this.editMsg.roleName = "";
      this.editMsg.roleDescription = "";
      this.editMsg.authoString = "";
      this.editMsg.roleId = "";
    },
    /**
     * @namespace 将powerMsg对象内的所有数据清空
     */
    initpowerMsg() {
      this.powerMsg.roleName = "";
      this.powerMsg.roleDescription = "";
      this.powerMsg.authoString = "";
      this.powerMsg.roleId = "";
    },

    /**
     * @namespace getAllRole  从后台请求所有角色信息
     */
    getAllRole() {
      requestRole.getAllRole().then(data => {
        if (data.data.message != "Success") {
          this.$message.error("查询失败！刷新试试");
        }
        this.roleTable = data.data.AllRolAndAutho;
      });
    },
    /**
     * @namespace getAllPower 获取所有权限
     */
    getAllPower() {
      requestRole.getAllPower().then(data => {
        this.allPowerTable = data.data.ALLAuthority;
      });
    },
    /**
     * @namespace addRole 向后台发起请求，添加角色
     * @param {角色信息} roleInfo
     */
    addRole(roleInfo) {
      requestRole.addRole(roleInfo).then(data => {
        this.requestMsg(data.data.message, "Success");
        this.initEditMsg();
      });
    },
    /**
     * @namespace requestDelRole 通过角色 id 向后台发起请求，删除角色
     * @param {角色id} roleId
     */
    requestDelRole(roleId) {
      requestRole.delRole({ roleid: roleId }).then(data => {
        this.requestMsg(data.data.message, "Success");
      });
    },
    /**
     * @namespace updateRole 更新角色信息
     * @param {roleInfo} 角色新信息
     */
    updateRole(roleInfo) {
      requestRole.updateRole(roleInfo).then(data => {
        this.requestMsg(data.data.message, "Success");
        this.initEditMsg();
      });
    },
    /**
     * @namespace requestAddPower 给角色设置权限
     * @param {roleInfo} 角色信息
     */
    requestAddPower(roleInfo) {
      requestRole
        .setPower({ roleid: roleInfo.roleId, authos: roleInfo.authoString })
        .then(data => {
          this.requestMsg(data.data.message, "Success");
          this.initpowerMsg();
        });
    },
    /**
     * @namespace requestUpdateRole 更新角色的权限
     * @param {roleInfo} 新角色信息
     */
    requestUpdateRole(roleInfo) {
      requestRole
        .updateRoleOfPrower({
          roleid: roleInfo.roleId,
          authos: roleInfo.authoString
        })
        .then(data => {
          this.requestMsg(data.data.message, "Success");
          this.initpowerMsg();
        });
    },
    /**
     * @namespace requestRoleOfRole 获取角色对应角色
     * @param {roleId} 角色id
     */
    requestRoleOfRole(roleId) {
      requestRole.getRoleOfPower({ roleid: roleId }).then(data => {
        this.powerMsg.roleDescription =
          data.data.OneRolAndAutho.roleDescription;
        this.powerMsg.roleName = data.data.OneRolAndAutho.roleName;
        this.powerMsg.roleId = data.data.OneRolAndAutho.roleId;
        this.powerMsg.authoString = data.data.OneRolAndAutho.authList;
        if (data.data.OneRolAndAutho.authList != undefined)
          this.upadateFlag = true;
      });
    },

    /**
     * @namespace 弹出dialog 取消操作
     */
    cancel() {
      this.initpowerMsg();
      this.initEditMsg();
      this.updateDialog = false;
      this.addDialog = false;
    },
    /**
     * @namespace addPower 给角色添加角色
     * @param {scope} 当前要添加角色的角色信息
     */
    addPower(scope) {
      this.powerMsg.roleId = scope.row.roleId;
      this.requestRoleOfRole(scope.row.roleId);
      this.addDialog = true;
    },
    /**
     * @namespace checkPower 确认给该角色添加/更改角色
     */
    checkPower() {
      if (this.upadateFlag) {
        this.requestUpdateRole(this.powerMsg);
      } else {
        this.requestAddPower(this.powerMsg);
      }
      this.editMsg.roleName = "";
      this.addDialog = false;
    },

    /**
     * @namespace editRole 修改角色信息
     * @param {当前需要修改的角色信息} scope
     */
    editRole(scope) {
      this.editMsg.authoString = scope.row.authoString;
      this.editMsg.roleDescription = scope.row.roleDescription;
      this.editMsg.roleId = scope.row.roleId;
      this.editMsg.roleName = scope.row.roleName;
      this.updateDialog = true;
    },
    /**
     * @namespace addChecked  弹出dialog,确认添加角色
     */
    addChecked() {
      let role_flag = false;
      for (let i = 0; i < this.roleTable.length; i++) {
        if (this.roleTable[i].roleName == this.editMsg.roleName) {
          this.editMsg.roleId = this.roleTable[i].roleId;
          this.updateRole(this.editMsg);
          role_flag = true;
          break;
        }
      }
      if (!role_flag) {
        this.addRole(this.editMsg);
      }
      this.updateDialog = false;
    },

    /**
     * @namespace requestDelOneRole 弹出dialog,确认是否删除角色
     * @param {角色id} id
     */
    requestDelOneRole(id) {
      manageConfirm
        .confirm(this, "此操作将永久删除该角色, 是否继续?")
        .then(() => {
          this.requestDelRole(id);
        })
        .catch(() => {
          this.$message("已取消删除");
        });
    },

    /**
     * @namespace batchDel 批量删除
     */
    batchDel() {
      manageConfirm
        .confirm(this, "此操作将永久删除这些角色, 是否继续?")
        .then(() => {
          this.$message.success("删除成功!");
        })
        .catch(() => {
          this.$message("已取消删除");
        });
    },
    /**
     * @namespace handleSelectionChange 多选/全选
     * @param {val} 选中的id
     */
    handleSelectionChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss">
.role {
  .role-process {
    margin-bottom: 10px;
  }
}
</style>