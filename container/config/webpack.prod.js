const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js", // optimized for caching
		publicPath: "/container/latest/", // tells webpack how to refer to a file generated in a build
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container", // not really used, but it's recommended to set it anyway
			remotes: {
				marketing: `marketing@http://${domain}/marketing/latest/remoteEntry.js`,
			},
			shared: dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
