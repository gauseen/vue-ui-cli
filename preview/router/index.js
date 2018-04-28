import Vue from 'vue'
import Router from 'vue-router'
import navList from './nav-pub'

// 不需要显示在 home 页
const config = [
	{ path: '/demo', name: 'demo' },
	{ path: '/home', name: 'home' },
]

const routes = [
	...parseRouter(navList),
	...parseRouter(config),
	// redirect routes
	{ path: '/', redirect: '/home' },
]

// 路由解析（包括多层路由）
function parseRouter (items) {
	return items.map((item) => {
		const result = {
			path: item.path,
			name: item.name,
			component: resolve => require([`../pages${item.path}.vue`], resolve),
			children: item.children,
		}
		if (result.children) result.children = parseRouter(result.children)
		return result
	})
}

export default new Router({
	// mode: 'history',
	base: '/',
	routes,
})