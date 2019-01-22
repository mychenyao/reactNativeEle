import {Image, Dimensions} from 'react-native'
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import PAGES from './list'
const WIN_WIDTH = Dimensions.get('window').width
const WIN_HEIGHT = Dimensions.get('window').height
export const TabBars = createBottomTabNavigator({
    Home: {
        screen: PAGES.Home,
        navigationOptions: ({navigation}) => ({
            title: '首页',
            tabBarIcon: ({focused}) => {
                if(focused) {
                    return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/2771febcd9ffe45f64e648f820ff5651.png' }} />)
                } else {
                    return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/49de0084c2ded55e626d48baf3d8cb62.png' }} />)
                }
            }
        })
    },
    Page: {
        screen: PAGES.Page
    }
}, {
    tabBarOptions: {
        activeTintColor: '#f00',
        showIcon: true,
    }
})





// export const TabBars = createMaterialTopTabNavigator({
//         home: {
//             screen: PAGES.Home,
//             path: 'home',
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '首页',
//                 tabBarIcon: ({focused, tintColor}) => {
//                     if(focused) {
//                         return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/2771febcd9ffe45f64e648f820ff5651.png' }} />)
//                     } else {
//                         return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/49de0084c2ded55e626d48baf3d8cb62.png' }} />)
//                     }
//                 }
//             })
//         },
//         Page: {
//             screen: PAGES.Page,
//             path: 'page',
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: 'page',
//                 tabBarIcon: ({focused, tintColor}) => {
//                     if(focused) {
//                         return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/2771febcd9ffe45f64e648f820ff5651.png' }} />)
//                     } else {
//                         return (<Image source={{ uri: 'https://ptj-master.oss-cn-shenzhen.aliyuncs.com/photo/49de0084c2ded55e626d48baf3d8cb62.png' }} />)
//                     }
//                 }
//             })
//         }
//     },
//     {
//         tabBarCompact: TabBarBottom,
//         tabBarVisible: true,
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         animationEnabled: false,
//         lazy: true,
//         showIcon: true,
//         tabBarOptions: {
//             showIcon: true,
//             activeTintColor: '#eb5312',
//             inactiveTintColor: '#979797',
//             style: {
//                 backgroundColor: '#fff',
//                 width: WIN_WIDTH
//             },
//             labelStyle: {},
//             tabStyle: {
//                 height: 49
//             },
//             indicatorStyle: {
//                 height: 0
//             },
//             iconStyle: {
//                 height: 50,
//                 width: 50,
//                 marginTop: 39
//             }
//         }
//     }
// )
