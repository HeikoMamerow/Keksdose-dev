module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [
        require('postcss-import')(),
		require('stylefmt')(),
        require('postcss-cssnext')(),
        require('postcss-pxtorem')({
            propList: ['*']
        }),
        require('cssnano')()
    ]
})