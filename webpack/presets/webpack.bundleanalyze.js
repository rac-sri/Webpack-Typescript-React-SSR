const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new WebpackBundleAnalyzer({
            analyzerMode: "server",
            reportFilename: ".report.html",
            openAnalyzer: false,
        }),
    ],
};
