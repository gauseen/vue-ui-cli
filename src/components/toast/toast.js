import Vue from 'vue'
import Toast from './toast.vue'
import { getType } from 'src/utils/tips'
let toastPool = []

const ToastConstructor = Vue.extend(Toast)

let removeDom = () => {
	if (event.target.parentNode) {
		event.target.parentNode.removeChild(event.target)
	}
}

ToastConstructor.prototype.close = (instance) => {
	instance.visible = false
	instance.$el.addEventListener('transitionend', removeDom)
}

const getInstance = () => {
	// if (toastPool.length > 0) {
	// 	return toastPool.shift()
	// }
	return new ToastConstructor().$mount(document.createElement('div'))
}

const ToastFn = (options = {}) => {
	let instance = getInstance()
	let duration = options.duration || 2500
	instance.message = getType(options) === 'string' ? options : options.message
	document.body.appendChild(instance.$el)
	Vue.nextTick(() => {
		instance.visible = true
		instance.position = options.position || 'middle'
		instance.timer = setTimeout(() => {
			instance.close(instance)
		}, duration)
	})
	return instance
}

export default ToastFn
