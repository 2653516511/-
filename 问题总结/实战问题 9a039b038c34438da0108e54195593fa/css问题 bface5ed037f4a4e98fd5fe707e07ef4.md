# css问题

1. 给一个div，如果设置了border，但是没有给颜色

```jsx
	border: 1px solid;
```

       那么，给这个div加color时，color不仅会设为其中字体的颜色，同时会设为borer的颜色，但是如果另外设了border-color，那还是根据border-color的颜色走。

2.   css中的文字对齐方式：

```jsx
.sub-title1,.sub-title2{
		word-break: keep-all;
		word-wrap: break-word; /*只对英文起作用，以单词作为换行依据*/
		white-space: pre-wrap; /*只对中文起作用，强制换行*/
		text-align: justify; /*css英文语句的两端对齐*/
		text-justify: inter-ideograph;
		margin-bottom: 8px;
}
```

3.  class命名：

wrap__content—left

wrap__content—right

wrap__article

4. 修改html格式的数据中的样式

```jsx
<style scoped>
.wrap__section__article__material >>> img {
    width: 176px;
    height: 264px;
}
</style>
<style>
/* .wrap__section__article__material img {
    width: 176px;
    height: 264px;
} */
</style>
material.value.replace(/<img/gi, '<img style="" ');

https://vip.kingdee.com/article/8700
```

7.  鼠标是否可以点击：

css属性：[https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)

```jsx
pointer-event: auto | none
```

0）附录：

[https://blog.csdn.net/theLostLamb/article/details/79581984](https://blog.csdn.net/theLostLamb/article/details/79581984)

[https://www.cnblogs.com/jing-tian/p/11013867.html](https://www.cnblogs.com/jing-tian/p/11013867.html)

[动态绑定](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%2037c0fcb151b24fcba71c93a98b4490ca.md)

[css脱离文档流](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/css%E8%84%B1%E7%A6%BB%E6%96%87%E6%A1%A3%E6%B5%81%20019f46061b4641e194d73b9013496728.md)

[::before & ::after的使用](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/before%20&%20after%E7%9A%84%E4%BD%BF%E7%94%A8%201e8b74481e82439aaefd38519118f693.md)

[背景透明，文字不透明](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E8%83%8C%E6%99%AF%E9%80%8F%E6%98%8E%EF%BC%8C%E6%96%87%E5%AD%97%E4%B8%8D%E9%80%8F%E6%98%8E%20ed4a0b89c47b41bba849ca02eb6531d4.md)

[页面滚动](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%8A%A8%2033bc352276d14f32982a6509edf3a401.md)

[display: inline-flex](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/display%20inline-flex%20840b204f47fe4a52803a52027582b22e.md)

[总问题](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E6%80%BB%E9%97%AE%E9%A2%98%206208e75509c64bd5b4be7d1553186fdc.md)

[移动端1px问题](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%20c0e1b22088ab425eaa31284a0318d9a0.md)

[100vh和100%的区别](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/100vh%E5%92%8C100%25%E7%9A%84%E5%8C%BA%E5%88%AB%207831f7d89e954ed1936fa903aaccb283.md)

[居中问题](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E5%B1%85%E4%B8%AD%E9%97%AE%E9%A2%98%2036fe49cf84ac4f108b92722b8f30c541.md)

[linear-gradient](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953.md)

[实现弹框，input前缀](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E5%AE%9E%E7%8E%B0%E5%BC%B9%E6%A1%86%EF%BC%8Cinput%E5%89%8D%E7%BC%80%201175c16a466b423bba676ec40d576b8a.md)

[选择child](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E9%80%89%E6%8B%A9child%20e44fb0537f8c469eb8ed1ac194d8424e.md)

[文本超出隐藏，省略号](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E6%96%87%E6%9C%AC%E8%B6%85%E5%87%BA%E9%9A%90%E8%97%8F%EF%BC%8C%E7%9C%81%E7%95%A5%E5%8F%B7%2081fca96a652e4d608bf82015a1a9e23b.md)

[css类的样式，有空格和无空格区别](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/css%E7%B1%BB%E7%9A%84%E6%A0%B7%E5%BC%8F%EF%BC%8C%E6%9C%89%E7%A9%BA%E6%A0%BC%E5%92%8C%E6%97%A0%E7%A9%BA%E6%A0%BC%E5%8C%BA%E5%88%AB%20a74131af9b0147ec98890177242a0448.md)

[盒子模型](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%20104ae2d2542248a5bdd532130a94e755.md)

[选择器](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E9%80%89%E6%8B%A9%E5%99%A8%207aff53d9b68d464dac2278e713adbec2.md)

[less](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/less%206b29c5d38a094fd9bbbb70237adb8244.md)

[移动端适配问题](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E9%97%AE%E9%A2%98%20db39e92b48cc4f6dae1560361cbc4d8d.md)

[flex](css%E9%97%AE%E9%A2%98%20bface5ed037f4a4e98fd5fe707e07ef4/flex%206f0b1c1917d4496f9719cd872ca003b5.md)