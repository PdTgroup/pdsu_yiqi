<template>
    <div class="management">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="message">消息中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的信息</template>
                        <el-menu-item index="2-1">修改头像</el-menu-item>
                        <el-menu-item index="2-2">修改密码</el-menu-item>
                        <el-menu-item index="2-3">修改名称</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>

    export default {
        name: "management",
        components: {},
        data() {
            return {
                activeIndex: 'message',
            };
        },
        methods: {
            handleSelect(key) {
                this.$router.push({path:"/management/"+key})
            }
        }
    };
</script>

<style lang="scss">

</style>
