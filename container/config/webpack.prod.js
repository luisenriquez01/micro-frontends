const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js", // optimized for caching
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container", // not really used, but it's recommended to set it anyway
			remotes: {
				marketing: `marketing@http://${domain}/marketing/remoteEntry.js`,
			},
			shared: dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
