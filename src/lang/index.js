import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from './tw.json'
import en from './en.json'

Vue.use(VueI18n)

const locale = 'tw'

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
