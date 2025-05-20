import { text } from "stream/consumers";

export default defineAppConfig({
  pages: [
    'pages/list1/index',
    'pages/list2/index',
    'pages/list3/index'
  ],
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/list1/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/list2/index',
        selectedIconPath: 'images/tabbar_news_on.png',
        iconPath: 'images/tabbar_news.png',
        text: '分类'
      },
      {
        pagePath: 'pages/list3/index',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '购物车'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
