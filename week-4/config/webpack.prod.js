const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口文件的配置项
  entry: {
    index: [
      path.join(__dirname, '../src/public/scripts/index.es6'),
      path.join(__dirname, '../src/public/scripts/add.es6')
    ],
    tag: [
      path.join(__dirname, '../src/public/scripts/tag.es6'),
      path.join(__dirname, '../src/public/scripts/star.es6')
    ]
  },
  //出口文件的配置项
  output: {
    filename: 'public/scripts/[name]-[hash:5].js',
    publicPath:'http://192.168.1.102:3000',
    path: path.join(__dirname, '../build/')
  },
  //模块：例如解读css，图片如何转换，压缩
  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {'modules': false}], 'stage-0']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  //插件，用于生产模版和各项功能
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"prod"'
      }
    }),

    //自动监控
    new LiveReloadPlugin({
      appendScriptTag: true
    }),

    //把js文件里引入的css文件分离成独立的CSS文件
    new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
    //压缩css文件
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    }),

    //压缩js文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),

    //提取公共文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'public/scripts/common/commons-[hash:5].min.js'
    }),

    new HtmlWebpackPlugin({
      filename: './views/layout.html',
      template: 'src/widget/layout.html',
      inject:false
    }),
    new HtmlWebpackPlugin({
      filename: './views/index.html',
      template: 'src/views/index.js',
      chunks:['commons','index','tag'],
      inject:false
    }),
    new HtmlWebpackPlugin({
      filename: './widget/index.html',
      template: 'src/widget/index.html',
      inject:false
    }),
    new HtmlWebpackPlugin({
      filename: './views/star.html',
      template: 'src/views/star.js',
      chunks:['commons','index','tag'],
      inject:false
    }),
    new HtmlWebpackPlugin({
      filename: './widget/star.html',
      template: 'src/widget/star.html',
      inject:false
    })

  ]
};