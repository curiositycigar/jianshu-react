/**
 * Created by YOU on 2018/5/2.
 */
const tsImportPluginFactory = require('ts-import-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {getLoader} = require("react-app-rewired");

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
    rule.loader &&
    typeof rule.loader === 'string' &&
    rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [tsImportPluginFactory({
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: 'css',
      })]
    })
  };

  if(!config.module.rules){
    config.module.rules = []
  }

  config.module.rules.push({
    test: /\.styl?$/,
    use: ExtractTextPlugin.extract({
      fallback: ['style-loader'],
      use: ['css-loader', 'stylus-loader']
    })
  })

  if(!config.plugins){
    config.plugins = []
  }

  config.plugins.push(new ExtractTextPlugin('style.css'))

  return config;
}