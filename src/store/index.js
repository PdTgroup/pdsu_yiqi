import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Vuex全局状态管理
 * @param tabList {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
  state: {
      tabList: [], // 标签页 数组
      activeIndex: '/home/pie', // 默认选中标签页
      // chartList: [
      //   {
      //     route: "/home/pie",
      //     name: "饼图"
      //   },
      //   {
      //     route: "/home/bar",
      //     name: "柱形图"
      //   },
      //   {
      //     route: "/home/line",
      //     name: "折线图"
      //   },
      //   {
      //     route: "/home/radar",
      //     name: "雷达图"
      //   }
      // ]
  },
  mutations: {
    // 添加tabs
    add_tabs (state, data) {
      this.state.tabList.push(data);
      // alert(data.route);
    },
    // 删除tabs
    delete_tabs (state, route) {
      let index = 0;
      let pd_this = this;
      for (let option of state.tabList) {
        if (option.route === route) {
          pd_this.state.activeIndex = option;
          break;
        }
        index++;
      }
      this.state.tabList.splice(index, 1);
    },
    // 设置当前激活的tab
    set_active_index (state, index) {
      this.state.activeIndex = index;
    },
    // 设置详情信息
    save_detail_info (state, info) {
      this.state.userInfo = info;
    }
  }
});

export default store;
