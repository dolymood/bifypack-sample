var loading = require('../../../components/loading/loading')
var $ = require('jquery')
var _ = require('underscore')

var ary = _.map([1, 2], function (v) {
	return ++v
})

loading.init()

setTimeout(function () {
	$('.container').append('<br>p1<br>' + ary.join('<br>'))
	loading.hide()
}, 2000)
