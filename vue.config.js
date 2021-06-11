module.exports = {
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" },
        proxy: {
            '^/api': {
                target: process.env.URL_API,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },
        css: {
            extract: false,
        },
    }
}