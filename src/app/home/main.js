var loading = require('../../components/loading/loading')
var $ = require('jquery')

loading.init()

setTimeout(function () {
	$('.container').append('<br>home')
	loading.hide()
}, 2000)
