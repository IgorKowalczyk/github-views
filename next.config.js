const CompressionPlugin = require("compression-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
 enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
 reactStrictMode: true,
 pageExtensions: ["mdx", "md", "jsx", "js"],
 poweredByHeader: false,
 trailingSlash: false,
 compress: true,
 images: {
  dangerouslyAllowSVG: true,
 },
 experimental: {
  fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
 },
 webpack: (config, { isServer, dev }) => {
  if (!dev && !isServer) {
   /*Object.assign(config.resolve.alias, {
    "react/jsx-runtime.js": "preact/compat/jsx-runtime",
    react: "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat",
   });*/
   config.plugins.push(
    new CompressionPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
     "process.env.VERSION": JSON.stringify(process.env.npm_package_version),
    })
   ),
    (config.optimization.minimizer = [new TerserPlugin()]);
  }
  return config;
 },
};

module.exports = () => {
 const plugins = [withBundleAnalyzer];
 const config = plugins.reduce((acc, next) => next(acc), {
  ...nextConfig,
 });
 return config;
};
