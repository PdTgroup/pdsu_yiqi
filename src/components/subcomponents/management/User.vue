<template>
    <div class="port">
        <el-row>
            <h1>用户管理</h1>
        </el-row>
        <el-row>
            <el-col :span="4" style="margin: 0 0 30px 0">
                <el-input
                        placeholder="请输入内容"
                        v-model="content"
                        clearable
                        @keyup.enter.native="searchContent"
                >
                    <i class="el-icon-search el-input__icon" slot="suffix" @click="searchContent"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-table :data="files" style="width: 100%;" border>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="id" width="120"></el-table-column>
                <el-table-column prop="num" label="学号" width="120"></el-table-column>
                <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
                <el-table-column prop="role" label="角色" width="120"></el-table-column>
                <el-table-column prop="employer" label="工作单位" show-overflow-tooltip></el-table-column>
                <el-table-column prop="phone" label="联系方式" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="rowNode">
                        <i
                                class="el-icon-setting icon-control"
                                @click="updateDialog(rowNode)"
                        ></i>
                        <i
                                class="el-icon-delete icon-control"
                                @click="delOperation(rowNode)"
                        ></i>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row style="margin: 40px 0 0 0 ">
            <el-col :offset="8">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </el-col>
        </el-row>
        <el-dialog title="提示" :visible.sync="delDialog" width="30%" v-dialogDrag>
            <span>删除表格需谨慎，确认要删除这个表格么？</span>
            <span slot="footer" class="dialog-footer">
        <el-button @click="delDialog=false">取 消</el-button>
        <el-button type="primary" @click="delTable">确 定</el-button>
      </span>
        </el-dialog>
        <el-dialog
                title="用户信息更新"
                :visible.sync="centerDialogVisible"
                width="70%"
                center>
            <el-row class="up-info">
                <el-col hidden>
                    <el-input v-model="updateContent.id"></el-input>
                </el-col>
                <el-col :span="6" >
                    <span>学号:</span><el-input v-model="updateContent.num" readonly></el-input>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6" >
                   <span>用户名：</span> <el-input v-model="updateContent.userName"></el-input>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6" >
                    <span>密码：</span> <el-input v-model="updateContent.password"></el-input>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6" >
                    <span>工作单位：</span><el-input v-model="updateContent.employer"></el-input>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6">
                    <span>联系方式：</span><el-input v-model="updateContent.phone"></el-input>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6" >
                    <span>角色：</span>
                    <el-select v-model="updateContent.role" multiple >
                        <el-option
                                v-for="item in roleList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row class="up-info">
                <el-col :span="6">
                  <span>权限：</span>
                  <el-cascader
                          placeholder="添加权限"
                          :options="permissions"
                          :props="{ multiple: true, checkStrictly: true}"
                          filterable></el-cascader>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    import user from "../../../json/user";
    import userList from "../../../json/userList";
    import permissions from "../../../json/permissions";
    import roleList from "../../../json/roleList";
    export default {
        name: "port",
        data() {
            return {
                centerDialogVisible: false,
                content: "",// 搜索框内容
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                updateContent: user,
                files: userList,
                delDialog: false,
                operationIndex: 0,
                operationName: "",
                permissions:permissions,
                roleList:roleList,
            };
        },
        methods: {
            delBacch() {
            },
            delOperation(rowNode) {
                console.log(rowNode)
            },
            delTable() {
                this.files.splice(this.operationIndex, 1);
                this.delDialog = false;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            searchContent() {
                let input_val = this.content;
                if (input_val.trim() === "") {
                    this.$notify({
                        title: "错误",
                        message: "啊哦，你是不是忘记输入查询内容啦？",
                        type: "error"
                    });
                } else {
                    this.$notify({
                        title: "成功",
                        message: "您要查询的内容是--" + input_val + "--",
                        type: "success"
                    });
                }
            },
            updateDialog(rowNode) {
                this.centerDialogVisible = !this.centerDialogVisible;
                for (let i in this.updateContent) {
                    this.updateContent[i] = rowNode.row[i];
                }
                console.log(this.updateContent)
            }
        }
    };
</script>
<style lang="scss">
    .port {
        width: 100%;
        height: 100%;

        .port-operation {
            margin-bottom: 10px;
        }

        .upload-demo {
            margin-left: 10px;
        }

        .el-upload-list {
            float: right;
        }

        .el-upload-list__item:hover {
            background-color: #111739;
        }

        .el-upload-list__item-name {
            color: #fff;
        }
    }

    h1 {
        line-height: 45px;
    }

    .up-info {
        margin: 20px 5px 5px 20px;
    }
</style>