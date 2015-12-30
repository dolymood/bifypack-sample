var instance
var tpl = require('./loading.tpl')
require('./loading.less')

module.exports = {
	init: function (tip) {
		if (typeof instance !== 'undefined' && instance) {
			instance.innerHTML = tpl({text: tip || '加载中'})
			this.show()
			return instance
		}

		instance = document.createElement('div')
		instance.setAttribute('class', 'loading')
		tip = tip || '加载中'
		instance.innerHTML = tpl({text: tip})
		document.body.appendChild(instance)

		return instance
	},

	show: function () {
		if (typeof instance !== 'undefined') {
			instance.style.display = 'block'
		}
	},

	hide: function () {
		if (typeof instance !== 'undefined') {
			instance.style.display = 'none'
		}
	},

	destory: function () {
		if (typeof instance !== 'undefined') {
			document.removeChild(instance)
		}
	}
}
