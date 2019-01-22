import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Nav from '../components/nav'
class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentWillReceiveProps(state) {
    }

    componentDidMount() {
    }

    render() {
        const {Page} = this.props
        return (
            <View style={{paddingBottom: 30, paddingTop: 30}}>
                <Nav/>
                <Page/>
            </View>
        );
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Main)