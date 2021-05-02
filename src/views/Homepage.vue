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
          <div>
            <font-awesome-icon :icon="['far', 'calendar-alt']"/>
            4-6 Nov, 2021
          </div>
          <img src="@/assets/imgs/RSG_logo_2021_Taipei.png" width="300px"/>
        </div>
      </el-row>
      <el-row>
        <el-col :offset="3" :span="18">
          <img id="logo-sai" src="@/assets/imgs/logo-sai.png"/>
          <div>Founded in 2001, Scrum Alliance® is the largest, most established and influential professional member- ship and certification organization in the Agile community. Scrum Alliance is a nonprofit association that has certified more than 750,000 practitioners worldwide. Its vision is to help “Transform the World of Work” with a mission to guide and inspire individuals, leaders, and organizations with practices, princi- ples, and values that create workplaces that are joyful, prosperous, and sustainable. For more informa- tion, please visit scrumalliance.org.</div>
          <div>Through Scrum Alliance, you have access to a world of learning and resources that will help you succeed with Scrum in the software development industry and beyond.</div>
          <h3>Advance Yourself</h3>
          <div>Scrum Alliance’s progressive certification course model allows you to choose an educational track that improves your core Scrum knowledge, builds skill sets, and provides the necessary tools to evolve as an Agile practitioner. Choose your path. Are you ready to move your career to its next sprint? Sign up for an offering from our alliance of profes- sionally-assessed and specialized trainers around the globe.</div>
        </el-col>
      </el-row>
      <el-row id="footer">
        <el-col :offset="8" :span="8" style="text-align:center">
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
  font-size: 14px;
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

#logo-sai {
  display: block;
  margin-left: auto;
  margin-right: auto;
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
