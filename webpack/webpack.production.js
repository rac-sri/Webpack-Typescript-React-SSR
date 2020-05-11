const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "production",
    entry: ["./src/app/index.tsx"],
    output: {
        filename: "client.js",
        path: path.join(__dirname, "..", "build", "public"),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
