# 监听离开当前页面

1. 使用react-router的离开确认组件Prompt
    
    使用Prompt监听react中用户离开当前页面的操作：
    
    ```jsx
    // 引入prompt
    import {Prompt} from 'react-router';
    
    // 当前page返回的render中写上
    <Prompt message={() => {
    		// 写逻辑代码  TODO
    
    		console.log('这里离开页面')；
    		return true;     // 返回true表示离开当前页面，false表示留在当前页面
    	}
    
    }></Prompt>
    ```
    
2. 使用react的钩子useEffect的return
    
    react的生命周期，在useEffect中直接写的代码，会在页面进来的时候就执行，但是在其中加return，则是在离开当前页面的时候执行：
    
    ```jsx
    // 引入useEffect
    import React, {useEffect} from 'react';
    
    // 在函数式组件中使用
    export default function Home() {
    	useEffect(() => {
    		console.log('这里进入页面执行')；
    
    		return () => {
    			console.log('这里离开页面执行')
    		}
    	},[])
    }
    
    ```
    
3.