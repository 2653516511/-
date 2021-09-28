# yarn & npm

### 常用命令：

功能/工具名称	                                   yarn	                                   npm
安装全部依赖	                             yarn / yarn install	                     npm install
添加一个/多个依赖	                    yarn add xx	                              npm install xx
删除一个/多个依赖	                    yarn remove	                              npm uninstall
搜索 package 包	                                /	                                       npm search

### yarn：

> Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 。
> 

```jsx
// 查询源
yarn config get registry

// 更换国内源
yarn config set registry https://registry.npm.taobao.org/

// 恢复官方源
yarn config set registry https://registry.yarnpkg.com

// 删除注册表
yarn config delete registry
```

### npm:

> 注意 npm 更换国内镜像源之后，将无法再使用 npm search 命令，需要恢复为官方源才可以使用，如果恢复官方源后还不可使用，运行删除注册表命令后重试即可。
> 

```jsx
// 查询源
npm config get registry

// 更换国内源
npm config set registry https://registry.npm.taobao.org/

// 恢复官方源
npm config set registry https://registry.npmjs.org

// 删除注册表
npm config delete registry
```