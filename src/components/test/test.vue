<template lang="pug">
	section
		span Test 组件 {{txt}}
</template>

<script>
export default {
	name: 'Test',
	props: {
		txt: {
			type: String,
			default: '默认值'
		}
	},
}
</script>

<style lang="stylus" scoped>
	span
		color: $test-color
		font-size: 30px
</style>

