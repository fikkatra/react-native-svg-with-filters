const {mergeConfig, getDefaultConfig} = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  //   reporter: require('@dynatrace/react-native-plugin/lib/dynatrace-reporter'),
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'svg'],
    extraNodeModules: {
      stream: require.resolve('readable-stream'),
    },
  },
};
module.exports = mergeConfig(defaultConfig, config);
