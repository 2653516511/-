# computed

计算属性传参数：

1. 使用闭包：
    
    ```jsx
    computed: {
        // ...
    
        /**
         * 获取参加的考试名称
         * @param {number} category 试卷类型
         */
        getExamTitle() {
            return function (category = null) {
                const examType = category === EXAM_TYPE.KET ? 'KET' : 'PET';
                return `${examType}模拟考试`;
            };
        },
    
    		// ...
    },
    ```
    
2.