const path = require("path");
module.exports = {
    devtool: "eval-source-map",
    mode: "development",
    entry: "./src/app/index.tsx",
    target: "web",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "build", "public"),
    },
};
