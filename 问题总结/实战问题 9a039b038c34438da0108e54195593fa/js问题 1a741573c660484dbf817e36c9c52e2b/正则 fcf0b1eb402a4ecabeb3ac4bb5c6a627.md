# 正则

new regexp中，还可以使用模版字符串：

```jsx
const noCheck = noCheckList.find((str) => new RegExp(`^${str}$`, 'i').test(item.path));
```