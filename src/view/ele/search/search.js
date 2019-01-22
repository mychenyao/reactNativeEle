import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import WechatIMG4_03 from '../../../static/images/WechatIMG4_03.png'
const {width} = Dimensions.get('window')
class Search extends Component {
    static navigationOptions = () => ({          //设置样式
        headerStyle:{            //设置导航栏样式
            backgroundColor: "#fff",  //背景色
        },
        headerTintColor: "#000",   //导航的字体颜色
        headerTitle: <TextInput
            placeholder={'想吃什么搜一搜'}
            style={{
                height: 40,
                borderColor: 'gray',
                backgroundColor: '#e6e6e6',
                paddingLeft: 17,
                flex: 1,
                borderRadius: 50
            }}
        />,
        // headerLeft: (<Text>饿了么</Text>),      //设置左边的标签
        headerRight: (
           <Text style={{
               color: '#000',
               fontSize: 16,
               marginRight: 16
           }}>搜索</Text>
        )
    })
    constructor(props) {
        super(props)
        this.state = {
            searchList: [
                '饿了么超级套餐',
                '芝士局榴莲',
                '小食开心纷享',
                '浓情蜜意二人套餐',
                '辞旧迎新套餐',
                '果乐多多',
                '乐享单人套餐'
            ]
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15
            }}>
                <Text style={styles.search_title}>
                    热门搜索
                </Text>
                <View style={styles.search_content}>
                    {
                        this.state.searchList.map((v, i) => <View key={i} style={styles.search_item}>
                            <Text style={{fontSize: 14}}>{v}</Text>
                        </View>)
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search_item: {
        backgroundColor: '#eeeeee',
        paddingLeft: 14,
        borderRadius: 4,
        alignItems: 'center',
        paddingRight: 14,
        color: '#000',
        paddingTop: 7,
        marginBottom: 7,
        marginRight: 10,
        paddingBottom: 7,
    },
    search_title: {
        color: '#000',
        fontWeight: 'bold'
    },
    search_content: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Search)