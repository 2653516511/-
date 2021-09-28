# 虚拟dom和diff算法

之所以需要虚拟dom，是因为浏览器操作dom的代价比较昂贵，频繁操作dom会产生性能问题。

虚拟dom的作用是：每一次响应式数据发生变化，引起页面重新渲染时。vue对比更新前后的虚拟dom，匹配找出尽可能少的需要更新的真实dom。

“差量更新”：定位需要更新的部分 → 生成“补丁集” → 将“补丁”打在需要更新的那部分真实dom上

![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled.png)

### 虚拟dom解决的问题

1. 研发体验 / 研发效率：这一点前面已经反复强调过，DOM 操作模式的每一次革新，背后都是前端对效率和体验的进一步追求。虚拟 DOM 的出现，为数据驱动视图这一思想提供了高度可用的载体，使得前端开发能够基于函数式 UI 的编程方式实现高效的声明式编程
2. 跨平台：虚拟 DOM 是对真实渲染内容的一层抽象。若没有这一层抽象，那么视图层将和渲染平台紧密耦合在一起，为了描述同样的视图内容，你可能要分别在 Web 端和 Native 端写完全不同的两套甚至多套代码。但现在中间多了一层描述性的虚拟 DOM，它描述的东西可以是真实 DOM，也可以是iOS 界面、安卓界面、小程序......同一套虚拟 DOM，可以对接不同平台的渲染逻辑，从而实现“一次编码，多端运行”，如下图所示。其实说到底，跨平台也是研发提效的一种手段，它在思想上和1是高度呼应的。

![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%201.png)

### vue中的diff算法

1. 首先，生成vnode函数。参数包括标签sel、data、children、text（children和text不会同时出现）、elm（对应的真实的dom的节点）、key。返回一个对象，给h函数
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%202.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%203.png)
    
2. 然后使用patch函数，判断
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%204.png)
    
    1 将vnode渲染到空的容器container中
    
    2 页面更新时，新的vnode替换掉旧的vnode
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%205.png)
    
3. 判断如果为相同节点（标签和key相同），则实行patchvnode方法。判断有无text或者children，有text的操作和有children的操作。
    
    如果一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)。如果都有子节点，则执行下一步4
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%206.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%207.png)
    
4. 新的vnode和老的vnode 都有children时，执行updateChildren方法「diff算法的核心」。
    
    老的节点的 「oldstartidx, oldendinx」和新的节点的「newstartidx, newendinx」两两对比，分四种情况，如果是相同节点（标签和key相同），则执行patchvnode方法。如果不同，则判断新节点有key的话，拿到key在旧的节点中找，找到的话，比较标签，不同则执行insertbefore，相同则执行patchvnode方法，两个相同的节点作为更新即可。
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%208.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%209.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%2010.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%2011.png)
    
    ![Untitled](%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff%E7%AE%97%E6%B3%95%205eca7bbc14e34e7e9e034ec51a24fa4d/Untitled%2012.png)
    

### vue和react中的diff算法有什么不同？

在diff算法中，只对同层对子节点进行比较，放弃跨级的节点比较，使得时间复杂度从O(n^3)降低到0(n)，即，只有当新旧节点都有  children子节点时  才需要 使用diff算法进行同层级的比较。

1. 对比节点：节点的元素类型相同，但是class name 不同：vue中认为是不同类型的元素，删除重建；但是react中认为是同类型的节点，只是修改节点属性；
2. 对比列表：vue中采用两端向中间对比 的方式；react中采用从左向右一次对比。对于一个集合，如果只是最后一个节点移动到了第一个：react会把前面的节点依次移动，vue中只会把最后一个节点移动到第一个。

总体来说，vue的对比方式更高效。

### vue 3.x 比vue 2.x 在虚拟dom上的提升

vue 3.x 借鉴了  ivi算法 和 inferno算法。

创建vnode时，就确定了它的类型。

在mount / patch 时采用 「位运算」判断vnode的类型。

配合核心的diff算法，在性能上较 vue 2.x 有了提升。

0. references:

[https://www.bilibili.com/video/BV1dV411a7mT?p=7](https://www.bilibili.com/video/BV1dV411a7mT?p=7)