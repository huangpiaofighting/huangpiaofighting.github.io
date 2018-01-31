[hqw个人博客](https://huangpiaofighting.github.io/)

## GIT使用
git rm -r --cached filename


### 疑问
> 脚手架怎么写  npm 怎么写自己的脚手架？

> 框架用什么好？混合式？React 加不同模块 每个模块用不同的框架？

> 构建工具使用什么？

> 是否使用css预编译？

> 用什么风格写自己的博客？

> 是否使用相应式布局？

### 附件
ExtractTextPlugin没有这个功能呢
再说，ExtractTextPlugin本来就是针对各个页面独有的CSS，根本就不应该打包到同一个CSS文件里（因为怕CSS冲突了）

有需要公用的CSS，可以配合CommonsChunkPlugin，有多个入口调用的话就会被归到公共的chunk里，继而被ExtractTextPlugin打包到公共的CSS文件里的了