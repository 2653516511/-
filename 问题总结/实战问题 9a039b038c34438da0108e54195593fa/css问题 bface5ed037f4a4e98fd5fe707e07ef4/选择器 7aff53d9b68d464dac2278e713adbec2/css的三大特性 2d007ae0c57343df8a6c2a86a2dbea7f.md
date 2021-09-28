# css的三大特性

层叠性、继承性、优先级

1. 层叠性：相同的属性，叠加，只取离的最近的
2. 继承性：子标签继承父标签的某些样式。如文本颜色、字号等
    1. 可以继承的有：text, font-, line- 这些开头的可以继承，及color属性
    2. 补充：
        1. 行高的写法：
            1. font: 12px/24px ..;    24px表示行高
            2. 或者 font: 12px/2 ...； 2表示行高是字号的2倍
        
        ![Untitled](css%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%202d007ae0c57343df8a6c2a86a2dbea7f/Untitled.png)
        
3. 优先级：涉及到css的选择器，标签、class、id、行内等选择器
    1. 各选择器的权重
    
    ![Untitled](css%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%202d007ae0c57343df8a6c2a86a2dbea7f/Untitled%201.png)
    

![Untitled](css%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%202d007ae0c57343df8a6c2a86a2dbea7f/Untitled%202.png)

优先级的权重可以叠加：

![Untitled](css%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%202d007ae0c57343df8a6c2a86a2dbea7f/Untitled%203.png)

优先级权重叠加的例子：

![Untitled](css%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%202d007ae0c57343df8a6c2a86a2dbea7f/Untitled%204.png)