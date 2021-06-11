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
    },
    css: {
        extract: false,
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
          },
          {
            test: /\.pug$/,
            oneOf: [
              {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
              },
              {
                use: ['raw-loader', 'pug-plain-loader']
              }
            ]
          }
        ]
      },
}