# chainWebpack (Advanced)

[https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin](https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin)

type: Function

- 用来对内部的webpack进行「更细粒度」的修改
- 接收一个基于「[webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)」的「ChainableConfig」实例

「  VUE CLI内部的webpack配置，是通过 webpack-chain 维护的 」。this library provides an abstraction over the raw webpack config. can define the named loader rules and named plugins, and later "tap" into those rules and modify their options.

> if you are trying to access specific loaders via chaining, [vue inspect](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config) will be extremely helpful.
> 

基本写法：

```jsx
module.exports = {
	chainWebpack: config => {
		consoloe.log('-----chainWebpackConfig', config)
		// TODO
	}
}
```

### Modifying Options of a Loader

```jsx
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          // modify the options...
          return options
        })
  }
}
```

> TIP
For CSS related loaders, it's recommended to use css.loaderOptions instead of directly targeting loaders via chaining. This is because there are multiple rules for each CSS file type and css.loaderOptions ensures you can affect all rules in one single place.
> 

### Add a new loader

```jsx
module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end()
      // Add another loader
      .use('other-loader')
        .loader('other-loader')
        .end()
  }
}
```

### Replacing loaders of a rule

if you replace an existing Base Loader, for example using 「vue-svg-loader」to inline SVG files instead of loading the file:

```jsx
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
```

### Modifying options of a plugin

```jsx
module.exports = {
	chainWebpack: config => {
		consoloe.log('-----chainWebpackConfig', config)
		config.plugin('html')
					.tap(args => {
						return [/* new args to pass to html-webpack-plugin's constructor */]
					}) 
	}
}
```

You will need to familiarize yourself with [webpack-chain's API](https://github.com/neutrinojs/webpack-chain#getting-started) and [read some source code](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/app.js) in order to understand how to leverage the full power of this option, but it gives you a more expressive and safer way to modify the webpack config than directly mutate values.

此外，还可以修改文件的位置。例如：

For example, say you want to change the default location of index.html from /Users/username/proj/public/index.html to /Users/username/proj/app/templates/index.html. By referencing html-webpack-plugin you can see a list of options you can pass in. To change our template path we can pass in a new template path with the following config:

```jsx
// vue.config.js
module.export = {
	chainWebpack: config => {
		consoloe.log('-----chainWebpackConfig', config)
		config.plugin('html')
					.tap(args => {
						args[0].template = '/Users/username/proj/app/templates/index.html'
						return args
					}) 
	}
}
// You can confirm that this change has taken place by examining the vue webpack config with the vue inspect utility
```

### **项目实战中的问题**

在做「开放平台官网」的项目的时候，使用的是react+ts，需要加预渲染「prerender-spa-plugin」，该插件需要修改「webpack.config.js」中的内容，所以需要用到「chainWebpack」，其中的webpack的修改内容如下：

```jsx
// 
const path =  require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
	chainWebpack: (config) => {   // 在chainwebpack中做修改，config中有需要的东西
		 config.plugin('prerender-spa').use(PrerenderSPAPlugin, [
				{
					routes: ['/'],
					staticDir: path.join(__dirname, 'build'),
					// outputDir: path.join(__dirname, 'prerendered'),
          // postProcess(renderedRoute) {
          //     // Ignore any redirects.
          //     renderedRoute.route = '/';
          //     return renderedRoute;
          // },
				}
			])
	}
}
```

        然后，在本地「run build」之后，构建出来的build文件夹中，「index.html」中，body标签的内容为

```jsx
// ...
<div id="root">
	<section class="...">
		// ...
	</section>
</div>
// ...
```

        给div中加了东西，有利于爬虫，而不是传统的，build出来之后div中无任何内容。

在实际做项目的过程中，由于cdn的原因，build 出来的index.html中的div是空的，是因为cdn的原因。  所以，实际的操作，核心是「手动维护」。具体过程：

- .env中的PUBLIC_URL改为‘/’
- run build
- 保存 build → index.html → <style>和<div id='root'> 中的内容
- .env中的PUBLIC_URL改为正常值
- run build
- 添加 build → index.html → <style>... </style>和<div id='root>...</div>
- 注释 .gitignore → /build
- 发测试环境，不能是通常的web发布，而是使用SEO，同样线上也是，这样，运行的build包就是本地传的build包

### Inspecting the Project's Webpack Config

....// TODO