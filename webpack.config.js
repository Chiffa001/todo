const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            { test: /\.svg$/, use: "svg-inline-loader" },
            { test: /\.(scss|css)$/, use: ["css-loader", "style-loader", "sass-loader"] },
            { test: /\.js$/, use: "babel-loader" },
        ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    }
};
