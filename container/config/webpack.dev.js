const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
	mode: "development",
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "/index.html",
		},
	},
	output: {
		publicPath: "http://localhost:8080/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container", // not really used, but it's recommended to set it anyway
			remotes: {
				auth: "auth@http://localhost:8082/remoteEntry.js",
				marketing: "marketing@http://localhost:8081/remoteEntry.js",
			},
			shared: dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
