<template>
  <el-container id="main">
    <el-header id="header">
      <el-menu :default-active="activeIndex" class="el-menu rsg-theme" mode="horizontal">
        <el-menu-item class="dock-right" index="6">票務</el-menu-item>
        <el-menu-item class="dock-right" index="5">贊助夥伴</el-menu-item>
        <el-menu-item class="dock-right" index="4">Scrum Alliance</el-menu-item>
        <el-menu-item class="dock-right" index="3">講者介紹</el-menu-item>
        <el-menu-item class="dock-right" index="2">時程表</el-menu-item>
        <el-menu-item class="dock-right" index="1">Scrum Gathering Taipei 2021</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row style="position: relative;">
        <img class="banner-bg" src="@/assets/imgs/test-taipei.jpg"/>
        <div class="banner-content">
          <div><font-awesome-icon :icon="['far', 'calendar-alt']"/> 11-13 Nov, 2021</div>
          <img src="@/assets/imgs/RSG_logo_2021_Taipei.png"/>
        </div>
      </el-row>
      系統建置中...
      <el-row id="footer">
        <el-col :span="8" :offset="8" style="text-align:center">
          <img id='footer-logo' src="@/assets/imgs/RSG_logo_2021_Taipei.png"/>
        </el-col>
      </el-row>
    </el-main>
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

.el-header, .el-main, .el-container {
  padding: 0 !important;
}
#main {
  height: 100%;
}

.banner-bg {
  opacity: 0.6;
  width: 100%;
  height: auto;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
}

.el-menu--horizontal {
  background: rgb(46, 42, 46);

  & > .el-menu-item.dock-right {
    color: #fff;
    float: right;
  }
}

#footer {
  color: #fff;
  background: rgba(64, 64, 64, 0.7);
  font-size: 16px;
}

.rsg-theme {

}

#footer-logo {
  height: 300px;
}
</style>
