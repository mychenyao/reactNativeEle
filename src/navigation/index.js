import React, { Component } from 'react';
import {StyleSheet, TextInput, TouchableOpacity, Text, Image, View, Dimensions} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import {TabBars} from './tabBars'
import PAGES from './list'
import search from '../static/images/search.png'
import WechatIMG4_06 from '../static/images/WechatIMG4_06.png'
import WechatIMG4_03 from '../static/images/WechatIMG4_03.png'
const {width} = Dimensions.get('window')
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearch: false
        }
    }
    search() {
        const {navigation} = this.props
        navigation.navigate('Search')
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width,
                paddingLeft: 17,
                paddingRight: 17,
                justifyContent: 'space-between'
            }}>
                <Image style={{width: 18, height: 18}} source={WechatIMG4_06}/>
                <View style={{
                    flex: 1,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    <TouchableOpacity onPress={
                                () => this.search()
                            } style={{ flexDirection: 'row'}}>
                                <View style={{
                                    flex: 1,
                                    borderRadius: 50,
                                    height: 40,
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: '#e6e6e6',
                                    alignItems: 'center',
                                    paddingLeft: 18
                                }}>
                                    <Image style={{width: 15, height: 15, marginRight: 3}} source={search}/>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#848484'
                                    }}> 想吃什么搜一搜</Text>
                                </View>
                            </TouchableOpacity>
                </View>
                <Image style={{width: 22, height: 22}} source={WechatIMG4_03}/>
            </View>
        )
    }
}
const AppStackNavigator = createStackNavigator({
    Animations: PAGES.Animations,
    EleMain: {
        screen: PAGES.EleMain,                 //渲染的组件
        path:"EleMain",                 //路径
        navigationOptions: ({navigation, screenProps}) => ({          //设置样式
            title:"首页",          //设置导航栏标题
            headerStyle: {            //设置导航栏样式
                backgroundColor: "#fff",  //背景色
            },
            headerTintColor: "white",   //导航的字体颜色
            // headerLeft: (<Text>饿了么</Text>),      //设置左边的标签
            // headerRight: (jsx),     //设置右边的标签
            headerTitle: <Header screenProps={screenProps} navigation={navigation}/>,     //设置头部的标签
        })
    },
    Search: {
        screen: PAGES.Search,
        path:"Search"
    },
    Movie: PAGES.Main,
    TabBars,
    // Home: PAGES.Home,
})
export default AppStackNavigator
