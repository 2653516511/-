# computed的使用

1. computed的set的使用：
    
    一般情况下，我们在使用computed的时候，只用的是getter方法，但是有些情况还需要用到setter方法。
    
    ```jsx
    // ...
    computed: {
    	inputValue: {
    		// 从接口拿到数据返回
    		get: function() {
    			let answer = '';
    			answer = ...
    			return answer;
    		},
    		set: function(val) {
    			// 调接口，将输入的val值存入
    			let inputVal = val.trim()
    			// ....
    		}
    	}
    }
    // ...
    
    // ...
    <input v-model='inputvalue' ... />
    // ...
    
    这里需要额外注意一个问题：input中的value每次变化，都会触发set get方法, 所以在实际使用的时候，需要考虑到防抖节流的思想。
    ```
    
2.