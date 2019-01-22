import React, {Component} from 'react'
import OrderItem from './orderItem'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import {setProuctList} from '../../../redux/actions'
const {height} = Dimensions.get('window')
import ShopCart from './shopCart'
import {connect} from 'react-redux'
class Order extends Component {
    selectItem(activeIndex) {
        this.setState({activeIndex, isScrollView: false}, () => {
            this.scrollViewAttribute.scrollTo({y: this.state.scrollViewAttributes[activeIndex].y, animated: true})
            setTimeout(() => this.setState({isScrollView: true}), 2000)
        })
    }
    scrollViewAttribute
    scrollChange({nativeEvent}) {
        /*TODO:滚动右侧列表左侧对应高亮显示*/
        if(!this.state.isScrollView) return
        const {y} = nativeEvent.contentOffset
        const {heights} = this.state
        for(let i = 0; i< heights.length; i++) {
            if( y <= heights[i] && y < heights[i + 1]) return this.setState({activeIndex: i})
        }
    }
    getContainerAttribute({nativeEvent}) {
      const {height} = nativeEvent.layout
        this.state.height += height
        this.state.scrollViewAttributes.push(nativeEvent.layout)
        this.setState({scrollViewAttributes: this.state.scrollViewAttributes, height: this.state.height }, () => this.setHeights(this.state.height))
    }
    LeftMenu(item, i) {
        const {menu} = this.props.eleProductList
        return (<TouchableOpacity key={i} onPress={() => this.selectItem(i)}>
                   <View style={[styles.left_menu_item, this.state.activeIndex === i && styles.left_menu_active]}>
                       {
                           (i === 0 || i ===1 )&&<Image style={{height: 14, width: 14, marginRight: 3}} source={{uri: this.state.icon[i]}}/>
                       }
                       <Text style={{
                           fontSize: 14,
                       }}> {item.name}</Text>
                       {
                           !!menu[i].productSum && <View style={styles.product_sum}>
                               <Text style={{color: '#fff'}}>{menu[i].productSum}</Text>
                           </View>
                       }
                   </View>
       </TouchableOpacity>)
    }
    setHeights(height) {
        this.state.heights.push(height)
        this.setState({heights: this.state.heights})
    }
    render() {
        const {menu} = this.props.eleProductList
        return (
                <View>
                    <StatusBar
                        backgroundColor={"#fff"}
                        barStyle={"dark-content"}
                    />
                    <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
                        {/*TODO:banner*/}
                        <View>
                            <Image style={{height: 100, }} source={{uri: 'https://fuss10.elemecdn.com/e/1d/3df5608820c69e19353f40fd692cbpng.png?imageMogr/format/webp/thumbnail/686x/'}}/>
                        </View>
                        {/*<View style={{marginTop: 20, marginBottom: 20}}>*/}
                            {/*<Text style={{*/}
                                {/*fontSize: 18,*/}
                                {/*color: '#333',*/}
                                {/*fontWeight: 'bold'*/}
                            {/*}}>商家推荐</Text>*/}
                            {/*<ScrollView scrollEnabled={!this.state.scrollEnabled} horizontal={true}>*/}
                                {/*<View style={{paddingTop: 10,flexDirection: 'row', paddingBottom: 10}}>*/}
                                    {/*<View style={{marginRight: 10}}>*/}
                                        {/*<Image style={{width: 140, marginBottom: 5, height: 140}} source={{uri: `https://fuss10.elemecdn.com/5/a1/aefe3b81e2eafa967a4cb6d6925f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`}}/>*/}
                                        {/*<View>*/}
                                            {/*<Text style={{*/}
                                                {/*fontSize: 18,*/}
                                                {/*lineHeight: 31,*/}
                                                {/*color: '#333',*/}
                                            {/*}}>苏丹王黄金果肉</Text>*/}
                                            {/*<Text style={{ lineHeight: 23}}>月售12份 好评100%</Text>*/}
                                            {/*<Text style={{fontSize: 18, marginTop: 6, color: '#ff5339'}}>¥42</Text>*/}
                                        {/*</View>*/}
                                    {/*</View>*/}
                                {/*</View>*/}
                            {/*</ScrollView>*/}
                        {/*</View>*/}

                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#fff', height: height -110, paddingBottom: 140}}>
                        {/*TODO:left*/}
                        <View style={styles.left_menu}>
                            <ScrollView>
                                <View>
                                    {
                                        menu&&menu.map((item, i) => this.LeftMenu(item, i) )
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        {/*right*/}
                        <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                            <ScrollView onScroll={e => this.scrollChange(e)} ref={(scrollView) => {this.scrollViewAttribute = scrollView}}>
                                <View>
                                    {
                                        menu && menu.map((item, index) => <View onLayout={ event => this.getContainerAttribute(event)} key={index}>
                                            <View style={{marginTop: 10}} >
                                                {
                                                    <Text style={{color: '#333',fontSize: 16,lineHeight: 50, fontWeight: 'bold'}}>{item.name}</Text>
                                                }
                                            </View>
                                            { item.foods.map((items, i) => <OrderItem parentIndex={index} currentIndex={i} item={items} key={i}/>) }
                                        </View>)
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <ShopCart />
                </View>
        );
    }
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            data: {},
            height: 0,
            heights: [],
            scrollViewAttributes: [],
            isScrollView: true,
            scrollEnabled: true,
            icon: ['https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/', 'https://fuss10.elemecdn.com/f/8d/dec5b7355581faa2bf4e24942dcc2png.png?imageMogr/format/webp/thumbnail/26x/']
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.$http.get('http://192.168.2.135:3200/pizza/shopping/restaurants').then(res => {
            const {data} = res.data
            this.setState({data}, () => {
                this.state.data.menu.forEach((v, i) => {
                        v.foods.forEach((e, y) => {
                            e.isSelected = false
                            e.size = 0
                            e.price = e.specfoods[0].price
                        })
                        v.productSum = 0
                        v.price = 0
                })
                this.props.dispatch(setProuctList(this.state.data))
            })
        })
    }
}
const styles = StyleSheet.create({
    left_menu_item: {
        width: 92,
        height: 70,
        paddingLeft: 10,
        flexDirection: 'row',
        paddingRight: 10,
        alignItems: 'center'
    },
    left_menu_active: {
        color: '#333',
        backgroundColor: '#fff'
    },
    product_sum: {
        position: 'absolute',
        top: 3,
        right: 5,
        width: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    left_menu: {
        width: 92,
        backgroundColor: '#f8f8f8'
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Order)