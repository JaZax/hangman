const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        contentBase: './dist',
        historyApiFallback: true,
    },
    entry: path.resolve(__dirname, "./src/app.js"),
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',]
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}