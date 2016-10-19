/**
 * Created by chenanguo on 2016/10/14.
 */
module.exports = {
    entry: './src/js/index.js',
    // 启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存中。
    output: {
        path: './dist/js',
        // 如果配置了publicPath这个字段的值的话，在index.html文件里面也应该做出调整。
        // 因为webpack-dev-server伺服的文件是相对publicPath这个路径的。
        // publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: "/node_modules/",
                loader: 'babel',
                query: {
                    // presets: ['es2015']
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};