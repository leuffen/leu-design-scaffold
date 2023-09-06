const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'assets/style': './src/style.scss',
        'assets/bs': './src/bs.scss',

    },
    cache: true,
    module: {
        rules: [

            {
                enforce: 'pre',
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {

                        loader: 'css-loader',
                        options: {
                            url: false // don't complain about url() in css
                        }

                    }, 'sass-loader'],
                include: path.resolve(__dirname, "")
            },


        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    //devtool: 'source-map',
    watch: true,
    mode: "development",
    devServer: {
        client: {
            overlay: true,
        },
        static: {
            directory: path.join(__dirname, 'html'),
            watch: true,
        },
        liveReload: true,
        watchFiles: {
            paths: ['src/*', 'html/*']
        },
        port: 4000,
        hot: false
    },
    plugins: [

        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),


    ],



    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '/tmp/'),
    },
};
