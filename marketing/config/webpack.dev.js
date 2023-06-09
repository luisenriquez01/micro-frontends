const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
	mode: "development",
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: "/index.html",
		},
	},
	output: {
		publicPath: "http://localhost:8081/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "marketing",
			filename: "remoteEntry.js",
			exposes: {
				"./MarketingLandingPage": "./src/bootstrap",
			},
			shared: dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
