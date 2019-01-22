import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <View>
                <Text>Home组件</Text>
            </View>
        );
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(Home)