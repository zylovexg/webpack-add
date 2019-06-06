const path = require('path');

module.exports = {
  //entry: './src/main.js',   // 单个入口的配置
  //entry: ['./src/main.js', './src/say.js'],   // 多个入口文件配置成一个js文件
  // 对象写法，生成多个js文件
  entry: {
    one: './src/main.js',
    two: './src/say.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}