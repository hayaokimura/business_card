module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                // .js
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/react'
                            ]
                        }
                    }
                ]
            }
        ]
    }
};