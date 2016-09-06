module.exports = {
    entry: "./src/album.js",
    output: {
        path: __dirname+'/dist/js/',
        filename: "album.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader:"babel"},
        ]
    }
};