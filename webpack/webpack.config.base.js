const path = require("path");
const webpack = require('webpack');


module.exports = {
  watch: false,
  entry: {
    main: "./src/assets/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist/assets/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
        jquery: 'jquery/dist/jquery.min'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]
};
