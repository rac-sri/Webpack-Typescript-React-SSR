const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "client.js",
        path: path.join(__dirname, "..", "build"),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
