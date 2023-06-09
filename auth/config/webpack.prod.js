const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js", // optimized for caching,
		publicPath: "/auth/latest/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "auth",
			filename: "remoteEntry.js",
			exposes: {
				"./AuthApp": "./src/bootstrap",
			},
			shared: dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
