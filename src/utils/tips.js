// 获取数据具体类型
// 举个栗子: 'string', 'object', 'number', 'null', 'undefined'
export function getType (value) {
	var typer = Object.prototype.toString
	var typeStr = typer.call(value)

	typeStr = typeStr.replace(/.*\s(\w+)\]/g, '$1')
	return typeStr.toLowerCase()
}

// 判断所有数据类型是否为空
export function isEmpty (value) {
	const type = getType(value)

	switch (type) {
		case 'object':
			return Object.keys(value).length === 0
		case 'array':
			return value.length === 0
		case 'number':
			return !isNaN(value)
		default:
			return !!value
	}
}

// 节流函数
export function throttle (fn, delay) {
	let now, lastExec, timer, context, args

	let execute = function() {
		fn.apply(context, args)
		lastExec = now
	}

	return function() {
		context = this
		args = arguments

		now = Date.now()

		if (timer) {
			clearTimeout(timer)
			timer = null
		}

		if (lastExec) {
			let diff = delay - (now - lastExec)
			if (diff < 0) {
				execute()
			} else {
				timer = setTimeout(() => {
					execute()
				}, diff)
			}
		} else {
			execute()
		}
	}
}
