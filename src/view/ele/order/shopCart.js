import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import shop_cart from '../../../static/images/shop_cart.png'
import {connect} from 'react-redux'

class ShopCart extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        const {eleProductList} = this.props
        return (
            <View style={styles.container}>
                <View style={{width: 80}}>
                    <View style={styles.shop_cart_container}>
                        {
                            !!eleProductList.productSum && <View style={styles.sum}>
                                <Text style={{color: '#fff', fontSize: 12}}>{eleProductList.productSum}</Text>
                            </View>
                        }
                        <Image style={styles.shop_cart} source={shop_cart} />
                    </View>
                </View>
                <View style={{flex: 1, marginLeft: 20, justifyContent: 'center'}}>
                    <View>
                        <Text style={{
                            color: '#fff',
                            fontSize: 18
                        }}>¥ {eleProductList.priceTotal || 0}</Text>
                    </View>
                    <Text style={{color: '#999', fontSize: 12}}>另需配送费4元</Text>
                </View>
                <View style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 16}}>
                        去结算
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'rgba(61,61,63,.9)',
        position: 'absolute',
        bottom: 135,
        flexDirection: 'row',
        left: 0,
        right: 0
    },
    sum: {
        borderRadius: 20,
        backgroundColor: '#ff3c15',
        width: 19,
        justifyContent: 'center',
        alignItems: 'center',
        height: 17,
        zIndex: 44,
        position: 'absolute',
        top: -12,
        right: -6
    },
    shop_cart_container: {
        position: 'absolute',
        borderWidth: 7,
        borderColor: '#444',
        backgroundColor: '#444',
        borderRadius: 50,
        top: -20,
        marginLeft: 20,
    },
    shop_cart: {
        width: 50,
        height: 50
    },
    button: {
        width: 120,
        backgroundColor: '#38ca73',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
const mapStateToProps = state => state
export default connect(mapStateToProps)(ShopCart)