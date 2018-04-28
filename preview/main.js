import Vue from 'vue'
import Router from 'vue-router'
import Vuim from 'src/index.js'

// npm pkg js test
// import Vuim from '../distNpm/dist/js/vui-m.js'

import App from './App'
import RouterConfig from './router'

// import globle css
import 'src/styles/reset.styl'

// npm pkg css test
// import '../distNpm/dist/css/vui-m.css'

Vue.use(Router)
Vue.use(Vuim)

Vue.config.productionTip = false

var vm = new Vue({
	el: '#app',
	router: RouterConfig,
	components: { App },
	template: '<App/>'
})
