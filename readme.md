## 关于karma UT的 相关问题记录 
### 相关配置项已经配置完毕
     npm install
     npm run test   // 本地的多浏览器测试
     npm run f2etest  // 云端虚拟机的多浏览器测试

### 浏览器不识别 import 和 require 
> .babelrc 已经做了相关配置。

### karma.conf.js 

> 说下单元测试覆盖率的问题

    preprocessors: {
        'sdk/**/*.min.js': ['coverage', 'babel'],
        'test/**/*.js': ['babel']
    },
    // 测试过程中 一开始的覆盖率一直是 0.百度查询说 只要写上 coverage就可以，一开始的顺序是 ['babel','coverage']。
    // 一开始的顺序 用  2.0.1 版本的 karma-coverage 覆盖率0， 1.0.0 版本的 karma-coverage 覆盖率 99%。
    // 更换顺序后才正常

> preprofessors 是要预加载的文件，files 是要出现在浏览器中的文件 ，单元测试引用的文件 一定要在这两个配置项写出来。







    