const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack/webpack.common.js");
const loadPresets = require("./webpack/presets/loadPresets");

module.exports = ({ mode, presets }) => {
    const envModeConfig = require(`./webpack/webpack.${mode}.js`);
    return webpackMerge(commonConfig, envModeConfig, loadPresets({ presets }));
};
