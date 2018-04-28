<template lang="pug">
	section
		div.toast_btn(@click="showToast") 显示 toast
</template>

<script>
// README.md

/*  this.$toast('String')
	this.$toast({
		position: 'top | bottom | middle(default)',
		message: 'String',
}) */

export default {
	name: 'Toast',
	data () {
		return {
			value: '父组件动态传值'
		}
	},
	mounted () {
	},
	methods: {
		showToast () {
			this.$toast({
				// position: 'top',
				message: 'toast 轻提示！'
			})
		},
	},
}
</script>

<style lang="stylus" scoped>
	.toast_btn
		line-height: 1.6em
		font-size: 18px
		border: 1px solid #93f
		border-radius: 4px
		margin-top: 20vh
		width: 80%
		margin-left: 10%

</style>
