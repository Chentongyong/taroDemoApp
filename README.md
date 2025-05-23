# taro (react)
## 应用生命周期：
### onLaunch(options)：小程序初始化完成触发（仅执行一次）
### onShow(options)：小程序启动或从后台进入前台时触
### onHide()：小程序从前台切后台时触发
### onError(msg)：发生脚本错误时触发
### onPageNotFound(Object)：找不到页面时触发

## 页面生命周期：
### useLoad(options)：等同于 onLoad
### useDidShow()：等同于 onShow
### useDidHide()：等同于 onHide
### useUnload()：等同于 onUnload

## 组件生命周期：
### constructor()：初始化状态（如示例中的 this.state.date）
### componentDidMount()：组件挂载后执行（适合发起网络请求）
### componentDidUpdate()：状态更新后触发
### componentWillUnmount()：组件卸载前清理资源（如定时器）
