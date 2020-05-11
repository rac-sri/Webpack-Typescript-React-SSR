const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "production",
    entry: "./src/server/main.ts",
    target: "node",
    output: {
        filename: "server.js",
        path: path.join(__dirname, "../build"),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
