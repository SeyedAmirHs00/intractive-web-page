module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "main.js",
        publicPath: "dist/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}