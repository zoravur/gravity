/* eslint-disable */

module.exports = {
    entry: {
        main: "./src/index.ts",
        worker: "./src/Worker.ts"
    },
    // output: {
    //     filename: "main.js",
    //     path: __dirname + "/dist"
    // },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
};