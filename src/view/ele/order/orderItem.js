import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AddProduct from './addProduct'
import {connect} from 'react-redux'

class OrderItem extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        const {item, parentIndex, currentIndex} = this.props
        const price = price => {
           return parseInt(((price.original_price - price.price) / price.original_price) *10)
        }
        const textEllipsis = (text, sum) => text.length > sum ? text.substring(0, sum)+'...' : text
        return (
                <View style={styles.menu_item}>
                    <Image style={{width: 110, height: 110}} source={{uri: `https://fuss10.elemecdn.com/5/a1/aefe3b81e2eafa967a4cb6d6925f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`}}/>
                    <View style={{
                        flex: 1,
                        paddingLeft: 10,
                        height: 110
                    }}>
                        <Text style={{
                            fontSize: 17,
                            color: '#333',
                            fontWeight: 'bold'
                        }}>{textEllipsis(item.name, 9)}</Text>
                        {
                            !!textEllipsis(item.description,11) && <Text style={{
                            lineHeight: 22
                        }}>{textEllipsis(item.description,11)}</Text>
                        }

                        <Text style={{ lineHeight: 23}}>月售{item.month_sales}份 好评100%</Text>
                        <View style={
                            !price(item.specfoods[0])&& {height: 20}
                        }>
                            {
                                !!price(item.specfoods[0])&& <Text style={{ color: '#ff5339'}}>{price(item.specfoods[0])}折起</Text>
                            }
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 16, color: '#ff5339'}}>¥</Text>
                            <Text style={{fontSize: 18, color: '#ff5339'}}>{item.specfoods[0].price}</Text>
                            <Text style={{fontSize: 16, color: '#ff5339'}}>起</Text>
                        </View>
                        {/*加加 and 减减*/}
                        {
                            item&&<AddProduct  parentIndex={parentIndex}  currentIndex={currentIndex}/>
                        }
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    menu_item: {
        flexDirection: 'row',
        marginTop: 10,
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(OrderItem)