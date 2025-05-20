import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/list1/index',
        selectedIconPath: '../images/tabbar_home_on.png',
        iconPath: '../images/tabbar_home.png',
        text: '首页1'
      },
      {
        pagePath: '/pages/list2/index',
        selectedIconPath: '../images/tabbar_news_on.png',
        iconPath: '../images/tabbar_news.png',
        text: '分类1'
      },
      {
        pagePath: '/pages/list3/index',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: '购物车1'
      }
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx
    })
    Taro.setStorageSync('selected', idx)
  }
  render() {
    const { list, selected, color, selectedColor } = this.state
    // const { list, color, selectedColor } = this.state
    // let selected = Taro.getStorageSync('selected') || 0

    return (
      <View className='tab-bar'>
        <View className='tab-bar-border'></View>
        {list.map((item, index) => {
          return (
            <View key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <Image className='img' src={selected === index ? item.selectedIconPath : item.iconPath} />
              <View style={{ color: selected === index ? selectedColor : color }}>{item.text}</View>
            </View>
          )
        })}
      </View>
    )
  }
}