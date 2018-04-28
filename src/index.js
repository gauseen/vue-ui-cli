// js components
import Test from './components/test'
import Toast from './components/toast'

// css components
import Button from './components/button'

const components = {
	// js components
	Test,

	// css components
	Button,
}

const vui = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(vui).forEach(key => {
		Vue.component(vui[key]['name'], vui[key])
	})

	Vue.$toast = Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install)
}

// 按需引入
export {
	// js components
	Test,
	Toast,

	// css components
	Button,
}

export default install
