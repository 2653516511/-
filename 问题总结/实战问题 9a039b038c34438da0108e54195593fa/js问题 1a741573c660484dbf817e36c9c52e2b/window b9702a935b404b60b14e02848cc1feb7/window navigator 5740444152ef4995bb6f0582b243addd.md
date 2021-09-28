# window.navigator

1. 属性/方法
    
    ```jsx
    window.navigator.userAgent
    ```
    
2. 实例操作
    - 判断移动端环境
        
        ```jsx
        const agent = window.navigator.userAgent;
        const screen = window.screen;
        // 例子：iPhone 6/7/8: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        
        let device = {}
        
        device.os = 'default';  // operation system
        device.platform = 'default'; // which platform is running
        device.version = '0.0'; // which version is the os
        
        // Android
        if(/Android/i.test(agent)) {
        	device.os = 'android';
        	device.android = true;
        }
        
        // iOS
        if(/iphone|ipad|ipod/i.test(agent) || (/macintosh/i.test(agent) && 'ontouchend' in document)) {
            device.os = 'ios';
            device.ios = true;
            if(/ipad/i.test(agent) || (/macintosh/i.test(agent) && 'ontouchend' in document)) {
                device.isIpad = true
            }
            let ver = agent.match(/os (.*) like mad of/i);
            if(ver && ver.length >= 2) {
                device.version = version[1].replace(/_/g, '.');
            }
        }
        
        // qq
        if (agent.match(/.*?(qq\/([0-9.]+))\s*/)) {
            device.isQQ = true;
            device.platform = 'qq';
        }
        
        // weibo 
        if (/WeiBo/i.test(agent)) {
            device.isWeibo = true;
            device.platform = 'weibo';
        }
        
        // weChat
        if (/MicroMessenger/i.test(agent)) {
            device.isWeixin = true;
            device.platform = 'wechat';
        }
        
        // Facebook
        if (/facebook|facebot/i.test(agent)) {
            device.isFacebook = true;
            device.platform = 'facebook';
        }
        
        // Twitter
        if (/Twitter/i.test(agent)) {
            device.isTwitter = true;
            device.platform = 'twitter';
        }
        
        // palfish app
        if (
            window.PalfishBridgeAndroid ||
            (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.PalfishBridgeIOS)
        ) {
            device.palfish = true;
            device.platform = 'palfish';
        }
        
        device.isMobile = device.ios || device.android;
        
        // iPhoneX
        if (device.ios && screen.height >= 812) {
            device.isIphoneX = Math.max(screen.width, screen.height) / Math.min(screen.width, screen.height) > 2;
        }
        ```
        
    - 
3.