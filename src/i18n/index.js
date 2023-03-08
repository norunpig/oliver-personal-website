/*
 * @Author: Oliver 
 * @Date: 2021-07-Su 08:27:26 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2021-07-Su 08:27:26 
 */

import zh from './zh'
import en from './en'

export default {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                language() {
                    return lang == 'zh' ? zh : en;
                }
            }
        })
    }
}