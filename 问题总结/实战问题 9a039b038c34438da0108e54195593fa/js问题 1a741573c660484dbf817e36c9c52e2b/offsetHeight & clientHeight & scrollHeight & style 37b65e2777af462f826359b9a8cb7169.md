# offsetHeight & clientHeight & scrollHeight & style.width 等的详细描述

### 1、element.clientHeight

- 只读
- 没有定义css或者内联布局盒子的元素为0
- content + padding
- clientHeight = css height + css padding - 水平滚动条的高度

![Untitled](offsetHeight%20&%20clientHeight%20&%20scrollHeight%20&%20style%2037b65e2777af462f826359b9a8cb7169/Untitled.png)

### 2、HTMLElement.offsetHeight

- 只读
- 是一种css高度的衡量标准
- 不包含:before 和 :after等伪类元素的高度
- 浮动元素的向下延伸内容高度被忽略
- 元素被隐藏，则为0

![Untitled](offsetHeight%20&%20clientHeight%20&%20scrollHeight%20&%20style%2037b65e2777af462f826359b9a8cb7169/Untitled%201.png)

### 3、element.scrollHeight

- 只读
- 包括溢出的内容
- 没有垂直滚动条时，与clientHeight相同
- 包括::before 和 ::after伪元素

### 4、scrollTop

- 可读，可编辑
- 有滚动条时，滚动条向下滚动的距离，即元素顶部被遮住部分的高度
- 没有滚动条时，scrollTop === 0

![Untitled](offsetHeight%20&%20clientHeight%20&%20scrollHeight%20&%20style%2037b65e2777af462f826359b9a8cb7169/Untitled%202.png)

### 5、offsetTop

- 只读
- 元素顶部距离最近父元素顶部的距离
- 和有无滚动条无关

![Untitled](offsetHeight%20&%20clientHeight%20&%20scrollHeight%20&%20style%2037b65e2777af462f826359b9a8cb7169/Untitled%203.png)