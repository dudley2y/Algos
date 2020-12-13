const path = require("path");

const configuration = {
    entry: './src/react/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        port: 3000,
        hot: true
    }
}

module.exports = configuration;

