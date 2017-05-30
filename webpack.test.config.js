var path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test:/\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }],
                exclude: /(\/node_modules\/$)/
            },
            {
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                include: path.resolve(__dirname, 'src'),
                enforce: 'post',
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    },
    plugins: [],
    devtool: 'inline-source-map'
}