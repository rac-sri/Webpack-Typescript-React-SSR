module.exports = {
    devtool: "eval-source-map",
      devServer: {
		historyApiFallback: true,
	},
    mode: "development",
    entry: "./src/index.js",
    target: "web",
};
