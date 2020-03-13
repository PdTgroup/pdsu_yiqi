<template>
  <div class="index-home">
    <div class="page-container">
      <h1>欢迎使用后台管理系统</h1>
      <p>登录次数：18</p>
      <p>上次登录IP：222.35.131.79.1 上次登录时间：2019-6-14 11:19:55</p>
      <!-- <el-row>
        <el-col :span="6" v-for="(item, i) in systemData" :key="i" align="center">
          <el-card :body-style="{ padding: '0px' }" style="background: #111739;border: none;">
            <div style="padding: 10px 0;">
              <a :href="item.target" class="operation-name">
                <i :class="item.icon" style="font-size: 4rem"></i>
                <p>{{ item.name }}</p>
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>-->
      <el-timeline> 
        <h3>待操作:</h3>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
      <el-timeline> 
        <h3>未来计划操作:</h3>
        <el-timeline-item
          v-for="(activity, index) in activities2"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
      <el-timeline>
        <h3>历史操作:</h3>
        <el-timeline-item
          v-for="(activity, index) in activities1"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
      <el-table :data="tableData">
        <el-table-column label="服务器信息">
          <el-table-column prop="name" label="类别" width="400"></el-table-column>
          <el-table-column prop="data" label="参数"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <footer style="text-align: center;font-size: 14px;">
      <div>
        <p class="thanks-info">
          感谢Vue、Echarts、Element-ui、Vue-Route等技术支持
        </p>
        <p  class="thanks-info">Copyright &copy;2015-2017 H-ui.admin v3.1 All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "index-home",
  data() {
    return {
      systemData: [
        {
          name: "数据展示",
          icon: "el-icon-monitor",
          target: "/whole"
        },
        {
          name: "用户管理",
          icon: "el-icon-user",
          target: "/user"
        },
        {
          name: "角色管理",
          icon: "el-icon-s-claim",
          target: "/role"
        },
        {
          name: "权限管理",
          icon: "el-icon-s-promotion",
          target: "/jurisdiction"
        }
      ],
      tableData: [
        {
          name: "服务器端口",
          data: "80"
        },
        {
          data: "Chinese (People's Republic of China)",
          name: "服务器的语言种类"
        },
        {
          data: "2019-6-14 12:06:23",
          name: "服务器当前时间"
        },
        {
          data: "7210分钟",
          name: "服务器上次启动到现在已运行"
        },
        {
          data: "x86 Family 6 Model 42 Stepping 1, GenuineIntel",
          name: "CPU 类型"
        },
        {
          data: "3.29M",
          name: "当前程序占用内存"
        },
        {
          data: "52480M",
          name: "虚拟内存"
        },
        {
          data: "8",
          name: "当前Session数量"
        }
      ],
      activities: [
        {
          content: "导入2019年12月份表格",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "删除2013年1月份表格",
          timestamp: "2018-04-03 20:46",
          type: "danger"
        },
        {
          content: "添加新权限",
          timestamp: "2018-04-03 20:46",
          size: "large",
          color: "#0bbd87"
        },
        {
          content: "添加新角色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
          size: "large"
        }
      ],
      activities1: [
        {
          content: "删除2013年1月份表格",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "导入2020年1月份表格",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
          size: "large"
        },
        {
          content: "删除离职职员的账户",
          type: "danger",
          timestamp: "2018-04-03 20:46"
        },
        {
          content: "添加新入职职员的账户",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
          size: "large"
        }
      ],
      activities2: [
        {
          content: "修改权限",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "新增3个管理员角色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
          size: "large",
        },
        {
          content: "待定",
          timestamp: "2018-04-03 20:46",
          type: "warning"
        },
        {
          content: "待定",
          timestamp: "2018-04-03 20:46",
          type: "warning"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.index-home::-webkit-scrollbar {
  width: 4px;
}
.index-home::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.index-home::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.index-home {
  width: 100%;
  height: 93%;
  overflow-y: auto;
  .el-table_1_column_1 {
    border-bottom: 1px solid #585e80;
  }
  .operation-name {
    color: white;
  }
  .operation-name:hover {
    color: #409eff;
  }
  .el-timeline-item__content {
    color: #fff;
    font-size: 1.1em;
  }

  .el-table td,
  .el-table th {
    text-align: left;
  }

  .el-timeline {
    float: left;
  }
  .thanks-info {
    font-size: 13px;
  }
}
</style>