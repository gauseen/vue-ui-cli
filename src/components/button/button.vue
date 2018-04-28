<template lang="pug">
	div.button__container(
		@click.stop="handleClick"
		:style="borderStyle"
	)
		slot
</template>

<script>

export default {
	name: 'Button',
	props: {
		bdColor: {
			type: String,
			default: '#333'
		},
	},
	methods: {
		handleClick (eve) {
			this.$emit('click', eve)
		},
	},
	computed: {
		borderStyle () {
			return {
				'borderColor': this.bdColor,
			}
		},
	}
}
</script>

<style lang="stylus" scoped>
.button__container
	border: 1px solid
	line-height: 2em
	border-radius: 4px
</style>

