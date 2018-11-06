
###  针对 create-react-app 脚手架进行配置

**请保持本地`node`, `npm`版本在下方以上，以确保环境可以正常运行**

```
node: v8.11.1

npm : v5.8.0
```

###  主要配置的功能如下：


### 1、webpack 新增base.config.js 文件，可以对 dev和prod文件重置

### 2、react 项目中配置好了 router

### 3、api文件集成了请求后端数据的方法

### 4、commoms 用来写公共组件，已经写了一个实例

### 5、filters 封装了公共方法，类似实现vue的过滤器

### 6、views 主要页面模块

```
本地运行：

yarn start

上线打包：

yarn build
```