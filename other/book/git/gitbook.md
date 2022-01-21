# GITBOOK 的安装和使用

## gitBook 安装

window 10 环境

### 使用 gitbook

[文档]: https://github.com/GitbookIO/gitbook/blob/master/docs/config.md

1. 安装 node 使用 10 本版，高级本版不兼容 _node-v10.21.0-x64.msi_

2. 安装 `npm install gitbook-cli -g`

3. 初始化 `gitbook init` 新建完成后出现 _README.md_ 和 _SUMMARY.md_ 连个文件，_SUMMARY.md_ 是目录页面。

4. 使用 `gitbook serve` 启动本地服务

5. 使用 `gitbook build` 构建静态网站

生成的 html 文件放入 git.io

### 问题

1. `gitbook serve` 每次改动文件都要重新启动，没有使用热启动 1

### 插件

[插件介绍](https://www.jianshu.com/p/427b8bb066e6)
