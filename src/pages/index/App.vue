<template>
  <div id="app">
    <!-- 页面容器，用于挂载登录成功/失败的页面 -->
    <transition name="toggle">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  color: white;
  user-select: none;
  position: relative;
  overflow-x: hidden;
  background: #111739;
  // i {
  //   color: #fff !important;
  // }
  // i:hover {
  //   color: #409eff !important;
  // }
  .el-icon-close,
  .el-icon-arrow-up {
    color: #9a9da3;
  }
  // 路由过渡效果
  .toggle {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #111739;
  }
  .toggle-enter,
  .toggle-leave-to {
    left: 0;
    top: 0;
    right: 0;
    position: absolute;
    transform: translateX(-500px) translateY(-500px) rotate(0deg) scale(0.5);
    opacity: 1;
  }
  .toggle-enter-active {
    background-color: #111739;
    transition: all 0.6s ease;
  }
  .toggle-leave-active {
    transition: all 0.7s ease;
    background-color: #111739;
    transform: translateX(500px) translateY(500px) rotate(0deg) scale(1);
    z-index: 100;
  }
}
</style>