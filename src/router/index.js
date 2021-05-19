import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function importAll(r, arr) {
	r.keys().forEach((key) => {
		let path = (key.split('.'))[1];
		path.indexOf('Home') > -1 ? path = '/' : '';
		arr.push({
			path: path,
			name: path.substring(1),
			component: () => r(key)
		})
	});
	return arr;
}
let routes = []
routes = importAll(require.context('../views/', false, /\.vue$/, 'lazy'), routes)
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
