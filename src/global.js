import Unit from './plugins/unit'

global.lang = localStorage.getItem("lang") || 'zh';
global.Unit = Unit;