let webpack = require("webpack");
module.exports = {
	//devtool:"source-map",
	entry: __dirname + "/app/main.js",
	output: {
		//导出文件的名字
		filename: '[name].js?v=[chunkhash:6]',
		//导出的路径
		path: __dirname + "/public"
	},
	module: {
		loaders: [{
			//匹配对应的后缀文件类型
			//cnpm install style-loader css-loader
			test: /\.css$/,
			//用两个loader就用!隔开 style在css之前
			loader: "style-loader!css-loader"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}, {
			test: /\.(jpg|png|jpeg|gif)$/,
			loader: "url-loader"
		}, {
			//ES6^=>ES5
			test: /\.js[x]?$/,
			loader: "babel-loader"
		}, {
			test: /\.less$/,
			loader: "less-loader"
		}]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
		contentBase: "./public", //服务器需要加载的文件夹目录
		inline: true, //实时更新
		port: 12345,
	}
}