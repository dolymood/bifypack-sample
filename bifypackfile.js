var path = require('path')

var less = require('gulp-less')
var LessPluginCleanCSS = require('less-plugin-clean-css')
var htmlmin = require('gulp-htmlmin')
var imagemin = require('gulp-imagemin')
var cleanCSSPlugin = new LessPluginCleanCSS({
	advanced: true,
	compatibility: 'ie8'
})

var externals = {
	jquery: '$'
}

var exts = ['gif', 'png', 'jpg', 'jpeg'].join(',')

var config = {
	rev: {
		dontRenameFile: ['.html', '.map', '.jpg', '.jpeg', '.png', '.gif']
		// prefix: 'http://192.168.1.111:8000/'

		// prefix: {
		// 	'.js': '//sj.xxx.com/',
		// 	'.css': '//sc.xxx.com/',
		// 	'.{jpg,jpeg,png,gif}': '//si.xxx.com/'
		// }
	},

	browserSync: {
		port: 4000,
		open: true,
		startPath: '/webroot/sample/',
		server: {
			baseDir: 'dev',
			routes: {
				'/webroot/sample/': 'dev'
			}
		}
	},

	script: {

		eslint: ['app/**/*.js', 'common/**/*.js', 'components/**/*.js'],

		browserify: {

			src: ['app/home/*.js'], // 不考虑利用 factor-bundle 来生成公共文件的入口文件

			bundle: { // factor-bundle
				'app/profile/common/common.js': 'app/profile/*/*.js'
			},

			// exposify -> https://www.npmjs.com/package/exposify
			externals: externals, // browserify.externals（获取externals的key） & exposify.expose

			// https://www.npmjs.com/browse/keyword/browserify-plugin
			plugins: [],

			// https://github.com/substack/node-browserify/wiki/list-of-transforms
			transforms: [
				{
					name: 'node-lessify',
					options: {
						root: path.join(process.cwd(), 'src/'),
						prefix: '/'
					}
				},
				{
					name: 'jstify',
					options: {
						engine: 'lodash.template'
					}
				},
				'partialify'
			]

		},

		normal: { // lib & some require
			'lib/jquery.js': '!node_modules/jquery/dist/jquery.js', // 注意这里用了! ，当后边跟着的是确定的一个地址的时候才可以使用，也就是说 !xx/*.js 是不可以的
			'*': 'lib/*/*.js' // 如果key是*的话，那么就会按照原有目录、文件名输出
		}
	},

	placeholder: {
		script: { // palceholders 一般是为了替换在html中的fake地址
			'<!--SCRIPT_LIB_PLACEHOLDER-->': [
				'lib/jquery.js',
				'lib/fastclick/fastclick.js'
			],
			'<!--SCRIPT_ISCROLL_PLACEHOLDER-->': 'lib/iscroll/iscroll.js'
		},
		style: {
			'<!--STYLE_COMMON_PLACEHOLDER-->': [
				'common/css/g.css'
			]
		}
	},

	html: {
		src: ['**/*.html'], // html tasks
		plugins: [
			function (styleConfig, config, utils) {
				return htmlmin({
					collapseWhitespace: true
				})
			}
		]
	},
	style: {
		src: [
			'common/css/g.less',
			'app/**/*.less'
		],
		plugins: [
			function (styleConfig, config, utils) {
				return less({
					plugins: [cleanCSSPlugin]
				})
			}
		]
	},
	img: {
		src: [
			'components/**/*.{' + exts + '}',
			'app/**/*.{' + exts + '}'
		],
		plugins: [
			function (imgConfig, config, utils) {
				return imagemin()
			}
		]
	}
}

module.exports = config
