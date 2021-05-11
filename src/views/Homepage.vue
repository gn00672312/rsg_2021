<template>
  <el-container id="main">
    <el-header id="header">
      <el-menu :default-active="activeIndex" class="el-menu rsg-theme" mode="horizontal">
        <el-menu-item class="dock-right" index="7">
          <button v-if="lang=='tw'" @click="$i18n.locale='en'">English</button>
          <button v-else @click="$i18n.locale='tw'">中文</button>
        </el-menu-item>
        <el-menu-item class="dock-right" index="6">{{ $t('Tickets') }}</el-menu-item>
        <el-menu-item class="dock-right" index="5">{{ $t('Sponsors') }}</el-menu-item>
        <el-menu-item class="dock-right" index="4" @click="redirect('https://www.scrumalliance.org/')">Scrum Alliance</el-menu-item>
        <el-menu-item class="dock-right" index="3">{{ $t('Speakers') }}</el-menu-item>
        <el-menu-item class="dock-right" index="2">{{ $t('Schedule') }}</el-menu-item>
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
                <img class="item__image" src="@/assets/imgs/banner_210510.jpg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>2021，我們一起</h3>
                  <h3>Be Agile! Run Scrum!</h3>
                </div>
                <img class="item__image" height="100%" src="@/assets/imgs/banner.jpeg"/>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="5" :span="18">
          <el-row>
            <el-col :offset="2" :span="8">
              <el-card :body-style="{ padding: '10px' }">
                <img class="image"
                     src="@/assets/imgs/callforpaper_210510.jpg">
                <div style="padding: 14px;">
                  <div>{{ $t('Submission') }}:
                    <br>
                    {{
                      $t('The event will be held from November 4 to 6, including two-day online sessions and one-day offline activity.')
                    }}
                    <br>
                    {{
                      $t('If you would like to speak at the event, please submit your proposed session information through the link below.')
                    }}
                  </div>
                  <div class="bottom clearfix">
                    <span class="time">{{ $t('Submission closes on 30 June, 2021.') }}</span>
                    <div style="padding-top: 15px;">
                      <el-button class="card-btn" type="primary">{{ $t('Submission') }}</el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :offset="2" :span="8">
              <el-card :body-style="{ padding: '10px' }">
                <img class="image"
                     src="@/assets/imgs/handshake.jpeg">
                <div style="padding: 14px;">
                  <span>2021年全台最大敏捷盛會~等你來加入!!!
加入RSG Taipei 2021贊助商計畫，
幫助您的企業獲得曝光，同時招攬更多人才</span>
                  <div class="bottom clearfix">
                    <el-button class="card-btn" type="primary">參與贊助</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="3" :span="18">
          <h2 style="text-align: center; font-size: 36px;">冠名贊助</h2>
          <img id="logo-sai" class='company-logo' src="@/assets/imgs/logo-sai.png" @click="redirect('https://www.scrumalliance.org/')"/>
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="3" :span="21">
        </el-col>
      </el-row>
      <el-row id="footer">
        <el-col :offset="1" :span="8">
          Contact US: <font-awesome-icon :icon="['fas', 'envelope']" />   rsgtpe@outlook.com
          <div>
          <font-awesome-icon :icon="['fab', 'facebook']" class="shortcut-btn" @click="redirect('https://www.facebook.com/rsgtaipei2021')"/>
          </div>
        </el-col>
        <el-col :offset="1" :span="8" style="text-align:center">
          © 2021 Agile Community Taiwan / Taiwan Agile Tribe
        </el-col>
      </el-row>
    </el-main>
    <el-backtop target="#main .container"></el-backtop>
  </el-container>
</template>

<script>
import {i18n, locale_config} from '@/lang'

export default {
  name: 'Main',

  components: {},

  data() {
    return {
      activeIndex: '1',
      currentDate: new Date()
    }
  },

  computed: {
    carousel_height() {
      let hh = window.innerHeight
      let nav_height = 60
      let buffer = 240
      return (hh - nav_height - buffer) + 'px'
    },
    lang() {
      return this.$i18n.locale
    }
  },

  watch: {
    lang() {
      let message = locale_config[lang]
      i18n.setLocaleMessage(lang, message)
      this.$i18n.locale = lang
    }
  },

  methods: {
    redirect(url) {
      window.location.href = url
    },
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
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
}

.item:before {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
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
  opacity: 0.8;
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
  display: inline-block;
  vertical-align: middle;
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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.card-btn {
  float: right;
  position: relative;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.company-logo {
  cursor: pointer;
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
  padding: 40px 30px;
}

.shortcut-btn {
  cursor: pointer;
  font-size: 28px;
  margin-top: 10px;

  &:hover {
    color: #409eff;
  }
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
