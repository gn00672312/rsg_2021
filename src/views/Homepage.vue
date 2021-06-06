<template>
  <el-container id="main">
    <el-header height="5rem">
      <b-navbar :spaced="true" class="header is-dark">
        <template #brand>
          <b-navbar-item :to="{ path: '/' }" tag="router-link">
            <img src="@/assets/imgs/RSG_logo_ol.png"/>
          </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item href="#">
            Scrum Gathering Taipei 2021
          </b-navbar-item>
          <b-navbar-item href="#">
            {{ $t('Schedule') }}
          </b-navbar-item>
          <b-navbar-item href="#">
            {{ $t('Speakers') }}
          </b-navbar-item>
          <b-navbar-item @click="redirect('https://www.scrumalliance.org/')">
            Scrum Alliance
          </b-navbar-item>
          <b-navbar-item href="#">
            {{ $t('Sponsors') }}
          </b-navbar-item>
          <b-navbar-item href="#">
            {{ $t('Tickets') }}
          </b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a v-if="lang=='tw'" class="button is-link is-light" @click="$i18n.locale='en'">
                <strong>EN</strong>
              </a>
              <a v-else class="button is-link is-light" @click="$i18n.locale='tw'">
                <strong>中</strong>
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
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
                  <div>Implementing <b>Scrum</b>, Embracing <b>Scrum</b>, and let <b>Scrum</b> be <b>the future of
                    work.</b></div>
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
          beneficiaries. Our intention is simple and pure to help change the long-standing rigid thinking, working
          pattern and work culture in Taiwan.
        </el-col>
        <el-col v-else :offset="2" :span="20" class='about_the_event_block'>
          <h2>開始與永續</h2>
          20年前—2001年Scrum Alliance 成立，是為了推動敏捷運動。
          <br/>
          10年前—2011年Scrum 漸漸的被引進台灣，是為了改變工作方法。
          <br/>
          今年—2021年 Scrum Alliance 成立的20週年，台灣即將迎來史上第一次Regional Scrum Gathering℠ TAIPEI 2021，在台北舉行。 <br/><br/>
          Regional Scrum Gathering℠ TAIPEI是由一群敏捷實踐者及受益者的志工們所共同推動，我們的起心動念很單純、也很純粹的想改變台灣長久以來僵化的工作思維、工作模式以及工作文化。
        </el-col>
      </el-row>
      <el-row class="block-container">
        <el-col :lg="{span: 18, offset: 3}" :md="{span: 20, offset: 2}">
          <el-col :sm="{span: 9, offset: 1}" :xs="{span: 22, offset: 1}">
            <el-card class="card" shadow="hover" style="{padding: 10px}">
              <img class="card-image"
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
                    <el-button id="submission-btn" class="card-btn"
                               type="primary"
                               @click="open('https://zh.surveymonkey.com/r/rsgTaipei2021speaker')">
                      {{ $t('Submission') }}
                    </el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="{span: 9, offset: 1}" :xs="{span: 22, offset: 1}">
            <el-card class="card" shadow="hover" style="{padding: 10px}">
              <img class="card-image"
                   src="@/assets/imgs/handshake.jpeg">
              <div style="padding: 14px;">
                  <span>{{
                      $t('The biggest agile event in Taiwan in 2021! Join RSG Taipei 2021 sponsorship program to enhance your reputation and increase your agile talent asset.')
                    }}</span>
                <div class="bottom clearfix">
                  <el-button id="sponsor-btn"
                             class="card-btn"
                             type="primary" @click="open('https://forms.gle/RUa3izi16dwb5Go37')">
                    {{ $t('Sponsor') }}
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
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
        <el-col :md="{span: 8, offset: 2}" :sm="{span:24}">
          Contact US:
          <font-awesome-icon :icon="['fas', 'envelope']"/>
          rsgtpe@outlook.com
          <div>
            <font-awesome-icon :icon="['fab', 'facebook']" class="shortcut-btn"
                               @click="redirect('https://www.facebook.com/rsgtaipei2021')"/>
          </div>
        </el-col>
        <el-col :md="{span: 8, offset: 2}" :sm="{span:24}">
          <div style="line-height: 40px;">LANGUAGE:
            <b-button class="footer-btn" type="is-ghost" @click="$i18n.locale='en'">English</b-button>
            |
            <b-button class="footer-btn" type="is-ghost" @click="$i18n.locale='tw'">中文</b-button>
          </div>
          <div>© 2021 Agile Community Taiwan / Taiwan Agile Tribe</div>
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
      let message = locale_config[this.lang]
      i18n.setLocaleMessage(this.lang, message)
      this.$i18n.locale = this.lang
    }
  },

  methods: {
    redirect(url) {
      window.location.href = url
    },

    open(url) {
      window.open(url)
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


.container {
  width: 100% !important;
  max-width: 100% !important;
  top: 30px;
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
}

.card-btn {
  float: right;
  position: relative;
}

.card-image {
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

  .footer-btn {
    color: white;
  }
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
  background: rgb(128, 128, 128)
}

.page-component__scroll {
  height: 500px;
}

.el-scrollbar__wrap {
  overflow: scroll;
  height: 100%;
}

.navbar-brand, .navbar-burger {
  min-height: 5rem !important;
}

.navbar-brand {
  a {
    padding: 0 !important;
  }

  img {
    max-height: 5rem;
  }
}

@media only screen and (max-width: 1300px) {
  .item__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .card {
    height: 45vw;
  }
}

@media only screen and (max-width: 992px) {
  .card {
    height: 60vw;
    margin: 10px;
  }

  .card-image {
    width: 100%;
    display: block;
  }

  .container {
    top: 0 !important;
  }

  .el-header, .header {
    height: 3.5rem !important;
    min-height: 3.5rem !important;
    max-height: 3.5rem !important;
  }

  .navbar-brand {
    a {
      padding: 0 10px !important;
    }

    img {
      max-height: 3rem;
    }

    a.navbar-burger.burger {
      margin: 15px 0 15px auto !important;
    }
  }
}

@media only screen and (max-width: 767px) {
  .card {
    height: auto;
  }

  .card-image {
    width: 100%;
    display: block;
  }

  .el-menu {
    display: none;
  }
}
</style>
