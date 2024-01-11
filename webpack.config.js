const TerserPlugin = require("terser-webpack-plugin")
const path = require("path")
const webpack = require('webpack');



module.exports = (env, argv) => ({
    mode: argv.mode === "production" ? "production" : "development",
    devtool: argv.mode === "production" ? false : "inline-source-map",

    entry: {
        code: "./src/index.ts",
    },

    module: {
        rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
    },

    plugins: [
        new webpack.ProvidePlugin({
            "Buffer": ['buffer', 'Buffer']
        }),
        new webpack.ProvidePlugin({
            "Stream": ['stream', 'Stream']
        })
    ],

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        fallback: {
            fs: false,
            tls: false,
            net: false,
            path: false,
            zlib: false,
            http: false,
            https: false,
            crypto: false,
            browser: false,
            util: false,
            url: false,
            console: require.resolve('console-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve("buffer"),
            "crypto-browserify": false,
        },
    },

    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "./dist/"),
    },

    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             extractComments: false,
    //         }),
    //     ],
    // },
})