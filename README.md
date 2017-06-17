====Bcc-Template

#src 项目主目录

     ### `assect` css||less||sass||stylus存放目录
     ### `components` 组件存放目录
     ### `mixins` 混入vue全局函数
     ### `routes` 路由目录
     ### `utils`  工具函数目录
     ### `view`   html文件存放目录
     ### `vuex`   store数据管理目录

#static 静态资源文件存放目录 不会被编译

#dist 打包文件存放目录

#virtual_data 虚拟数据目录 使用json文件 在build中配置虚拟接口调用该数据

#config & build webpack配置文件目录

#.gitignore &.project git配置文件

#.babelrc babel配置文件

     ###开发环境运行命令 npm run dev
     ###开发环境打包命令 npm run build

     ###新建`模块`步骤

     * 创建html到src/view目录
     * 创建入口.js到entry目录