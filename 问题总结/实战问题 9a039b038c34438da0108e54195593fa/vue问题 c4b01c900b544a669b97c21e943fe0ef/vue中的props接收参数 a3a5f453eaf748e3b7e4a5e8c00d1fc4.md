# vue中的props接收参数

使用props接收参数的时候，定义参数的type的时候，可以定义多种类型：

```jsx
props: {
	info: {
		type: [String, Array],
		default: ['first', 'second']    // 这行有❌
	}
}
```

 但是，给default的时候，如果如上述的例子，则会报错：

```jsx
Props with type Object/Array must use a factory function to return the default value.” 
```

如果参数是对象类型的props，默认值必须是个工厂函数。所以应该改为：

```jsx
props: {
	info: {
		type: [String, Array],
		default: () => ['first', 'second']    // 改成工厂函数的形式
	}
}
```

附录资料：

[https://stackoverflow.com/questions/51958950/error-message-props-with-type-object-array-must-use-a-factory-function-to-retu](https://stackoverflow.com/questions/51958950/error-message-props-with-type-object-array-must-use-a-factory-function-to-retu)