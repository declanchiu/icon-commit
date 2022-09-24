<div align="center"> 
  <img alt="guitar" width="100" src="https://guitar-1305021979.cos.ap-guangzhou.myqcloud.com/uPic/commit-git.png">
  <br> <br>

  <h1> 🔋 - Icon - Commit - ⏱ </h1>
</div>
 <br> 

# 🤓 为什么开发这个 cli 

> 因为在我个人的项目中我自己有着自己特色的 commit 因为我喜欢携带 emoji 的提交。而在原 git angular 的提交之上我又自己增加了一些场景的 commit 。

<br>

而之前我是完全使用 Typora 来保存这些携带 emoji 的提交方法来复制粘贴使用并且我每次离开了我自己的电脑在公司或者回家之后编写自己的代码提交的时候我往往需要凭记忆去写我自己特色的 commit ，这个就是当前 cli 诞生的必要性。
 
<br>

<img alt="演示图" src="https://guitar-1305021979.cos.ap-guangzhou.myqcloud.com/uPic/ygxOVx.png">

 <br>

 # 🪐 怎么使用这个 cli

直接安装已经上传到 npm 的 cli，并且安装到全局。
```shell
npm install icon-commit -g
```
### 🎯 当前可操作的命令

```shell
# 查看全部内置的 commit 命令
icc all

# 在准备要写 git commit 的时候调用。例子如下：
icc r fix "解决当前的主页面 bug"

# 直接一整个提交流程，他是 git add . -> git commit -m 'type: message' -> git push。例如如下：
icc p fix "解决当前的主页面 bug"
```

# 👨🏻‍💻 如何克隆代码自己调试？

先克隆本仓库的代码到本地，并且已经安装了 git、node、npm 等工具
```shell
git clone https://github.com/PlayGuitar-CoderQ/icon-commit.git
```

```shell
# 进入项目
cd icon-commit

# 启动项目 (这里推荐使用 pnpm 包管理工具)
pnpm dev
```

> 🪬 在需要使用脚本功能的地方，执行如下。(pnpm start 当成 icc，后面就是上面描述的执行命令)

```shell
# 例子1
pnpm start --help
# 例子2
pnpm start all
```
