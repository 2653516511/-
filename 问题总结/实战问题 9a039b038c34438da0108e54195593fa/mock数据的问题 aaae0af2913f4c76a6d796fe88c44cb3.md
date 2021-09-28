# mock数据的问题

数据的接口还没有写好，但是数据结构确定了，前端在开发的过程中，就可以自己先mock数据，进行开发。

数据的mock有两种情况：

1. 该组件调用的静态的mock数据；
2. 该组件调用的接口的mock数据；

1. 首先，第一种，静态的mock数据
    
    直接建立如下所示的文件位置：
    
    ```jsx
    -option
    	-index.vue
    	-data.js      // mock的数据文件
    ```
    
    其中data.js中的数据格式为：
    
    ```jsx
    export const PET_DATA = {
    	title: '...',
    	content: '...',
      ...
    }
    export const KET_DATA = {
    	title: '...',
    	content: '...',
      ...
    }
    ```
    
2. 其次，第二种，需要调用接口的mock数据
    
    mock的数据结构必须和接口中返回的数据结构相同。
    
    首先建文件，在主src下的api中：
    
    ```jsx
    -src
     -api
      -exam.api.js     // mock的数据文件
    
    ```
    
      然后，写入内容
    
    ```jsx
    import request from '@/utils/request';
    
    /**
     * 获取试卷模版list
     *
     * YApi: https://yapi.pri.ibanyu.com/project/11/interface/api/39816
     *
     * @param {object} data
     * @returns {Promise}
     */
    export const getExamTempList = (data = {}) => {
    	return request({
    		url: '...',
    		data,
    	})
    }
    
    /**
     * 获取考卷内容
     *
     * YApi: https://yapi.pri.ibanyu.com/project/11/interface/api/39803
     *
     * @param {object} data
     * @returns {Promise}
     */
    export const getExamPaper = (data = {}) => {
    	const mockData = {...}
    	return new Promise((resolve, reject) => {
    		resolve(mockData)
    	})
    
    	// return request({
        //     url: '...',
        //     data,
        // });
    }
    ```
    
3. 补充: 数据驱动视图的思想