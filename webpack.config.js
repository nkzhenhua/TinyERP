const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './public/js/main.js',
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  optimization: {
    emitOnErrors: true,
    minimize: false,
    chunkIds: 'named',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.html$/i,
        use: ['text-loader'],
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules'],
    alias: {
      // back compatibal with requireJs grammar 'text!templates/contact_info.html'
      text: 'text-loader'
    }
  },
  externals: {
    gapi          : 'gapi'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".html", '...'],
    enforceExtension: false,
    modules: [
      path.join(__dirname, 'public/js'),
      'node_modules'
    ],
    alias: {
      async          : 'async',
      jQuery         : 'jquery',
      ajaxForm       : 'jquery-form',
      imageCrop      : 'jquery-jcrop',
      jqueryui       : 'jquery-ui',
      spinJs         : 'spin',
      ladda          : 'spin/dist/spin.min.js',
      Underscore     : 'underscore',
      Backbone       : 'backbone',
      socketio       : 'socket.io',
      templates      : path.join(__dirname, './public/templates'),
      collections    : path.join(__dirname, './public/js/collections'),
      constants      : path.join(__dirname, './public/js/constants'),
      helpers        : path.join(__dirname, './public/js/helpers'),
      mixins         : path.join(__dirname, './public/js/mixins'),
      models         : path.join(__dirname, './public/js/models'),
      services       : path.join(__dirname, './public/js/services'),
      views          : path.join(__dirname, './public/js/views'),
      common$        : path.join(__dirname, './public/js/common.js'),
      communication$ : path.join(__dirname, './public/js/communication.js'),
      constants$     : path.join(__dirname, './public/js/constants.js'),
      custom$        : path.join(__dirname, './public/js/custom.js'),
      dataService$   : path.join(__dirname, './public/js/dataService.js'),
      helpers$       : path.join(__dirname, './public/js/helpers.js'),
      populate$      : path.join(__dirname, './public/js/populate.js'),
      router$        : path.join(__dirname, './public/js/router.js'),
      Validation$    : path.join(__dirname, './public/js/Validation.js'),
      dateFormat     : path.join(__dirname, './public/js/libs/date.format.js'),
      d3             : path.join(__dirname, './public/js/libs/d3.v3.min.js'),
      topojson       : path.join(__dirname, './public/js/libs/topojson.v0.min/index.js'),
      jqueryBarcode  : path.join(__dirname, './public/js/libs/jquery-barcode.min.js'),
      malihuScrollBar: path.join(__dirname, './public/js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar'),
      moment         : path.join(__dirname, './public/js/libs/moment/moment.js'),
      backstratch    : path.join(__dirname, './public/js/libs/jquery-backstretch/jquery.backstretch.min.js'),
      wickedpicker   : path.join(__dirname, './public/js/libs/wickedpicker/dist/wickedpicker.min.js'),
      bxSlider       : path.join(__dirname, './public/js/libs/bxslider-4/dist/jquery.bxslider.min.js'),
      dragtable      : path.join(__dirname, './public/js/libs/dragtable/jquery.dragtable.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
       _: 'Underscore',
       $: 'jQuery',
       d3: 'd3',
       io: 'socketio',
       gapi: 'gapi',
       topojson: 'topojson',
       dateFormat: 'dateFormat',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
