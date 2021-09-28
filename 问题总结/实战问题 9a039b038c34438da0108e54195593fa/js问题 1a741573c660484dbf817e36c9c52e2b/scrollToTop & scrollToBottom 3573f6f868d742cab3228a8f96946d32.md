# scrollToTop & scrollToBottom

1. 在vue中，页面滚动到顶部
    
    ```jsx
    methods: {
    	// ...
    	scrollToTop() {
    		const el = document.documentElement;
    		this.$nextTick(() => {
    			if(el){
    				el.scrollTop = 0
    			}
    		})
    	}
    
    	// 或者这样
    	// !!! 注意，这里还需要验证。。。。。。。。。。。
      scrollToTopOther() {
    		let sTop = document.scrollingElement.scrollTop;
    		if(sTop > 0) {
    			window.requestAnimationFrame(scrollToTop);
    			window.scrollTo(0, sTop - sTop/2)
    		}
    	}
    	// ...
    }
    ```
    
    页面滚动到底部
    
    ```jsx
    methods: {
    	// ...
    	// ！！！ 注意，这里还需要验证。。。。。。。。。。
    	scrollToBottom() {
    		const el = document.documentElement;
    		this.$nextTick(() => {
    			if(el){
    				// 这里视图上可滚动的容器dom是html，按需修改
    				el.scrollTop = el.scrollHeight - el.offsetHeight;
    			}
    		})
    	}
    	// ...
    }
    ```
    
2.