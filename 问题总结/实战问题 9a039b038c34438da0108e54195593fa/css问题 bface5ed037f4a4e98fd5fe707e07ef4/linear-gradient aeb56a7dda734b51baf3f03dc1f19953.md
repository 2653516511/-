# linear-gradient

1. 线性
    1. 第一种类型
    
    a. 不设百分比
    
    ```jsx
    background: linear-gradient(red , orange );
    ```
    
    结果：
    
    ![linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled.png](linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled.png)
    
    b. 设百分比：
    
    ```jsx
    background: linear-gradient(red 0%, orange 100%);
    ```
    
    结果：
    
    ![linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%201.png](linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%201.png)
    
    二者没有区别
    
    > 不设百分比时，默认根据颜色的个数设置每个颜色的值，即「100/(个数 - 1)」
    > 
    
    如下面的两种情况：
    
    ```jsx
    background:linear-gradient(
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
    ```
    
    ```jsx
    background:linear-gradient(
        red 0%,
        orange 16.67%,
        yellow 33.33%,
        green 50.00%,
        blue 66.67%,
        indigo 83.33%,
        violet 100%
    );
    ```
    
    结果：
    
    ![linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%202.png](linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%202.png)
    
    > 都设百分比：后一个百分比大等于前一个：渐变过渡区的占比为总的空间(高度或宽度) 减去 上下两个着色块空间占比 剩下的空间
    > 
    
    例：
    
    ```jsx
    background:linear-gradient(
            red 30%,
            orange 70%
        );
    ```
    
    结果
    
    ![linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%203.png](linear-gradient%20aeb56a7dda734b51baf3f03dc1f19953/Untitled%203.png)
    
    > 都设百分比：后一个百分比小于前一个：如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值
    > 
    
    例：
    
    ```jsx
    background:linear-gradient(
        red 50%,
        orange 40%
    );
    ```
    
    即是：
    
    ```jsx
    background:linear-gradient(
        red 50%,
        orange 50%
    );
    ```
    
2. 角度
3.