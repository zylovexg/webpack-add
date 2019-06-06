## 要使用 yarn 的话，要自己安装。本例没有使用
## npm install
## npm run dev 或者 npm run build 

## 说明：
### 1、必须安装 node.js。并且 node.js 的版本在 5.0 以上。
### 2、npm init -y 为生成 package.json 文件。
### 3、两条命令可以简写为：npm i -d webpack webpack-cli。
### 4、建议安装到项目中而非全局环境下。安装到全局环境下可能导致有的插件无法使用以及避免不同的项目依赖的版本不同而出现问题。
### 5、4.x 的版本把 cli 分离出来了，所以必须安装 webpack-cli。
### 6、验证是否安装成功：webpack -v。


## 步骤：
### 1、创建一个项目，例如：webpack-demo
### 2、npm init -y 创建 package.json
### 3、npm i -d webpack webpack-cli
### 4、在 package.json 文件里配置 scripts，就可以用 npm/yarn 来执行了。
```json
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
```
### 5、在根目录下创建 index.html 文件
### 6、在根目录下创建 src 文件夹，并创建两个 main.js 和 show.js 以及 say.js
### 7、在根目录下创建 webpack.config.js 配置文件

## webpack.config.js 里参数备注
### 1、entry：入口文件。
#### a.只打包一个文件（单入口），写个字符串
#### b.把多个文件打包成一个文件，写个数组
#### c.把多个文件分别打包成多个文件，写成对象
#### d.webpack 把打包后的文件叫 Chunck
### 2、output：出口文件。Object
```javascript
  output: {
    path: path.resolve(__dirname, '输出文件的路径'),
    filename: '[name].js'
  }
```
#### a.filename: 输出文件的名称。输出一个文件，写个字符串；输出多个文件，文件名前面加个标识符（id/name/hash），用法[id].[name].[hash]。
#### b.path：输出文件的路径。路径必须为绝对路径；__dirname 是 nodejs 里的一个模块，表示当前文件的绝对路径；path 为 nodejs 的系统模块，直接引入后调用 path.resolve(__dirname, '输出文件的路径')。

### webpack 的执行过程
#### 先打开根目录下的 webpack.config.js
#### 找entry（入口）属性的值
#### 进入到main.js里，看到它又依赖show.js，再找到show.js
#### 把main.js与show.js合并成一个js文件
#### 在webpack.config.js里找到output（出口）属性
#### 解析output里的path与filename属性的值
#### 把第4步合并成的js文件放到dist文件夹里，并起个名字叫bundle.js
