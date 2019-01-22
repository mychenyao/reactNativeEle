import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Tabs from '../components/tabs'
import Order from '../order'

class EleMain extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Tabs />
                <Order/>
            </View>
        );
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = state => state
export default connect(mapStateToProps)(EleMain)