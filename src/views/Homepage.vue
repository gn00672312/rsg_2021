<template>
  <el-container id="main">
    <el-header id="header">
      <el-row>
        <el-col :span="24">
          <div id="banner">
          </div>
        </el-col>
      </el-row>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
        <el-menu-item class="dock-right" index="6">票務</el-menu-item>
        <el-menu-item class="dock-right" index="5">贊助夥伴</el-menu-item>
        <el-menu-item class="dock-right" index="4">Scrum Alliance</el-menu-item>
        <el-menu-item class="dock-right" index="3">講者介紹</el-menu-item>
        <el-menu-item class="dock-right" index="2">時程表</el-menu-item>
        <el-menu-item class="dock-right" index="1">Scrum Gathering Taipei 2021</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      系統建置中...
    </el-main>
    <el-footer id="footer">
      <el-row>
        <el-col :span="12">
          關於ACT台灣敏捷協會
        </el-col>
        <el-col :span="12">
          關於TAT台灣敏捷部落
        </el-col>
      </el-row>
    </el-footer>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </el-container>
</template>

<script>

export default {
  name: 'Main',

  components: {},

  data() {
    return {
      activeIndex: '1',

    }
  },

  methods: {},

  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";

#main {
  height: 100%;
}

.el-header, .el-footer{
  padding: 0;
}

#banner {
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/imgs/taipei.jpg');
}

.el-menu--horizontal {
  background: rgba(64, 64, 64, 0.7);

  & > .el-menu-item.dock-right {
    color: #fff;
    float: right;
  }
}

#footer {
  padding: 20px;
  color: #fff;
  background: rgba(64, 64, 64, 0.7);
  font-size: 16px;
}
</style>
