<template>
  <div class="port">
    <el-row>
      <h1>数据导入</h1>
    </el-row>
    <el-row type="flex" class="port-operation">
      <el-button type="danger" icon="el-icon-delete" @click="delBacch">批量删除</el-button>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" class="upload-demo">
        <el-button type="primary" icon="el-icon-upload">点击上传</el-button>
      </el-upload>
    </el-row>
    <el-row>
      <el-table :data="files" style="width: 100%;" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="cycle" label="文件季度" width="120"></el-table-column>
        <el-table-column prop="describe" label="描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="user" label="执行人" show-overflow-tooltip></el-table-column>
        <el-table-column label="日期" show-overflow-tooltip>
          <template>{{ time | filterDate }}</template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <i
              class="el-icon-delete icon-control"
              @click="delOperation(scope.$index,scope.row.name)"
            ></i>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog title="提示" :visible.sync="delDialog" width="30%" v-dialogDrag>
      <span>删除表格需谨慎，确认要删除这个表格么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialog=false">取 消</el-button>
        <el-button type="primary" @click="delTable">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "port",
  data() {
    return {
      files: [
        {
          cycle: "1703",
          describe: "17年3月份河南省电网数据",
          time: Date.now(),
          user: "zs"
        },
        {
          cycle: "1803",
          describe: "18年3月份河南省电网数据",
          time: Date.now(),
          user: "admin"
        }
      ],
      delDialog: false,
      operationIndex: 0,
      operationName: ""
    };
  },
  methods: {
    delBacch() {},
    delOperation(index, name) {
      this.operationIndex = index;
      this.operationName = name;
      this.delDialog = true;
    },
    delTable() {
      this.files.splice(this.operationIndex, 1);
      this.delDialog = false;
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
</style>