module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // https://www.youtube.com/watch?v=AehQRLkVkiE
    // https://www.nativewind.dev/quick-starts/expo#3-add-the-babel-plugin
    plugins: ["nativewind/babel"],
  };
};
