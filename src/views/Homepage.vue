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
        <el-menu-item class="dock-right" index="4" @click="redirect('https://www.scrumalliance.org/')">Scrum Alliance
        </el-menu-item>
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
                  <div id="logo">
                    <img src="@/assets/imgs/RSG_logo_2021_Taipei.png"/>
                  </div>
                </div>
                <img class="item__image" src="@/assets/imgs/banner_210510.jpg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>
                    {{
                      $t('The first-ever Regional Scrum Gathering in Taiwan will be hosted by Agile Community Taiwan (ACT) and Taiwan Agile Tribe (TAT).')
                    }}</h3>
                  <div>{{ $t('We sincerely invite you to join this event.') }}</div>
                  <div>{{ $t('See you in Taipei in November 2021.') }}</div>
                  <div>（{{ $t('11/4-5 Virtual Events') }}）</div>
                  <div>（{{ $t('11/6 Physical Event') }}）</div>
                </div>
                <img class="item__image" src="@/assets/imgs/banner_210510.jpg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div v-if='lang=="en"' class="item__content">
                  <h3>Scrum--The Future of Work</h3>
                  <div>Together, We Are Transforming the World of Work.</div>
                  <br/>
                  <div>Back to Basics, Change the Mode and Method of Work</div>
                  <div>（Back to the Original!）</div>
                  <br/>
                  <div>Connecting to the source of <b>Scrum Alliance</b></div>
                  <div>（Connect to the Source!）</div>
                  <br/>
                  <div>Implementing <b>Scrum!</b> Embracing <b>Scrum</b>, and let <b>Scrum</b> be <b>the Future of
                    Work。</b></div>
                  <div>（Practice and Live in Scrum!）</div>
                </div>
                <div v-else class="item__content">
                  <h3>Scrum--The Future of Work</h3>
                  <div>Together, We Are Transforming the World of Work.</div>
                  <br/>
                  <div>回歸初心，改變工作的模式與方法</div>
                  <div>（Back to the Original!）</div>
                  <br/>
                  <div>追本溯源，連結<b>Scrum Alliance</b>源頭</div>
                  <div>（Connect to the Source!）</div>
                  <br/>
                  <div>實踐<b>Scrum!</b> 體現<b>Scrum!</b> 讓<b>Scrum</b>成為<b>The Future of Work。</b></div>
                  <div>（Practice and Live in Scrum!）</div>
                </div>
                <img class="item__image" src="@/assets/imgs/banner_210510.jpg"/>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item">
                <div class="item__content">
                  <h3>{{ $t('2021, Let’s') }}</h3>
                  <h3>Be Agile! Run Scrum!</h3>
                </div>
                <img class="item__image" src="@/assets/imgs/banner_210510.jpg"/>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-row>
      <el-row class="block-container">
        <el-col v-if="lang=='en'" :offset="2" :span="20" class='about_the_event_block'>
          <h2>The Beginning and Sustainability</h2>
          20 years ago--2001 Scrum Alliance was founded to promote the Agile movement.
          <br/>
          10 years ago --- 2011 Scrum was gradually introduced to Taiwan to change the way we work.
          <br/>
          This year--2021, the 20th anniversary of Scrum Alliance, Taiwan is going to welcome the First-Ever Regional
          Scrum Gathering℠ TAIPEI 2021 in Taipei.
          <br/><br/>
          Regional Scrum Gathering℠ TAIPEI is driven by a group of volunteers who are agile practitioners and
          beneficiaries. Our intention is simple and pure to help <span style="font-style:oblique; font-weight: bold;">change the long-standing rigid thinking, working
          pattern and work culture in Taiwan.</span>
          <br/>
          <span style="font-style:oblique;font-weight: bold;">This event will provide more opportunities to all agile partners for communicating, learning and improving.</span>
          <br/>
          <span style="font-style:oblique;font-weight: bold;">To provide individuals, companies and organizations that have not yet joined Agile with a deeper understanding of the benefits of Agile, to solve your dilemmas and change your work patterns.</span>
        </el-col>
        <el-col v-else :offset="2" :span="20" class='about_the_event_block'>
          <h2>開始與永續</h2>
          20年前—2001年Scrum Alliance 成立，是為了推動敏捷運動。
          <br/>
          10年前—2011年Scrum 漸漸的被引進台灣，是為了改變工作方法。
          <br/>
          今年—2021年 Scrum Alliance 成立的20週年，台灣即將迎來史上第一次Regional Scrum Gathering℠ TAIPEI 2021，在台北舉行。 <br/><br/>
          Regional Scrum Gathering℠ TAIPEI是由一群敏捷實踐者及受益者的志工們所共同推動，我們的起心動念很單純、也很純粹:
          <br/>
          <span style="font-style:oblique; font-weight: bold;">為的是，改變台灣長久以來僵化的工作思維、工作模式以及工作文化。</span>
          <br/>
          <span style="font-style:oblique;font-weight: bold;">為的是，提供所有敏捷實踐者及受益者有更多交流、吸取新知、自我的提升的機會。</span>
          <br/>
          <span style="font-style:oblique;font-weight: bold;">為的是，讓還沒加入敏捷的個人、企業及各個單位深入了解敏捷的好處，解決你我的困境、改變你我的工作模式。</span>
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="5" :span="18">
          <el-row>
            <el-col :offset="2" :span="8">
              <el-card class="card" :body-style="{ padding: '10px' }">
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
              <el-card class="card" :body-style="{ padding: '10px' }">
                <img class="image"
                     src="@/assets/imgs/handshake.jpeg">
                <div style="padding: 14px;">
                  <span>{{
                      $t('The biggest agile event in Taiwan in 2021! Join RSG Taipei 2021 sponsorship program to enhance your reputation and increase your agile talent asset.')
                    }}</span>
                  <div class="bottom clearfix">
                    <el-button class="card-btn" type="primary">{{ $t('Sponsor') }}</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="3" :span="18">
          <h2>{{ $t('Title Sponsor') }}</h2>
          <img id="logo-sai" class='company-logo' src="@/assets/imgs/logo-sai.png"
               @click="redirect('https://www.scrumalliance.org/')"/>
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :offset="3" :span="21">
        </el-col>
      </el-row>
      <el-row id="footer">
        <el-col :offset="1" :span="8">
          Contact US:
          <font-awesome-icon :icon="['fas', 'envelope']"/>
          rsgtpe@outlook.com
          <div>
            <font-awesome-icon :icon="['fab', 'facebook']" class="shortcut-btn"
                               @click="redirect('https://www.facebook.com/rsgtaipei2021')"/>
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

  & h2 {
    text-align: center;
    font-size: 36px;
  }
}

.about_the_event_block {
  text-align: center;
  font-size: 18px;
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

#logo {
  padding: 30px;
  background: rgba(220, 220, 220, 0.7);

  img {
    width: 250px;
    height: auto;
  }
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

.card {
  height: 35vw;

  img {
    width: 320px;
    height: 211px;
  }
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
  background: rgba(64, 64, 64, 0.7);
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
