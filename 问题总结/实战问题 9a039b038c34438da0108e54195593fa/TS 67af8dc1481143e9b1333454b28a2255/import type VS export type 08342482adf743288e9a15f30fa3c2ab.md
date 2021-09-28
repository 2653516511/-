# import type ... VS. export type ...

### import / export type ... 表示什么？

为了能让我们导入类型，ts重用了js的导入语法。

- import / export type ... 表示「仅仅导入/导出」。
- import / export 可以导入/导出 值/类型。
- 只用来标识导入/导出的是类型的申明。

### 如何使用？

使用方法例如：

This feature is something most users may never have to think about; however, if you’ve hit issues under `--isolatedModules`, TypeScript’s `transpileModule` API, or Babel, this feature might be relevant.

TypeScript 3.8 adds a new syntax for type-only imports and exports.

```jsx
import type { SomeThing } from "./some-module.js";
export type { SomeThing };
```

### 为什么要使用？

1. 首先看不使用时，通常的写法：
    1. 
    
    ```jsx
    // ./foo.ts
    interface Options {
    	...
    }
    
    export function doThing (options: Options) {
    	...
    }
    
    // ./bar.ts
    import { doThing, Options } from './foo.js';
    
    function doThingBetter(options: Options) {
    	// do something twice as good
    	doThing(options);
    	doThing(options);
    }
    ```
    
    我们通常不用担心导入了什么，只是导入我们想导入的内容。但是，这里只是一个「导入省略」的功能在起作用。
    
    当ts输出一个js文件时，ts会识别出Options仅仅是当作了一个类型使用，将会删除Options。
    
    ```jsx
    // ./foo.ts
    export function doThing (options: Options) {
    	...
    }
    
    // ./bar.ts
    import { doThing } from './foo.js';
    
    function doThingBetter(options: Options) {
    	// do something twice as good
    	doThing(options);
    	doThing(options);
    }
    ```
    
    这种行为会导致以下问题：
    
    1. ts会混淆导出的究竟是 类型 还是 值；
    2. ts导入省略会去除只包含用于类型申明的导入语句；
    
    对于问题1，看下面的例子：
    
    ```jsx
    import { MyThing } from './some-module.js';
    
    export { MyThing };
    ```
    
    我们无法知道MyThing到底是个值还是类型。
    
    如果MyThing是类型，Babel和ts 使用的 「transpileModule API 」编译出的代码无法正确工作；且 ts的「isolatedModules」编译选项会提示我们，这种将会抛出错误。
    
    因此，无法识别出它「只是个类型」以及「是否应该删除」它。所以「导入省略」并不好。
    
    对于问题2，ts的「导入省略」将会删除只包含用于类型声明的导入语句。
    
    因此，使用者将不得不添加一条额外的声明语句：
    
    ```jsx
    // This statement will get erased because of import elision.
    import { SomeTypeFoo, SomeOtherTypeBar } from './module-with-side-effects';
    
    // This statement always sticks around.
    import './module-with-side-effects';
    ```
    
    例如一个例子，Angularjs (1.x)中，services需要在全局注册，但是其仅仅用于类型声明中：
    
    ```jsx
    // ./service.ts
    export class Service {
      // ...
    }
    register('globalServiceId', Service);
    
    // ./consumer.ts
    import { Service } from './service.js';
    
    inject('globalServiceId', function(service: Service) {
      // do stuff with Service
    });
    ```
    
    但是 ./servide.js 中的代码并不会被执行，导致运行中断。
    
    所以，以上，ts 3.8，添加了「仅仅导入/导出」语法
    
2. import / export type ...
    
    
    - import type 仅用于类型注释或声明，它会被完全删除，运行时不会留下任何代码。
    - export type 仅仅提供一个用于类型的导出，在 TypeScript 输出文件中，它也将会被删除。
    
3. 使用时的注意点
    - It’s important to note that classes have a value at runtime and a type at design-time, and the use is context-sensitive. When using import type to import a class, you can’t do things like extend from it.
        
        ```jsx
        import type { Component } from "react";
        interface ButtonProps {
          // ...
        }
        class Button extends Component<ButtonProps> {
          //               ~~~~~~~~~
          // error! 'Component' only refers to a type, but is being used as a value here.
          // ...
        }
        ```
        
        - If you’ve used Flow before, the syntax is fairly similar. One difference is that we’ve added a few restrictions to avoid code that might appear ambiguous.
            
            ```jsx
            // Is only 'Foo' a type? Or every declaration in the import?
            // We just give an error because it's not clear.
            import type Foo, { Bar, Baz } from "some-module";
            //     ~~~~~~~~~~~~~~~~~~~~~~
            // error! A type-only import can specify a default import or named bindings, but not both.
            ```
            
        
        - In conjunction with `import type`, TypeScript 3.8 also adds a new compiler flag to control what happens with imports that won’t be utilized at runtime: `importsNotUsedAsValues`. This flag takes 3 different values:
            - `remove`: this is today’s behavior of dropping these imports. It’s going to continue to be the default, and is a non-breaking change.
            - `preserve`: this *preserves* all imports whose values are never used. This can cause imports/side-effects to be preserved.
            - `error`: this preserves all imports (the same as the `preserve` option), but will error when a value import is only used as a type. This might be useful if you want to ensure no values are being accidentally imported, but still make side-effect imports explicit.
        
        For more information about the feature, you can [take a look at the pull request](https://github.com/microsoft/TypeScript/pull/35200), and [relevant changes](https://github.com/microsoft/TypeScript/pull/36092/) around broadening where imports from an `import type` declaration can be used.
        
4. 

0. refrences: 

[https://segmentfault.com/a/1190000039800522](https://segmentfault.com/a/1190000039800522)