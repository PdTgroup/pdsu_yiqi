<template>
  <div class="power">
    <el-row>
      <h1>权限管理</h1>
    </el-row>
    <el-row class="power-process">
      <el-button type="danger" icon="el-icon-delete" @click="batchDel">批量删除</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="updateDialog = true">添加权限</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="powerTable"
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
        <el-table-column prop="authorityName" label="权限名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="authorityDescribe" label="权限描述" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <i class="el-icon-edit icon-control" @click="editPower(scope)"></i>
            <i class="el-icon-delete icon-control" @click="delPower(scope.row.authorityId)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog
      title="添加权限"
      :visible.sync="updateDialog"
      width="30%"
      v-dialogDrag
      :before-close="cancel"
    >
      <el-form ref="editMsg" label-width="100px" class="demo-ruleForm">
        <el-form-item label="权限名" prop="authorityName">
          <el-input v-model="editMsg.authorityName"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="authorityDescribe">
          <el-input v-model="editMsg.authorityDescribe"></el-input>
        </el-form-item>
        <el-row style="text-align: center;">
          <el-button type="success" size="small" @click="addChecked">确定</el-button>
          <el-button type="primary" size="small" @click="cancel">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>
import requestPower from "../../../api/power.js";
import manageConfirm from "../../../utils/confirm.js";
export default {
  data() {
    return {
      powerTable: [],
      editMsg: {
        authorityDescribe: "",
        authorityId: "",
        authorityName: "",
      },
      multipleSelection: "",
      updateDialog: false,
    };
  },
  created() {
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
        this.getAllPower();
        this.$message.success("操作成功!");
      } else {
        this.$message.error("操作失败!");
      }
    },
    /**
     * @namespace 将editMsg对象内的所有数据清空
     */
    initEditMsg() {
      this.editMsg.authorityDescribe = "";
      this.editMsg.authorityId = "";
      this.editMsg.authorityName = "";
    },
    
    /**
     * @namespace getAllPower  从后台请求所有权限信息
     */
    getAllPower() {
      requestPower.getPower().then(data => {
        this.powerTable = data.data.ALLAuthority;
        if(data.data.message != "Success"){
          this.$message.error("查询失败,刷新试试");
        }
      });
    },
    /**
     * @namespace addPower 向后台发起请求，添加权限
     * @param {权限信息} powerInfo
     */
    addPower(powerInfo) {
      requestPower.addPower(powerInfo).then(data => {
        this.requestMsg(data.data.message, "Success");
        this.initEditMsg();
      });
    },
    /**
     * @namespace requestDelPower 通过权限 id 向后台发起请求，删除权限
     * @param {权限id} id
     */
    requestDelPower(id) {
      requestPower.delPower({ authorityid: id }).then(data => {
        this.requestMsg(data.data.message, "Success");
      });
    },
    /**
     * @namespace updatePower 更新权限信息
     * @param {powerInfo} 权限新信息
     */
    updatePower(powerInfo) {
      requestPower.updatePower(powerInfo).then(data => {
        this.requestMsg(data.data.message, "Success");
        this.initEditMsg();
      });
    },

    /**
     * @namespace 弹出dialog 取消操作
     */
    cancel() {
      this.initEditMsg();
      this.updateDialog = false;
    },

    /**
     * @namespace editPower 修改权限信息
     * @param {当前需要修改的权限信息} scope
     */
    editPower(scope) {
      this.editMsg.authorityDescribe = scope.row.authorityDescribe;
      this.editMsg.authorityId = scope.row.authorityId;
      this.editMsg.authorityName = scope.row.authorityName;
      this.updateDialog = true;
    },
    /**
     * @namespace addChecked  弹出dialog,确认添加权限
     */
    addChecked() {
      let power_flag = false;
      for (let i = 0; i < this.powerTable.length; i++) {
        if (this.powerTable[i].authorityName == this.editMsg.authorityName) {
          this.editMsg.authorityId = this.powerTable[i].authorityId;
          this.updatePower(this.editMsg);
          power_flag = true;
          break;
        }
      }
      if (!power_flag) {
        this.addPower(this.editMsg);
      }
      this.updateDialog = false;
    },

    /**
     * @namespace delPower 弹出dialog,确认是否删除权限
     * @param {权限id} id
     */
    delPower(id) {
      manageConfirm
        .confirm(this, "此操作将永久删除该权限, 是否继续?")
        .then(() => {
          this.requestDelPower(id);
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
        .confirm(this, "此操作将永久删除这些权限, 是否继续?")
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
.power {
  .power-process {
    margin-bottom: 10px;
  }
}
</style>