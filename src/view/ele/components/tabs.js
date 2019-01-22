import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
const WIN_WIDTH = Dimensions.get('window').width
class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: ["点餐","评价","商家"],
            activeIndex: 0
        }
    }
    componentWillMount() {
    }

    onTabs(i) {
        this.setState({activeIndex: i})
    }

    componentDidMount() {}
    render() {
        return (
            <View style={styles.header_nav}>
                    {
                        this.state.navList.map((v, i) =>
                            <TouchableOpacity onPress={() => this.onTabs(i)}  key={i} style={styles.nav_item}>
                                <View>
                                    <Text style={[{
                                        fontSize: 18,
                                        color: '#666',
                                        textAlign: 'center'
                                    }, i === this.state.activeIndex && styles.selected]}>{v}</Text>
                                    {this.state.activeIndex === i &&<View style={styles.border}/> }
                                </View>
                            </TouchableOpacity>
                        )
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header_nav: {
        height: 47,
        paddingLeft: 18,
        paddingRight: 8,
        width: WIN_WIDTH,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    border: {
        height: 3,
        width: 36,
        position: "absolute",
        bottom: -10,
        left:36,
        backgroundColor: '#2395ff'
    },
    selected: {
        fontWeight: 'bold',
        color: '#000',
        // borderBottomColor: '#2395ff',
        // borderBottomWidth: 2
    },
    nav_item: {
        paddingLeft: 10,
        flex: 1,
        paddingRight: 10
    }
})

const mapStateToProps = state => state
export default connect(mapStateToProps)(Tabs)
