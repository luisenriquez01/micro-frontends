const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js", // optimized for caching,
		publicPath: "/marketing/latest/",
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

module.exports = merge(commonConfig, prodConfig);
