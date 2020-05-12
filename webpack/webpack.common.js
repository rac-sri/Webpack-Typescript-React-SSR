const loaders = require("./loaders/index");
const plugins = require("./plugins/index");
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            loaders.svgLoader,
            loaders.ESLintLoader,
            loaders.babelLoader,
            loaders.htmlLoader,
            loaders.CSSLoader,
            loaders.tsLoader,
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    plugins: [
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
        plugins.HtmlWebPackPlugin,
        plugins.CleanWebpackPlugin,
        new webpack.ProgressPlugin(),
        new webpack.BannerPlugin({
            banner: (yourVariable) => {
                return `yourVariable: ${yourVariable}`;
            },
        }),
    ],
};
