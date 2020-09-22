require("ignore-styles");

require("@babel/register")({
    ignore: [/(node_module)/],
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("@babel/core").transform("code", {
    filename: "../src/**/*/**",
    presets: ["@babel/preset-typescript"],
});

require("./server");
