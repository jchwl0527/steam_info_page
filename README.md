# steam_info_page

一个用于展示steam库存与好友信息的页面

基于bootstrap4与jQuery

纯前端，全程serveless

bootstrap4的响应式布局，移动设备适用

## API

所有数据均来自于[Steam Web Api](https://steamcommunity.com/dev/)，调用`steam api`需要`apikey`，这个可以去steam页面去申请，在`steam web api` 的相关文档里，只看到**发行商APIkey**不能从前端调用，必须从**安全的服务器**调用，但对于普通用户的apikey没有看到类似的说明与警告。

为了防范与化解apikey泄露带来的安全隐患，用了cloudflare workers对api服务器进行了代理。cloudflare workers的js放在`cfwk.js`里面，粘贴上去并把steam apikey换成自己的就行了，如果嫌麻烦并且不在意steam apikey的泄露，可以直接在前端调用，改一下`index.html`里面的接口url就行，具体调用的对应关系看一下`cfwk.js`就明白了，都十分简单。

## 部署方式

静态页面，想放哪里放哪里。

## TODO

- [ ] 对过长的游戏列表与好友列表进行分页
- [ ] 图片懒加载
- [ ] 把html与js分到两个文件里面
- [ ] 优化展示信息，对没有的信息进行自动隐藏
- [ ] 整合进typechoyemian
- [ ] 采用ifame方式整合到其他页面

## 示例

页面：[https://www.dogcraft.top/steaminfo/](https://www.dogcraft.top/steaminfo/)
API：[https://cfwk.dogcraft.top](https://cfwk.dogcraft.top)
