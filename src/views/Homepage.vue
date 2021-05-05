<template>
  <el-container id="main">
    <el-header id="header">
      <el-menu :default-active="activeIndex" class="el-menu rsg-theme" mode="horizontal">
        <el-menu-item class="dock-right" index="6">票務</el-menu-item>
        <el-menu-item class="dock-right" index="5">贊助夥伴</el-menu-item>
        <el-menu-item class="dock-right" index="4" @click="link_to_SAI">Scrum Alliance</el-menu-item>
        <el-menu-item class="dock-right" index="3">講者介紹</el-menu-item>
        <el-menu-item class="dock-right" index="2">時程表</el-menu-item>
        <el-menu-item class="dock-right" index="1">Scrum Gathering Taipei 2021</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="container">
      <el-row style="position: relative;">
        <div class="block">
          <el-carousel
            :height="carousel_height"
            :interval="5000"
            arrow="always"
            trigger="click"
          >
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>2021年 台灣將迎來史上第一次 Regional Scrum Gathering TAIPEI 2021 </h3>
                  <div>我們誠摯邀請您，和我們一同共襄盛舉。</div>
                  <div>2021 年11月 我們台北見!</div>
                  <div>（11/4-5 線上虛擬活動）</div>
                  <div>（11/6 線下實體活動）</div>
                </div>
                <img class="item__image" src="@/assets/imgs/test-taipei.jpg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>Scrum—The Future of Work</h3>
                  <div>Together, We Are Transforming the World of Work.</div>
                  <br/>
                  <div>回歸初心，改變工作的模式與方法</div>
                  <div>（Back to the Original!）</div>
                  <br/>
                  <div>追本溯源，連結<b>Scrum Alliance</b>源頭</div>
                  <div>（Connect to the Source!）</div>
                  <br/>
                  <div>實踐<b>Scrum!</b> 體現<b>Scrum!</b> 讓<b>Scrum</b> 成為<b>The Future of Work。</b></div>
                  <div>（Practice and Live in Scrum!）</div>
                </div>
                <img class="item__image" src="@/assets/imgs/banner.jpeg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>2021，我們一起</h3>
                  <h3>Be Agile! Run Scrum!</h3>
                </div>
                <img class="item__image" src="@/assets/imgs/banner.jpeg"/>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-row>

      <el-row class="block-container">
        <el-col :offset="3" :span="18">
          <img id="logo-sai" src="@/assets/imgs/logo-sai.png"/>
          <div>Founded in 2001, Scrum Alliance® is the largest, most established and influential professional member-
            ship and certification organization in the Agile community. Scrum Alliance is a nonprofit association that
            has certified more than 750,000 practitioners worldwide. Its vision is to help “Transform the World of Work”
            with a mission to guide and inspire individuals, leaders, and organizations with practices, princi- ples,
            and values that create workplaces that are joyful, prosperous, and sustainable. For more informa- tion,
            please visit scrumalliance.org.
          </div>
          <div>Through Scrum Alliance, you have access to a world of learning and resources that will help you succeed
            with Scrum in the software development industry and beyond.
          </div>
          <h3>Advance Yourself</h3>
          <div>Scrum Alliance’s progressive certification course model allows you to choose an educational track that
            improves your core Scrum knowledge, builds skill sets, and provides the necessary tools to evolve as an
            Agile practitioner. Choose your path. Are you ready to move your career to its next sprint? Sign up for an
            offering from our alliance of profes- sionally-assessed and specialized trainers around the globe.
          </div>
        </el-col>
      </el-row>
      <el-row id="footer">
        <el-col :offset="8" :span="8" style="text-align:center">
          <img id='footer-logo' src="@/assets/imgs/RSG_logo_2021_Taipei.png"/>
        </el-col>
      </el-row>
    </el-main>
    <el-backtop target="#main .container"></el-backtop>
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

  computed: {
    carousel_height() {
      let hh = window.innerHeight
      let nav_height = 60
      let buffer = 240
      return (hh - nav_height - buffer) + 'px'
    }
  },

  methods: {
    link_to_SAI() {
      window.location.href = "https://www.scrumalliance.org/"
    }
  },

  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";

html, body {
  height: 100%;
}

.el-header, .el-main, .el-container {
  padding: 0 !important;
}

#main {
  height: 100%;
  font-size: 14px;
}

.block-container {
  padding-top: 40px;
  padding-bottom: 40px;
}

.item {
  font-size: 18px;
}

.item__content {
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #409eff;
  opacity: 0.9;
  color: #fff;
  padding: 3px;

  background: linear-gradient(to right, #00B97E, #0094D5);

  & > h3 {
    font-size: 28px;
  }
}

.item__image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.banner-content {
  border: 1px #29a3a7 solid;
  position: absolute;
  top: 90%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 18px;
  background: #259cbd;
  color: white;

  background: -webkit-linear-gradient(left, #42b560, #259cbd);
  background: -o-linear-gradient(right, #42b560, #259cbd);
  background: -moz-linear-gradient(right, #42b560, #259cbd);
  background: linear-gradient(to right, #42b560, #259cbd);
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

.page-component__scroll {
  height: 500px;
}

.el-scrollbar__wrap {
  overflow: scroll;
  height: 100%;
}


#footer-logo {
  height: 300px;
}
</style>
