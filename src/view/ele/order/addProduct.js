import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import add_icon from '../../../static/images/add.png'
import reduce_icon from '../../../static/images/reduce.png'
import {setProuctList} from '../../../redux/actions'
import {connect} from "react-redux"
let eleProductList = []
class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eleProductList: JSON.parse(JSON.stringify(this.props.eleProductList)),
            productSum: 0
        }
        eleProductList = JSON.parse(JSON.stringify(this.props.eleProductList))
    }
    total(arr, key) {
       return arr.map(v => v[key]).reduce((prev, current) => {
            return prev + current
        })
    }
    setEleProductList(parentIndex, currentIndex, add = 0) {
        let {menu} = eleProductList
        let {foods} = eleProductList.menu[parentIndex]
        const set = [() => -- foods[currentIndex].size, () => {++ foods[currentIndex].size
                    foods[currentIndex].isSelected = true
                }]
        set[add]()
        menu[parentIndex].productSum = this.total(foods, 'size')
        eleProductList.productSum = this.total(menu, 'productSum')
        /*
        price
        * */
        let prices = menu.map(v => {
                let price = 0
                v.foods.forEach(e => {
                    price += e.price * e.size
                })
                return v.price = price
            })
        eleProductList.priceTotal = prices.reduce((prev, current) => prev + current)
        this.setState({eleProductList})
        this.props.dispatch(setProuctList(eleProductList))
    }
    add(parentIndex, currentIndex, add) {
        this.setEleProductList(parentIndex, currentIndex, add)
    }
    reduce(parentIndex, currentIndex) {
        this.setEleProductList(parentIndex, currentIndex)
    }
    render() {
        const {parentIndex, currentIndex} = this.props
        const {menu} = this.state.eleProductList
        const {size} = menu[parentIndex].foods[currentIndex]
        return (
                <View style={styles.add_product}>
                        {
                            (menu[parentIndex].foods[currentIndex].isSelected && !!menu[parentIndex].foods[currentIndex].size) &&
                            <TouchableOpacity onPress={() => this.reduce(parentIndex, currentIndex)}>
                                <Image style={{width: 23, height: 23}} source={reduce_icon}/>
                            </TouchableOpacity>
                        }
                        {
                            (menu[parentIndex].foods[currentIndex].isSelected && !!menu[parentIndex].foods[currentIndex].size) && <Text style={{marginLeft: 10, marginRight: 10}}> {size} </Text>
                        }
                        <TouchableOpacity onPress={() => this.add(parentIndex, currentIndex, 1)}>
                            <Image style={{width: 23, height: 23}} source={add_icon}/>
                        </TouchableOpacity>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    add_product: {
        width: 50,
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(AddProduct)
