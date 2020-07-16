const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: "./src/index.tsx", // This specifies entry point of our app it could be a single file or array of files
	target: "web",
	mode: "development", // No caption needed
	output: {
		path: path.resolve(__dirname, "build"), // Path defines output directory that we want to output bundled code from our project to the disk/
		filename: "bundle.js", // file specifies our main js file bundled where outputted to be
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	// Add the loaders for our files.
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "awesome-typescript-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			{
				test: /\.css$/,
				loader: "css-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "./src/yourfile.css",
		}),
	],
};
