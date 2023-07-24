const fs = require('fs')
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
	if (process.env.ELEVENTY_PRODUCTION) {
		eleventyConfig.addTransform('htmlmin', htmlminTransform)
	}

	// Passthrough
	eleventyConfig.addPassthroughCopy({ 'src/static': '.' })

	// Watch targets
	eleventyConfig.addWatchTarget('./src/styles/')

	// Filters
	// Same initials = same color
	eleventyConfig.addFilter('pickone', (array, initials, order) => {
		let hash = initials.split('').reduce((acc, val) => acc + val.charCodeAt(0) + order * 2, 0)

		return array[hash % array.length]
	})

	// Shortcodes

	return {
		dir: {
			input: 'src',
		},
	}
}

function htmlminTransform(content, outputPath) {
	if (outputPath.endsWith('.html')) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
		})
		return minified
	}
	return content
}
