<template lang="pug">
	transition(name="vui-toast-pop")
		section.toast__container(
				v-show="visible"
				:class="msgPostion"
			) 
			span.toast__message {{message}}
</template>

<script>
export default {
	name: 'Toast',
	props: {
		message: {
			type: String,
		},
		position: {
			type: String,
			default: 'middle',
		},
	},
	data () {
		return {
			visible: false,
		}
	},
	mounted () {
	},
	computed: {
		msgPostion () {
			let classes = []
			switch (this.position) {
				case 'top':
					classes.push('toast__position__top')
					break
				case 'bottom':
					classes.push('toast__position__bottom')
					break
				default:
					classes.push('toast__position__middle')
			}
			return classes.join(' ')
		},
	},
}
</script>

<style lang="stylus" scoped>
.toast__container
	position: fixed
	max-width: 90%
	background: rgba(0, 0, 0, 0.7)
	z-index: 9999
	border-radius: 4px
	color: #fff
	text-align: center
	transition: opacity .3s linear

.toast__container
	padding: 5px 7px

.toast__position__top
	left: 50%
	top: 10vh
	transform: translate(-50%, 0)

.toast__position__middle
	left: 50%
	top: 50%
	transform: translate(-50%, -50%)

.toast__position__bottom
	left: 50%
	bottom: 10vh
	transform: translate(-50%, 0)

.vui-toast-pop-enter, .vui-toast-pop-leave-to
	opacity: 0
</style>

