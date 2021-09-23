## rewirte my blog


### vite-plugin-pages 
> filesystem generate route

引入后配置处理的文件后缀,即目录， extendroute 可以自己扩展route属性，插件会在生成一个虚拟的目录 `pages-generated` ，import 时会报错，找不到module， 这时候需要在tsconfig.json里面配置types,指定到vite-plugin-pages, 因为该目录下有.d.ts

### nprogress
> 路由加载进度条

```javascript
router.beforeEach(() => { NProgress.start() })
router.afterEach(() => { NProgress.done() })
```


### vite-plugin-md
> md 文件 与vue 文件的互相转换

### Prism
> 轻量的语法高亮库

### markdown-it-prism
> 在markdonw 文件里面使用prism 进行语法高亮