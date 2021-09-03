# qdd-node-todo

一个用 node + commander + inquirer 实现的命令行任务工具

## 安装
```
npm i qdd-node-todo
```

## 用法
```
// 查看当前支持的选项和命令
t

// 查看当前版本
t --version

// 添加任务
t add <taskName>

// 清除任务
t clear

// 查看所有任务，且可选择任务进行操作
t tasks
```

## 测试
本项目使用 jest 进行单元测试

测试文件读写 db.read 和 db.write

本地运行：
```
yarn test
```