const { merge: webpackMerge } = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
    const presets = env.presets || [];
    const mergePresets = [].concat(...[presets]);
    const mergerConfigs = mergePresets.map((presetName) =>
        require(`./webpack.${presetName}`)
    );
    return webpackMerge({}, ...mergerConfigs);
};

module.exports = applyPresets;
