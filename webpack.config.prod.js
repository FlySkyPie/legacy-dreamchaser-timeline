const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        fallback: {
            util: require.resolve("util/"),
            path: require.resolve("path-browserify"),
            zlib: require.resolve("browserify-zlib"),
            stream: require.resolve("stream-browserify"),
        },
    },
    module: {
        rules: [
            {
                test: /\.xml$/i,
                use: 'raw-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            }, {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')],
                            },
                        },
                    },
                ],
            }, {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader'
                    }
                ],
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'Vendor',
                    chunks: 'all',
                    test: /node_modules/,
                },
                common: {
                    name: 'Commons',
                    chunks: 'initial',
                    minChunks: 2,
                }
            }
        }
    }

}; 
