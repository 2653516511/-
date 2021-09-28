# 简单webpack配置(simple configuration)

在「vue.config.js」中的「configureWebpack」中(providing an object to the configureWebpack option in vue.config.js)，操作。例如：

```jsx
// vue.config.js
module.exports = {
	configureWebpack: {
		plugins: [
			new MyAwesomeWebpackPlugin()
		]
	}
}
```

> WARNING
Some webpack options are set based on values in vue.config.js and should not be mutated directly. For example, instead of modifying output.path, you should use the outputDir option in vue.config.js; instead of modifying output.publicPath, you should use the publicPath option in vue.config.js. This is because the values in vue.config.js will be used in multiple places inside the config to ensure everything works properly together.
> 

conditional behavior based on the environment, or directly mutate the config, use a function(「which will be lazy evaluated after the env variables are set」). 

- the function receives the resolved config as the argument.
- inside the function, either mutate the config directly, OR  return an object which will be merged:

```jsx
// vue.config.js
module.exports = {
	configureWebpack: config => {
		if(process.env.NODE_ENV === 'production') {
			// mutate config for production ...

		} else {
			// mutate for development ...
		}
	}
}
```