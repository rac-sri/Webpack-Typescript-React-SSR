const loaders = require("./loaders/");
const plugins = require("./plugins/");
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
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    plugins: [
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
        plugins.HtmlWebPackPlugin,
        new webpack.ProgressPlugin(),
        new webpack.BannerPlugin({
            banner: (yourVariable) => {
                return `yourVariable: ${yourVariable}`;
            },
        }),
    ],
};
