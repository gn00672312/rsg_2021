import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from './tw.json'
import en from './en.json'

Vue.use(VueI18n)

const locale = (function() {
    let lang = (navigator.language || navigator.browserLanguage).toLowerCase()
    if (['zh-tw', 'zh-cn', 'zh-sg', 'zh-sg'].indexOf(lang) >= 0) {
        return 'tw'
    }
    else {
        return 'en'
    }
}())

const messages = {
    tw
}

export const locale_config = {
    'tw': tw,
    'en': en,
}

export const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})
