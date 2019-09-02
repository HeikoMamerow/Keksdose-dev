#!/usr/bin/env node

var bs = require('browser-sync').create();

bs.init({
	proxy: {
		target: 'https://keksdose.test'
	},
	files: [
		'build/**/*',
	],
	notify: false,
	open: false,
	reloadOnRestart: true,
});