# GITBOOK的安装和使用

## gitBook安装

window 10 环境

### 使用gitbook

[文档]: https://github.com/GitbookIO/gitbook/blob/master/docs/config.md

1. 安装node 使用10本版，高级本版不兼容 *node-v10.21.0-x64.msi*

2. 安装 `npm install gitbook-cli -g`

3. 初始化 `gitbook init` 新建完成后出现 *README.md* 和 *SUMMARY.md* 连个文件，*SUMMARY.md* 是目录页面。

4. 使用 `gitbook serve` 启动本地服务

5. 使用 `gitbook build` 构建静态网站 

生成的html文件放入git.io

### 问题

1. `gitbook serve` 每次改动文件都要重新启动，没有使用热启动1 
   